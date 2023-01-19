const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const speakeasy = require("speakeasy")
const {nanoid} = require("nanoid")
const {send_Activation_Mail, send_Recovery_Mail} = require("../../utils/u_Email")
const { toast } = require('../../utils/u_Toasts')


exports.forgotPassword = async(req, res) => {
    const {email} = req.body

    try {
        let User = await db.users.findUnique({
            where:{
                email
            },
        })
        if(!User){
            return res.json({status: -1, message: "email not found, double check please!"})
        }
        let token = jwt.sign(
            {email: User.email, status: "forgot"}, 
            process.env.SECRET, 
            {expiresIn: '1d'}
        )
        send_Recovery_Mail(email, token)
        return res.json({status: 1, message: "check your email for an password recovery link please!"})
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }
}

exports.resetPassword = async(req, res) => {
    const {email} = req
    const {newPassword} = req.body
    const salt = await bcrypt.genSalt();
    const HPassword = await bcrypt.hash(newPassword, salt)

    try {
        let updUser = await db.users.update({
            where:{
                email: req.email
            },
            data:{
                password: HPassword
            }
        })

        return res.json({
            status: 1, 
            message: await toast("update", req.user.dashboardLanguage)
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


