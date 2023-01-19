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
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN, {lazyLoading: true})
const fs = require('fs');
const axios = require("axios");
const FormData = require("form-data");
const { nanoid } = require('nanoid')
const { toast } = require('../../utils/u_Toasts')
const slugify = require('slugify')



exports.all = async(req, res) => {

    const {skip, take} = req.params

    try {

        let AllUsers = await db.users.findMany({
            where:{
                isLive: true,
                isActive: true
            }
        })

        let users = await db.users.findMany({
            skip: parseInt(skip), 
            take: parseInt(take),
            where:{
                isLive: true,
                isActive: true
            },
            select:{
                id: true,
                isLive: true,
                avatar: true,
                givenName: true,
                familyName: true,
                jobTitle: true,
                minSalary: true,
                maxSalary: true,
                birthCountry: {
                    select:{
                        id: true,
                        title: true,
                    }
                },
                birthCity: {
                    select:{
                        id: true,
                        title: true,
                    }
                },
                industry:{
                    select:{
                        id: true,
                        title: true,
                    }
                },
                residentCountry:{
                    select:{
                        id: true,
                        title: true,
                        code: true,
                        prefix: true,
                        flagId: true,
                    }
                },
                userLanguages:{
                    select:{
                        id: true,
                        language:{
                            select:{
                                id: true,
                                title: true,
                            }
                        }
                    }
                },
                userSocials:{
                    select:{
                        id: true,
                        username: true,
                        social:{
                            select:{
                                id: true,
                                website: true,
                                icon_id: true,
                                title: true,
                            }
                        }
                    }
                }
            },
            orderBy:{
                createdAt: 'asc'
            }
        })

        
        for(i=0; i<users.length; i++){

            let user = users[i]
            let socials = []
            user.socials = socials
            user.userSocials.forEach(social => {
                user.socials.push({
                    id:   social.id,
                    link: `https://${social.social.website}/${social.username}`,
                    icon:  `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`,
                })
            })

            let Like = await db.userLikes.findFirst({
                where:{
                    userId: user.id,
                    createdBy: req.user.id,
                },
            })

            user.isLiked = Like ? Like.like : false

            user.status = 'normal'

            let isViewed = await db.userViews.findFirst({
                where:{
                    userId: user.id,
                    createdBy: req.user.id,
                },
            })
            
            if(isViewed){
                user.status = 'viewed'
            }
            
            let Status = await db.userStatus.findMany({
                where:{
                    userId: user.id
                },
                orderBy:{
                    createdAt: "desc"
                },
                take: 1
            })
    
            if(Status[0]){
                user.status = Status[0].status
            }

            if(user.country){
                user.country.flag = `${process.env.CFLARE_IMG_URL}/${user.country.flagId}/icon`;
            }

            if(user.country){
                user.country.flagId = undefined;
            }

            user.userSocials = undefined;

        }

        return res.json({
            status: 1, 
            results: AllUsers.length,
            pages: Math.ceil(AllUsers.length / parseInt(take)), 
            users
        })
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.search = async(req, res) => {

    const {skip, take} = req.params
    const {query} = req.body
    let givenName
    let familyName
    let where = {}

    if(query){

        givenName = query.split(" ")[0]
        familyName= query.split(" ")[1]

        where = {
            OR:[
                {
                    isLive: true,
                    isActive: true,
                    givenName:{
                        contains: givenName,
                        mode: 'insensitive',
                    }
                },
                {
                    AND:[
                        {
                            isLive: true,
                            isActive: true,
                        },
                        {
                            givenName: {
                                contains: givenName,
                                mode: 'insensitive',
                            }
                        },
                        {
                            familyName: {
                                contains: familyName,
                                mode: 'insensitive',
                            }
                        },
                    ]
                },
                {
                    isLive: true,
                    isActive: true,
                    familyName: {
                        contains: givenName,
                        mode: 'insensitive',
                    }
                },

            ]
        }
    }

    try {
        
        AllUsers = await db.users.findMany({
            where
        })

        let users = await db.users.findMany({
            skip: parseInt(skip), 
            take: parseInt(take),
            where,
            select:{
                id: true,
                isLive: true,
                avatar: true,
                givenName: true,
                familyName: true,
                jobTitle: true,
                minSalary: true,
                maxSalary: true,
                birthCountry: {
                    select:{
                        id: true,
                        title: true,
                    }
                },
                birthCity: {
                    select:{
                        id: true,
                        title: true,
                    }
                },
                industry:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                residentCountry:{
                    select:{
                        id: true,
                        code: true,
                        flagId: true,
                        title: true
                    }
                },
                userLanguages:{
                    select:{
                        id: true,
                        language:{
                            select:{
                                id: true,
                                title: true
                            }
                        }
                    }
                },
                userSocials:{
                    select:{
                        id: true,
                        username: true,
                        social:{
                            select:{
                                id: true,
                                website: true,
                                icon_id: true,
                            }
                        }
                    }
                }
            },
            orderBy:{
                createdAt: 'asc'
            }
        })

        for(i=0; i<users.length; i++){

            let user = users[i]
            let socials = []
            user.socials = socials
            user.userSocials.forEach(social => {
                user.socials.push({
                    id:   social.id,
                    link: `https://${social.social.website}/${social.username}`,
                    icon:  `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`,
                })
            })

            user.status = 'normal'
            
            let isViewed = await db.userViews.findFirst({
                where:{
                    userId: user.id,
                    createdBy: req.user.id,
                },
            })

            if(isViewed){
                user.status = 'viewed'
            }

            let Status = await db.userStatus.findMany({
                where:{
                    userId: user.id
                },
                orderBy:{
                    createdAt: "desc"
                },
                take: 1
            })


            if(Status[0]){
                user.status = Status[0].status
            }

            if(user.country){
                user.country.flag = `${process.env.CFLARE_IMG_URL}/${user.country.flagId}/icon`;
            }

            if(user.country){
                user.country.flagId = undefined;
            }

            user.userSocials = undefined;

        }

        return res.json({
            status: 1, 
            results: AllUsers.length,
            pages: Math.ceil(AllUsers.length / parseInt(take)), 
            users
        })

    } catch (error) {
        console.log(error.message);
        return res.json({status: 1, users: []})
        // return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }
}

exports.one = async(req, res) => {

    const {id} = req.params

    try {
        let user = await db.users.findFirst({
            where:{ 
                isLive: true,
                isActive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                gender:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                birthCountry: {
                    select:{
                        id: true,
                        title: true,
                    }
                },
                birthCity: {
                    select:{
                        id: true,
                        title: true,
                    }
                },
                avatar: true,
                bannerId: true,
                givenName: true,
                familyName: true,
                email: true,
                phone: true,
                isPhoneVerified: true,
                dateOfBirth: true,
                jobTitle: true,
                minSalary: true,
                maxSalary: true,
                streetAddress: true,
                description: true,
                role:{
                    select:{
                        id: true,
                    }
                },
                residentCountry:{
                    select:{
                        id: true,
                        title: true,
                        code: true,
                    }
                },
                nationality:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                degree:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                industry:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                currency:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                drivingLicense:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                website: true,
                userSocials:{
                    select:{
                        id: true,
                        username: true,
                        social:{
                            select:{
                                id: true,
                                website: true,
                                icon_id: true,
                            }
                        }
                    }
                },
                question1:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                answer2: true,
                question2:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                answer2: true,
                question3:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                answer3: true,
            },
            orderBy:{
                createdAt: 'desc'
            }
        })

        

        let socials = []
        user.socials = socials
        user.userSocials.forEach(social => {
            user.socials.push({
                id:   social.id,
                link: `https://${social.social.website}/${social.username}`,
                icon: `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`,
            })
        })

        let Like = await db.userLikes.findFirst({
            where:{
                userId: user.id,
                createdBy: req.user.id,
            },
        })

        user.isLiked = Like ? Like.like : false

        if(!req.isViewd){
            let Viewe = await db.userViews.create({
                data:{
                    createdBy: req.user.id,
                    userId: parseInt(id)
                }
            })
        }

        user.userSocials = undefined;
        user.is2FAEnabled= user.is2FA === true ? true : false;
        user.hasPassword = user.password !== null ? true : false;
        // user.country.flag = `${process.env.CFLARE_IMG_URL}/${user.country.flagId}/icon`;
        // user.country.flagId = undefined;
        // user.banner = `${process.env.CFLARE_IMG_URL}/${user.bannerId}/banner`,
        user.bannerId = undefined;
        user.status = 'viewed';
        
        let Status = await db.userStatus.findMany({
            where:{
                userId: parseInt(id)
            },
            orderBy:{
                createdAt: "desc"
            },
            take: 1
        })

        if(Status[0] && Status[0].status !== 'normal'){
            user.status = Status[0].status
        }

        return res.json({status: 1, user})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewPersonalInfo = async(req, res) => {
    const id = parseInt(req.params.id)
    try {
        let user = await db.users.findFirst({
            where:{
                id,
                isLive: true,
                isActive: true,
            },
            include: {
                birthCountry: true,
                birthCity: true,
            }
        })
        return res.json({status: 1, personalInfo: {
            genderId:         user.genderId,
            firstName:        user.givenName,
            lastName:         user.familyName,
            email:            user.email,
            phone:            user.phone,
            dateOfBirth:      user.dateOfBirth,
            streetAddress:    user.streetAddress,
            isPhoneVerified:  user.isPhoneVerified,
            birthCity:        user.birthCity ? user.birthCity.title : null,
            birthCountry:     user.birthCountry ? user.birthCountry.title : null,
        }})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editPersonalInfo = async(req, res) => {
    const id = parseInt(req.params.id)
    const {birthCountryId, birthStateId, birthCityId} = req
    const {residentCountryId, residentStateId, residentCityId} = req
    const {editorId, genderId, firstName, lastName, dateOfBirth, phone, latitude, longitude, streetAddress, residentCountry, residentState, residentCity} = req.body

    try {
        updUser = await db.users.update({
            where: {
                id
            },
            data:{
                givenName:       firstName      ? firstName             : req.user.givenName, 
                familyName:      lastName       ? lastName              : req.user.familyName, 
                dateOfBirth:     dateOfBirth    ? new Date(dateOfBirth) : req.user.dateOfBirth, 
                phone:           phone          ? phone                 : req.user.phone, 
                streetAddress:   streetAddress  ? streetAddress         : req.user.streetAddress, 
                latitude:        latitude       ? latitude              : req.user.latitude, 
                longitude:       longitude      ? longitude             : req.user.longitude, 
                genderId:        genderId && genderId !==0 ? parseInt(genderId)    : req.user.genderId, 
                isPhoneVerified: phone && phone !== req.user.phone ? false : req.user.isPhoneVerified,
                updatedBy: parseInt(editorId),

                birthCountryId:    birthCountryId ? birthCountryId : req.user.birthCountryId,
                birthStateId:      birthStateId ? birthStateId : req.user.birthStateId,
                birthCityId:       birthCityId ? birthCityId : req.user.birthCityId,

                residentCountryId: residentCountryId ? residentCountryId : null,
                residentStateId:   residentStateId ? residentStateId : null,
                residentCityId:    residentCityId ? residentCityId : null,
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

exports.viewOtherInfo = async(req, res) => {
    const id = parseInt(req.params.id)
    try {
        let user = await db.users.findFirst({
            where:{
                id
            },
        })
        return res.json({status: 1, personalInfo: {
            jobTitle:         user.jobTitle,
            nationalityId:    user.nationalityId,
            academicLevelId:  user.degreeId,
            industryId:       user.industryId,
            currencyId:       user.currencyId,
            minSalary:        user.minSalary,
            maxSalary:        user.maxSalary,
            drivingLicenseId: user.drivingLicenseId,
            website:          user.website,
        }})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editOtherInfo = async(req, res) => {
    const id = parseInt(req.params.id)
    const {editorId, jobTitle, nationalityId, academicLevelId, industryId, currencyId, minSalary, maxSalary, drivingLicenseId, website} = req.body

    try {
        updUser = await db.users.update({
            where: {
                id
            },
            data:{
                jobTitle: jobTitle ? jobTitle : req.profile.jobTitle, 
                nationalityId: nationalityId && nationalityId !==0  ? parseInt(nationalityId) : req.profile.nationalityId, 
                degreeId: academicLevelId && academicLevelId !==0  ? parseInt(academicLevelId) : req.profile.degreeId, 
                industryId: industryId && industryId !==0 ? parseInt(industryId) : req.profile.industryId, 
                currencyId: currencyId && currencyId !==0 ? parseInt(currencyId) : req.profile.currencyId, 
                drivingLicenseId: drivingLicenseId && drivingLicenseId !==0 ? parseInt(drivingLicenseId) : req.profile.drivingLicenseId, 
                minSalary: minSalary ? minSalary.toString() : req.profile.minSalary, 
                maxSalary: maxSalary ? maxSalary.toString() : req.profile.maxSalary,
                website: website ? website : req.profile.website,
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

exports.viewSecurityInfo = async(req, res) => {
    const id = parseInt(req.params.id)
    try {
        let user = await db.users.findFirst({
            where:{
                id
            },
        })
        return res.json({status: 1, personalInfo: {
            is2FAEnabled: user.is2FA,
            hasPassword:  user.password !== null ? true : false,
            question1Id:  user.question1Id,
            answer1:      user.answer1,
            question2Id:  user.question2Id,
            answer2:      user.answer2,
            question3Id:  user.question3Id,
            answer3:      user.answer3,
        }})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editSecurityInfo = async(req, res) => {

    let HPassword;
    const id = parseInt(req.params.id)
    const {editorId, oldPassword, newPassword, question1Id, question2Id, question3Id, answer1, answer2, answer3} = req.body

    if(newPassword){
        const salt = await bcrypt.genSalt();
        HPassword = await bcrypt.hash(newPassword, salt)
    }else{
        HPassword = req.profile.password
    }

    try {
        updUser = await db.users.update({
            where: {
                id
            },
            data:{
                password:    HPassword,
                question1Id: question1Id && question1Id !==0 ? parseInt(question1Id) : req.profile.question1Id,
                answer1:     answer1 && answer1     ? answer1                        : req.profile.answer1,
                question2Id: question2Id && question2Id !==0 ? parseInt(question2Id) : req.profile.question2Id,
                answer2:     answer2 && answer2     ? answer2                        : req.profile.answer2,
                question3Id: question3Id && question3Id !==0 ? parseInt(question3Id) : req.profile.question3Id,
                answer3:     answer3 && answer3     ? answer3                        : req.profile.answer3,
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

exports.changeStatus = async(req, res) => {

    const userId = req.userProfile.id
    const {status} = req.body

    try {
        let isStatuExists = await db.userStatus.findMany({
            where:{
                userId,
            },
            orderBy:{
                createdAt: "desc"
            },
            take: 1
        })

        if(isStatuExists[0] && isStatuExists[0].status === status){
            return res.json({status: -1, error: `The profile is already ${status}`})
        }

        let Status = await db.userStatus.create({
            data:{
                createdBy: req.user.id,
                userId,
                status
            },
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

exports.like = async(req, res) => {

    let message = ''
    const userId = parseInt(req.params.id)

    try {
        let isLike = await db.userLikes.findFirst({
            where:{
                createdBy: req.user.id,
                userId
            },
        })

        if(!isLike){
            let newLike = await db.userLikes.create({
                data:{
                    createdBy: req.user.id,
                    userId,
                    like: true
                }
            })
            message = 'Liked'
        }else{
            let oldLike = await db.userLikes.update({
                where:{
                    id: isLike.id
                },
                data:{
                    like: !isLike.like
                }
            })
            message = oldLike.like === true ? 'Liked' : 'DisLiked'
        }
        
        return res.json({status: 1, message})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.viewAccess = async(req, res) => {

    const {id} = req.params

    try {
        let menus = await db.menus.findMany({
            select:{
                id:    true,
                title: true,
                sort:  true,
                modules:{
                    select:{
                        id:    true,
                        title: true,
                        sort:  true,
                    }
                }
            }
        })

        let permissions = await db.permissions.findMany({
            where:{
                actorType:{
                    title: 'User'
                },
                actorId: parseInt(id)
            },
            orderBy:{
                moduleId: 'asc'
            }
        })

        menus.forEach(menu => {
            menu.modules.forEach(module => {
                module.permissions = [
                    {
                        invite  : false,
                        create  : false,
                        view    : false,
                        edit    : false,
                        delete  : false,
                        approve : false,
                    }
                ]
            })
        })

        menus.forEach(menu => {
            menu.modules.forEach(module => {
                if(permissions.length){
                    permissions.forEach(permission => {
                        if(permission.moduleId === module.id){
                            module.permissions = [
                                {
                                    invite  : permission.invite,
                                    create  : permission.create,
                                    view    : permission.view,
                                    edit    : permission.edit,
                                    delete  : permission.delete,
                                    approve : permission.approve,
                                }
                            ]
                        }
                    })
                }
            })
        })

        return res.json({
            status: 1, 
            user: req.user, 
            access: menus
        })
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createAccess = async(req, res) => {

    const {userId, moduleId, permission, value} = req.body

    try {
        let CurrentPermission = await db.permissions.findFirst({
            where:{
                actorType:{
                    title: 'User',
                },
                actorId: parseInt(userId),
                moduleId: parseInt(moduleId)
            }
        })
        if(CurrentPermission){
            let updPermission = await db.permissions.update({
                where:{
                    id: CurrentPermission.id
                },
                data:{
                    [permission]: value
                }
            })
            return res.json({
                status: 1, 
                message: await toast("Updated", req.user.languageId)
            })
        }else{
            let newAccess = await db.permissions.create({
                data:{
                    actorType:{
                        connect:{
                            title: 'User'
                        }
                    },
                    actorId: parseInt(userId),
                    module: {
                        connect:{
                            id: parseInt(moduleId)
                        }
                    },
                    [permission]: value
                }
            })
            return res.json({
                status: 1, 
                message: await toast("Created", req.user.languageId)
            })
            
        }
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.changeRole = async(req, res) => {

    const {userId, roleId} = req.body

    try {
        let updUser = await db.users.update({
            where:{
                id: parseInt(userId)
            },
            data:{
                roleId: parseInt(roleId)
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