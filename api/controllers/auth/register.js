const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const speakeasy = require("speakeasy")
const { nanoid } = require("nanoid")
const { copyPermissions } = require("../../utils/u_CopyUserPermissions")
const { send_Activation_Mail } = require("../../utils/u_Email")
const { toast } = require('../../utils/u_Toasts');
var AvatarGenerator = require('initials-avatar-generator').AvatarGenerator;
const fs = require('fs')
const axios = require("axios");
const FormData = require("form-data");

exports.register = async (req, res) => {

    if (req.user && req.user.provider !== 'local') {
        await db.users.update({
            where: {
                email: req.user.email
            },
            data: {
                isAcceptedTerms: true
            }
        })
        return res.json({
            status: 1,
            message: await toast("Terms accepted", req.user.languageId)
        })
    }

    const { roleId, email, password, givenName, familyName, terms, companyName } = req.body

    const salt = await bcrypt.genSalt();
    const HPassword = await bcrypt.hash(password, salt)
    const id = nanoid()

    let newUser = await db.users.create({
        data: {
            email,
            provider: "local",
            providerId: id,
            password: HPassword,
            givenName,
            familyName,
            isAcceptedTerms: terms,
            loginMethod: "local",
            roleId: req.defaultRoleId,
            themeId: req.defaultThemeId,
            languageId: req.defaultLanguageId
        },
    })

    const initials = givenName.charAt(0) + familyName.charAt(0)
    var option = {
        width: 100,
        text: initials,
        color: '#f7df20'
    };
    let filePath = './' + initials + '_' + newUser.id + '.png'
    console.log(filePath)
    var avatarGenerator = new AvatarGenerator();
    avatarGenerator.generate(option, async function (image) {
        const write = fs.createWriteStream(filePath);
        await image
            .stream('png') // make a stream out of it
            .pipe(write);
        setTimeout(async () => {
            let avatar = fs.createReadStream(filePath)
            let data = new FormData()
            data.append("file", avatar)

            try {
                await axios({
                    method: "post",
                    url: process.env.CFLARE_ENDPOINT,
                    headers: {
                        Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                        ...data.getHeaders(),
                    },
                    config: {
                        'maxContentLength': Infinity,
                        'maxBodyLength': Infinity
                    },
                    data,
                }).then(async (response) => {
                    let newAvatarId = response.data.result.id;
                    let updUser = await db.users.update({
                        where: {
                            id: newUser.id
                        },
                        data: {
                            avatarId: newAvatarId,
                            avatar: `${process.env.CFLARE_IMG_URL}/${newAvatarId}/public`
                        }
                    })
                })
            } catch (error) {
                console.log(error.message);
            }
        }, 1000)
    });

    let token = jwt.sign(
        { email: newUser.email, status: "activation" },
        process.env.SECRET,
        { expiresIn: '1d' }
    )

    send_Activation_Mail(email, token, givenName, familyName)
    await copyPermissions(newUser.id, newUser.roleId)

    return res.json({ status: 1, message: "Check your email, please..!" })
}


exports.activation = async (req, res) => {
    const { email, status, isVerified } = req
    if (status !== "activation") {
        return res.json({ status: -1, title: "Sorry!", error: "The url you provided is not valid" })
    }
    if (isVerified === true) {
        return res.json({ status: -1, title: "Sorry!", error: "Your account is already activated" })
    }
    try {
        let User = await db.users.update({
            where: {
                email
            },
            data: {
                isVerified: true
            }
        })

        const permissions = await copyPermissions(User.id, User.roleId)

        return res.json({
            status: 1,
            title: "Congratulations!", message: "your account is activated successfully, please sign in",
        })

    } catch (error) {
        console.log(error.message);
        return res.json({ status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!" })
    }
}

