const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const bcrypt = require("bcrypt")
const formidable = require("formidable");
const speakeasy = require("speakeasy")
const qrcode = require("qrcode")
const { isNumber } = require('../../utils/u_Is')
const otpGenerator = require('otp-generator')
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN, { lazyLoading: true })
const fs = require('fs');
const axios = require("axios");
const FormData = require("form-data");
const { nanoid } = require('nanoid')
const { toast } = require('../../utils/u_Toasts')
const slugify = require('slugify')
const jwt = require("jsonwebtoken")
const { send_Invitaion_Mail } = require("../../utils/u_Email")


exports.percentage = async (req, res) => {

    let total = 0;
    let percentage;

    percentage = await db.percentage.findFirst({
        where: {
            id: 1
        }
    })

    if (!percentage) {
        percentage = await db.percentage.create({
            data: {
                firstName: 0,
                lastName: 0,
                email: 0,
                phone: 0,
                profileImage: 0,
                dateOfBirth: 0,
                birthPlace: 0,
                address: 0,
                jobTitle: 0,
                nationality: 0,
                academicLevel: 0,
                industry: 0,
                currency: 0,
                aboutMe: 0,
                education: 0,
                experience: 0,
                skills: 0,
                languages: 0,
                expertise: 0,
                portfolio: 0,
                extraCurriculam: 0,
                courses: 0,
                interships: 0,
                references: 0,
                hobbies: 0,
                additionalInfo: 0,
                publications: 0,
                awards: 0
            }
        })
    }

    let user = await db.users.findFirst({
        where: {
            id: req.user.id
        },
        include: {
            userEducations: true,
            userExperiences: true,
            userExpertises: true,
            userSkils: true,
            userLanguages: true,
            userPortfolios: true,
            userExtraActivities: true,
            userCourses: true,
            userInterships: true,
            userReferences: true,
            userAwards: true,
        }
    })

    if (user.givenName !== null) {
        total = total + percentage.firstName
    }
    if (user.familyName !== null) {
        total = total + percentage.lastName
    }
    if (user.email !== null) {
        total = total + percentage.email
    }
    if (user.phone !== null) {
        total = total + percentage.phone
    }
    if (user.avatar !== null) {
        total = total + percentage.profileImage
    }
    if (user.dateOfBirth !== null) {
        total = total + percentage.dateOfBirth
    }
    if (user.cityBirthId !== null) {
        total = total + percentage.birthPlace
    }
    if (user.streetAddress !== null) {
        total = total + percentage.address
    }
    if (user.jobTitle !== null) {
        total = total + percentage.jobTitle
    }
    if (user.nationalityId !== null) {
        total = total + percentage.nationality
    }
    if (user.degreeId !== null) {
        total = total + percentage.academicLevel
    }
    if (user.industryId !== null) {
        total = total + percentage.industry
    }
    if (user.currencyId !== null) {
        total = total + percentage.currency
    }
    if (user.about !== null) {
        total = total + percentage.aboutMe
    }
    if (user.hobbies !== null) {
        total = total + percentage.hobbies
    }
    if (user.additionalInfo !== null) {
        total = total + percentage.additionalInfo
    }
    if (user.publications !== null) {
        total = total + percentage.publications
    }
    if (user.userEducations.length > 0) {
        total = total + percentage.education
    }
    if (user.userExperiences.length > 0) {
        total = total + percentage.experience
    }
    if (user.userSkils.length > 0) {
        total = total + percentage.skills
    }
    if (user.userLanguages.length > 0) {
        total = total + percentage.languages
    }
    if (user.userExpertises.length > 0) {
        total = total + percentage.expertise
    }
    if (user.userPortfolios.length > 0) {
        total = total + percentage.portfolio
    }
    if (user.userExtraActivities.length > 0) {
        total = total + percentage.extraCurriculam
    }
    if (user.userCourses.length > 0) {
        total = total + percentage.courses
    }
    if (user.userInterships.length > 0) {
        total = total + percentage.interships
    }
    if (user.userReferences.length > 0) {
        total = total + percentage.references
    }
    if (user.userAwards.length > 0) {
        total = total + percentage.awards
    }

    return res.json({ status: 1, percentage: total })

}

exports.getQr = async (req, res) => {

    let secret = speakeasy.generateSecret({
        name: "Techtalentshub",
        symbols: false,
        length: 20,
    })
    let updUser = await db.users.update({
        where: {
            id: req.user.id
        },
        data: {
            secret,
            // is2FA: true
        }
    })

    qrcode.toDataURL(secret.otpauth_url, async (err, data) => {
        if (err) {
            console.log(err);
            return res.json({
                status: -1,
                error: await toast("General Error", req.user.languageId)
            })
        }
        return res.json({ status: 1, key: secret.base32, qr: data })
    })

}

exports.enable2FA = async (req, res) => {


    let updUser = await db.users.update({
        where: {
            id: req.user.id
        },
        data: {
            // secret,
            is2FA: true
        }
    })

    return res.json({
        status: 1,
        message: await toast("Updated", req.user.languageId)
    })

}

exports.disable2FA = async (req, res) => {

    let updUser = await db.users.update({
        where: {
            id: req.user.id
        },
        data: {
            // secret: null,
            is2FA: false
        }
    })

    return res.json({
        status: 1,
        message: await toast("Updated", req.user.languageId)
    })

}

exports.sendOtp = async (req, res) => {

    let otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    const phone = req.user.phone;

    client.messages.create({
        body: `Your Techtalentshub verification code is: ${otp}`,
        to: phone,
        from: process.env.TWILIO_NUMBER
    }).then(async (message) => {
        let User = await db.users.update({
            where: {
                id: req.user.id
            },
            data: {
                otp,
                otpCreatedAt: new Date().getTime().toString()
            }
        })

        return res.json({
            status: 1,
            message: await toast("OTP sent", req.user.languageId)
        })

    }).catch(async (error) => {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    })

}

exports.verifyOtp = async (req, res) => {

    const { otp } = req.body;

    let User = await db.users.update({
        where: {
            id: req.user.id
        },
        data: {
            isPhoneVerified: true
        }
    })

    return res.json({
        status: 1,
        message: await toast("Verified", req.user.languageId)
    })

}

exports.viewPersonalInfo = async (req, res) => {

    let user = await db.users.findFirst({
        where: {
            id: req.user.id
        },
        include: {
            birthCountry: true,
            birthState: true,
            birthCity: true,
            residentCountry: true,
            residentState: true,
            residentCity: true,
        }
    })

    return res.json({
        status: 1, personalInfo: {
            genderId: user.genderId,
            firstName: user.givenName,
            lastName: user.familyName,
            email: user.email,
            phone: user.phone,
            dateOfBirth: user.dateOfBirth,
            countryId: user.birthPlaceId,
            streetAddress: user.streetAddress,
            isPhoneVerified: user.isPhoneVerified,
            birthCity: user.birthCityId ? user.birthCity.title : null,
            birthCountry: user.birthCountryId ? user.birthCountry.title : null,
        }
    })
}

exports.editPersonalInfo = async (req, res) => {

    const { birthCountryId, birthCityId } = req
    const { residentCountryId, residentStateId, residentCityId } = req
    const { editorId, genderId, firstName, lastName, dateOfBirth, phone, streetAddress } = req.body

    try {
        updUser = await db.users.update({
            where: {
                id: req.user.id
            },
            data: {
                givenName: firstName ? firstName : req.user.givenName,
                familyName: lastName ? lastName : req.user.familyName,
                dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : req.user.dateOfBirth,
                phone: phone ? phone : req.user.phone,
                streetAddress: streetAddress ? streetAddress : req.user.streetAddress,
                // birthPlaceId:      placeOfBirthId && placeOfBirthId !==0 ? parseInt(placeOfBirthId) : req.user.birthPlaceId, 
                genderId: genderId && genderId !== 0 ? parseInt(genderId) : req.user.genderId,
                isPhoneVerified: phone && phone !== req.user.phone ? false : req.user.isPhoneVerified,

                birthCountryId: birthCountryId ? birthCountryId : null,
                birthCityId: birthCityId ? birthCityId : null,

                residentCountryId: residentCountryId ? residentCountryId : null,
                residentStateId: residentStateId ? residentStateId : null,
                residentCityId: residentCityId ? residentCityId : null,

                updatedBy: parseInt(editorId),
            }
        })

        return res.json({
            status: 1,
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOtherInfo = async (req, res) => {
    return res.json({
        status: 1, personalInfo: {
            jobTitle: req.user.jobTitle,
            nationalityId: req.user.nationalityId,
            academicLevelId: req.user.degreeId,
            industryId: req.user.industryId,
            currencyId: req.user.currencyId,
            minSalary: req.user.minSalary,
            maxSalary: req.user.maxSalary,
            drivingLicenseId: req.user.drivingLicenseId,
            salaryPeriodId: req.user.salaryPeriodId,
            website: req.user.website,
        }
    })
}

exports.editOtherInfo = async (req, res) => {

    const { editorId, jobTitle, nationalityId, academicLevelId, industryId, currencyId, minSalary, maxSalary, drivingLicenseId, website, salaryPeriodId } = req.body

    try {
        updUser = await db.users.update({
            where: {
                id: req.user.id
            },
            data: {
                jobTitle: jobTitle ? jobTitle : req.user.jobTitle,
                nationalityId: nationalityId && nationalityId !== 0 ? parseInt(nationalityId) : req.user.nationalityId,
                degreeId: academicLevelId && academicLevelId !== 0 ? parseInt(academicLevelId) : req.user.degreeId,
                industryId: industryId && industryId !== 0 ? parseInt(industryId) : req.user.industryId,
                currencyId: currencyId && currencyId !== 0 ? parseInt(currencyId) : req.user.currencyId,
                drivingLicenseId: drivingLicenseId && drivingLicenseId !== 0 ? parseInt(drivingLicenseId) : req.user.drivingLicenseId,
                minSalary: minSalary ? minSalary.toString() : req.user.minSalary,
                maxSalary: maxSalary ? maxSalary.toString() : req.user.maxSalary,
                website: website ? website : req.user.website,
                salaryPeriodId: salaryPeriodId && salaryPeriodId !== 0 ? parseInt(salaryPeriodId) : req.user.salaryPeriodId,
                updatedBy: parseInt(req.user.id)
            }
        })

        return res.json({
            status: 1,
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.viewSecurityInfo = async (req, res) => {
    return res.json({
        status: 1, personalInfo: {
            is2FAEnabled: req.user.is2FA,
            hasPassword: req.user.password !== null ? true : false,
            question1Id: req.user.question1Id,
            answer1: req.user.answer1,
            question2Id: req.user.question2Id,
            answer2: req.user.answer2,
            question3Id: req.user.question3Id,
            answer3: req.user.answer3,
        }
    })
}

exports.editSecurityInfo = async (req, res) => {

    let HPassword;
    const { editorId, oldPassword, newPassword, question1Id, question2Id, question3Id, answer1, answer2, answer3 } = req.body

    if (newPassword) {
        const salt = await bcrypt.genSalt();
        HPassword = await bcrypt.hash(newPassword, salt)
    } else {
        HPassword = req.user.password
    }

    try {
        updUser = await db.users.update({
            where: {
                id: req.user.id
            },
            data: {
                password: HPassword,
                question1Id: question1Id && question1Id !== 0 ? parseInt(question1Id) : req.user.question1Id,
                answer1: answer1 && answer1 ? answer1 : req.user.answer1,
                question2Id: question2Id && question2Id !== 0 ? parseInt(question2Id) : req.user.question2Id,
                answer2: answer2 && answer2 ? answer2 : req.user.answer2,
                question3Id: question3Id && question3Id !== 0 ? parseInt(question3Id) : req.user.question3Id,
                answer3: answer3 && answer3 ? answer3 : req.user.answer3,
                updatedBy: parseInt(editorId)
            }
        })

        return res.json({
            status: 1,
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.setPasswordAfterSocialLogin = async (req, res) => {
    const { password } = req.body

    const salt = await bcrypt.genSalt();
    const HPassword = await bcrypt.hash(password, salt)

    try {
        updUser = await db.users.update({
            where: {
                id: req.user.id
            },
            data: {
                password: HPassword
            }
        })

        return res.json({
            status: 1,
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.viewDescription = async (req, res) => {
    try {
        return res.json({ status: 1, description: req.user.description })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editDescription = async (req, res) => {
    const { editorId, description } = req.body

    try {
        let updDescription = await db.users.update({
            where: {
                id: req.user.id
            },
            data: {
                description,
                updatedBy: parseInt(editorId)
            }
        })
        return res.json({
            status: 1,
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewAvatar = async (req, res) => {
    return res.json({
        status: 1,
        avatar: req.user.avatar === null ? null : req.user.avatar,
    })
    // let dir = path.join(process.cwd() + `/uploads/images/users/${req.user.id}/avatar.webp`)
    // fs.readFile(dir, function(err, content){
    //     if(err){
    //         return res.json({status: -1, error: "file not found"})
    //     }
    //     res.writeHead(200, {"Content-type" : "image/webp"})
    //     return res.end(content)
    // })
}

exports.editAvatar = async (req, res) => {

    let avatar = fs.createReadStream(req.avatar.filepath)
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
            if (req.user.avatarId !== null) {
                await axios({
                    method: "delete",
                    url: `${process.env.CFLARE_ENDPOINT}/${req.user.avatarId}`,
                    headers: {
                        Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                        ...data.getHeaders(),
                    },
                }).then(async (response) => {
                    let updUser = await db.users.update({
                        where: {
                            id: req.user.id
                        },
                        data: {
                            avatarId: newAvatarId,
                            avatar: `${process.env.CFLARE_IMG_URL}/${newAvatarId}/public`
                        }
                    })
                    return res.json({
                        status: 1,
                        avatar: updUser.avatar,
                        message: await toast("Updated", req.user.languageId)
                    })
                }).catch(async (error) => {
                    console.log(error.message);
                    return res.json({
                        status: -1,
                        error: await toast("General error", req.user.languageId)
                    })
                })
            } else {
                let updUser = await db.users.update({
                    where: {
                        id: req.user.id
                    },
                    data: {
                        avatarId: newAvatarId,
                        avatar: `${process.env.CFLARE_IMG_URL}/${newAvatarId}/public`
                    }
                })
                return res.json({
                    status: 1,
                    avatar: updUser.avatar,
                    message: await toast("Updated", req.user.languageId)
                })
            }
        }).catch(async (error) => {
            console.log(error.message);
            return res.json({
                status: -1,
                error: await toast("General error", req.user.languageId)
            })
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteAvatar = async (req, res) => {
    try {
        if (req.user.avatarId !== null) {
            await axios({
                method: "delete",
                url: `${process.env.CFLARE_ENDPOINT}/${req.user.avatarId}`,
                headers: {
                    Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                },
            }).then(async (response) => {
                let updUser = await db.users.update({
                    where: {
                        id: req.user.id
                    },
                    data: {
                        avatarId: null,
                        avatar: null
                    }
                })
                return res.json({
                    status: 1,
                    avatar: updUser.avatar,
                    message: await toast("Deleted", req.user.languageId)
                })
            }).catch(async (error) => {
                console.log(656, error.message);
                return res.json({
                    status: -1,
                    error: await toast("General error", req.user.languageId)
                })
            })
        } else {
            let updUser = await db.users.update({
                where: {
                    id: req.user.id
                },
                data: {
                    avatarId: null,
                    avatar: null
                }
            })
            return res.json({
                status: 1,
                avatar: updUser.avatar,
                message: await toast("Deleted", req.user.languageId)
            })
        }
    } catch (error) {
        console.log(679, error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewBanner = async (req, res) => {
    return res.json({
        status: 1,
        banner: req.user.bannerId === null ? null : `${process.env.CFLARE_IMG_URL}/${req.user.bannerId}/banner`,
    })
}

exports.editBanner = async (req, res) => {

    let banner = fs.createReadStream(req.banner.filepath)
    let data = new FormData()
    data.append("file", banner)

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
            let newBannerId = response.data.result.id;
            if (req.user.bannerId !== null) {
                await axios({
                    method: "delete",
                    url: `${process.env.CFLARE_ENDPOINT}/${req.user.bannerId}`,
                    headers: {
                        Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                        ...data.getHeaders(),
                    },
                }).then(async (response) => {
                    let updUser = await db.users.update({
                        where: {
                            id: req.user.id
                        },
                        data: {
                            bannerId: newBannerId,
                        }
                    })
                    return res.json({
                        status: 1,
                        banner: `${process.env.CFLARE_IMG_URL}/${updUser.bannerId}/banner`,
                        message: await toast("Updated", req.user.languageId)
                    })
                }).catch(async (error) => {
                    console.log(error.message);
                    return res.json({
                        status: -1,
                        error: await toast("General error", req.user.languageId)
                    })
                })
            } else {
                let updUser = await db.users.update({
                    where: {
                        id: req.user.id
                    },
                    data: {
                        bannerId: newBannerId,
                    }
                })
                return res.json({
                    status: 1,
                    banner: `${process.env.CFLARE_IMG_URL}/${updUser.bannerId}/banner`,
                    message: await toast("Updated", req.user.languageId)
                })
            }
        }).catch(async (error) => {
            console.log(error.message);
            return res.json({
                status: -1,
                error: await toast("General error", req.user.languageId)
            })
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewSocials = async (req, res) => {
    let socials = []
    try {
        let userSocials = await db.userSocials.findMany({
            where: {
                isLive: true,
                userId: req.user.id
            },
            select: {
                id: true,
                username: true,
                social: {
                    select: {
                        title: true,
                        slug: true,
                        website: true,
                        icon_id: true,
                    }
                }
            }
        })
        userSocials.forEach(social => {
            socials.push({
                id: social.id,
                username: social.username,
                title: social.social.title,
                link: `https://${social.social.website}/${social.username}`,
                icon: `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`,
            })
        })
        return res.json({ status: 1, socials })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewSocial = async (req, res) => {

    const { id } = req.params

    try {
        let social = await db.userSocials.findFirst({
            where: {
                isLive: true,
                id: parseInt(id),
                userId: req.user.id
            },
            select: {
                id: true,
                username: true,
                social: {
                    select: {
                        title: true,
                        slug: true,
                        website: true,
                        icon_id: true,
                    }
                }
            }
        })

        social.media = social.social.title,
            social.link = `https://${social.social.website}/${social.username}`,
            social.icon = `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`
        social.social = undefined

        return res.json({ status: 1, social })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createSocial = async (req, res) => {

    const { socialId, username } = req.body

    try {

        let newUserSocial = await db.userSocials.create({
            data: {
                socialId: parseInt(socialId),
                username: username,
                userId: req.user.id,
                createdBy: req.user.id
            }
        })

        return res.json({
            status: 1,
            message: await toast("Created", req.user.languageId)
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.editSocial = async (req, res) => {

    const { id } = req.params
    // const {socialId, username} = req.body
    const { username } = req.body

    try {
        let updUserSocial = await db.userSocials.update({
            where: {
                id: parseInt(id),
            },
            data: {
                username: username,
                updatedBy: req.user.id
            }
        })
        return res.json({
            status: 1,
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.deleteSocial = async (req, res) => {

    const { id } = req.params

    try {
        let delUserSocial = await db.userSocials.delete({
            where: {
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1,
            message: await toast("Deleted", req.user.languageId)
        })

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createInvitation = async (req, res) => {
    const { email } = req.body
    try {
        let newInvitaion = await db.invitations.create({
            data: {
                guest: email,
                userId: req.user.id
            }
        })
        let token = jwt.sign(
            { email: req.user.email, status: "invitaion" },
            process.env.SECRET,
            { expiresIn: '365d' }
        )
        send_Invitaion_Mail(email, token, req.user.givenName, req.user.familyName)
        return res.json({ status: 1, message: "Your friend has been invited successfully!" })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1,
            error: await toast("General error", req.user.languageId)
        })
    }

}


