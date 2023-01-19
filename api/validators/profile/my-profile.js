const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const fs = require('fs');
const axios = require("axios");
const FormData = require("form-data");
const { isDate, size, isArray } = require("lodash")
const isEmail = require("email-validator")
const {isNumber, isUrl} = require("../../utils/u_Is")
const formidable = require("formidable");
const {hasPermit} = require("../../middlewares/authenticate")
const sizeOf = require('image-size')
const {toast} = require("../../utils/u_Toasts")
const slugify = require('slugify')



exports.qr = async(req, res, next) => {
    next()
}

exports.enable2fa = async(req, res, next) => {
    next()
}

exports.disable2FA = async(req, res, next) => {
    next()
}

exports.sendOtp = async(req, res, next) => {

    let data = {status:0, errors:{}}

    if(!req.user.phone){
        data.errors.phone = await toast("Mobile not registered", req.user.languageId)
    }

    if (_.size(data.errors)) {
        return res.json(data)
    }

    try {
        let phoneNumberExists = await db.users.findFirst({
            where: {
                NOT:[{id: req.user.id}],
                phone: req.user.phone,
                isPhoneVerified: true,
            }
        })
        if(phoneNumberExists){
            return res.json({
                status: -1, 
                error: await toast("Mobile is used", req.user.languageId)
            })
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if (_.size(data.errors)) {
        return res.json(data)
    }

    next()
    
}

exports.verifyOtp = async(req, res, next) => {

    let data = {status:0, errors:{}}
    const {otp} = req.body

    if(!req.user.otp || !req.user.otpCreatedAt){
        return res.json({
            status: -1, 
            error: await toast("OTP not sent yet", req.user.languageId)
        })
    }
    
    if(!otp || otp.length !== 6 || !isNumber(otp)){
        return res.json({
            status: -1, 
            error: await toast("OTP is not valid", req.user.languageId)
        })
    }
    
    let now = new Date().getTime()
    let age = Math.abs(now - req.user.otpCreatedAt)

    if(age > 5*1000*60){
        return res.json({
            status: -1, 
            error: await toast("OTP is expired", req.user.languageId)
        })
    }

    if(otp !== req.user.otp){
        return res.json({
            status: -1, 
            error: await toast("OTP is not valid", req.user.languageId)
        })
    }

    if (_.size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.viewPersonalInfo = async(req, res, next) => {
    next()
}

exports.editPersonalInfo = async(req, res, next) => {
    let data   = {status: 0, errors: {}}
    let menu   = req.path.split("/")[1]
    let module = req.path.split("/")[2]
    let action = req.path.split("/")[3]
    const {editorId, genderId, firstName, lastName, dateOfBirth, phone, birthCountry, birthCity, streetAddress, residentCountry, residentState, residentCity} = req.body
    
    console.log('---------------------------------------');
    console.log("Country", birthCountry);
    console.log("City", birthCity);
    console.log('---------------------------------------');
    
    if(!editorId){
        return res.json({status: -1, error: "Enter the editor id, please!"})
    }
    if(!isNumber(editorId)){
        return res.json({status: -1, error: "Enter a numeric value for the editor id, please!"})
    }
    let editor = await db.users.findFirst({
        where:{
            id: parseInt(editorId)
        },
        include:{
            role: true
        }
    })
    if(!editor){
        return res.json({status: -1, error: "Editor not found!"})
    }
    if(!hasPermit(editor, menu, module, action)){
        return res.json({status: -1, error: "Editor is not authorized!"})
    }

    if(genderId){
        if(!isNumber(genderId)){
            data.errors.genderId = "Enter a numeric value for the gender id, please!"
        }else{
            let gender = await db.genders.findFirst({
                where:{
                    id: parseInt(genderId)
                }
            })
            if(!gender){
                data.errors.genderId = "Gender not found!"
            }
        }
    }

    if(firstName && firstName.length < 2){
        data.errors.firstName = "Enter a valid first name please!"
    }

    if(lastName && lastName.length < 2){
        data.errors.lastName = "Enter a valid last name please!"
    }

    if(dateOfBirth && !isDate(new Date(dateOfBirth))){
        data.errors.dateOfBirth = "Enter a valid date of birth please!"
    }

    // must be more than 18 years old
    if(new Date().getTime() - new Date(dateOfBirth).getTime() < 18*365*24*60*60*1000){ 
        data.errors.dateOfBirth = "You are not on the eligible age, to use our services!"
    }

    if(new Date(dateOfBirth).getTime() > new Date().getTime()){ 
        data.errors.dateOfBirth = "You birthdate can't be in the future!"
    }

    if(phone){

        if(!phone.startsWith("+")){
            data.errors.phone = "Start the phone number with a plus(+) sign, please!"
        }

        // try {
        //     const parseNumber = parsePhoneNumber(phone)
        //     const isValidNumber = isValidPhoneNumber(parseNumber.nationalNumber, parseNumber.country)
        //     if(!isValidNumber){
        //         data.errors.phone = "Enter a valid phone number, please!"
        //     }
        // } catch (error) {
        //     // data.errors.phone = error.message
        //     // data.errors.phone = "The country code is invalid"
        //     data.errors.phone = "Make sure that you entered a valid international number"
        // }

    }

    if(birthCountry){

        if(!birthCity){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: birthCountry
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.birthCountryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                AND: [
                    {
                        title: birthCity
                    },
                ]
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: birthCity,
                    slug: slugify(birthCity.toLowerCase(), '-')
                }
            })
        }
        req.birthCityId = City.id;

    }
  

    if(residentCountry){
        
        let Country, State, City;

        Country = await db.countries.findFirst({
            where:{
                title: residentCountry
            }
        })
        if(!Country){
            data.errors.streetAddress = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.residentCountryId = Country.id;

        if(residentState){
            State = await db.states.findFirst({
                where:{
                    AND: [
                        {
                            // slug: slugify(residentState.toLowerCase(), '-')
                            title: residentState
                        },
                        {
                            countryId: Country.id
                        }
                    ]
                }
            })
            if(!State){
                State = await db.states.create({
                    data:{
                        title: residentState,
                        slug: slugify(residentState.toLowerCase(), '-'),
                        countryId: Country.id
                    }
                })
            }
            req.residentStateId = State.id;

            if(residentCity){
                City = await db.cities.findFirst({
                    where:{
                        AND: [
                            {
                                // slug: slugify(residentCity.toLowerCase(), '-')
                                title: residentCity
                            },
                            {
                                stateId: State.id
                            }
                        ]
                    }
                })
                if(!City){
                    City = await db.cities.create({
                        data:{
                            title: residentCity,
                            slug: slugify(residentCity.toLowerCase(), '-'),
                            stateId: State.id
                        }
                    })
                }
                req.residentCityId = City.id;
            }
        }
    }
    
    next()
    
}

exports.viewOtherInfo = async(req, res, next) => {
    next()
}

exports.editOtherInfo = async(req, res, next) => {
    let data = {status: 0, errors: {}}
    let menu   = req.path.split("/")[1]
    let module = req.path.split("/")[2]
    let action = req.path.split("/")[3]
    const {editorId, jobTitle, nationalityId, academicLevelId, industryId, currencyId, minSalary, maxSalary, drivingLicenseId, website} = req.body


    // if(!editorId){
    //     return res.json({status: -1, error: "Enter the editor id, please!"})
    // }
    // if(!isNumber(editorId)){
    //     return res.json({status: -1, error: "Enter a numeric value for the editor id, please!"})
    // }
    // let editor = await db.users.findFirst({
    //     where:{
    //         id: parseInt(editorId)
    //     },
    //     include:{
    //         role: true
    //     }
    // })
    // if(!editor){
    //     return res.json({status: -1, error: "Editor not found!"})
    // }
    // if(!hasPermit(editor, menu, module, action)){
    //     return res.json({status: -1, error: "Editor is not authorized!"})
    // }

    if(jobTitle && jobTitle.length < 2){
        data.errors.jobTitle = "Enter a valid job title please!"
    }

    if(nationalityId && nationalityId !== 0){
        let nationality = await db.countries.findFirst({
            where:{
                id: parseInt(nationalityId)
            }
        })
        if(!nationality){
            data.errors.nationalityId = "Choose a valid nationality please!"
        }
    }

    if(academicLevelId && academicLevelId !== 0){
        let level = await db.academicLevels.findFirst({
            where:{
                id: parseInt(academicLevelId)
            }
        })
        if(!level){
            data.errors.academicLevelId = "Choose a valid academic level please!"
        }
    }

    if(industryId && industryId !== 0){
        let industry = await db.industries.findFirst({
            where:{
                id: parseInt(industryId)
            }
        })
        if(!industry){
            data.errors.industryId = "Choose a valid industry please!"
        }
    }

    if(currencyId && currencyId !== 0){
        let currency = await db.countries.findFirst({
            where:{
                id: parseInt(currencyId)
            }
        })
        if(!currency){
            data.errors.currencyId = "Choose a valid currency please!"
        }
    }

    if(drivingLicenseId && drivingLicenseId !== 0){
        let license = await db.drivingLicenses.findFirst({
            where:{
                id: parseInt(drivingLicenseId)
            }
        })
        if(!license){
            data.errors.drivingLicenseId = "Choose a valid driving license please!"
        }
    }

    if(minSalary && !isNumber(minSalary)){
        data.errors.minSalary = "Wrong format!"
    }

    if(maxSalary && !isNumber(maxSalary)){
        data.errors.maxSalary = "Wrong format!"
    }

    if(minSalary && maxSalary && parseInt(minSalary) > parseInt(maxSalary)){
        data.errors.minSalary = "min salary can't be greater than max salary!"
    }

    // if(website && !isUrl(website)){
    //     data.errors.website = "Enter a valid website url, please!"
    // }

    if(website){
        if(!isUrl(website)){
            data.errors.website = "Enter a valid website url, please!"
        }
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()
}

exports.viewSecurityInfo = async(req, res, next) => {
    next()
}

exports.editSecurityInfo = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    let menu   = req.path.split("/")[1]
    let module = req.path.split("/")[2]
    let action = req.path.split("/")[3]
    const {editorId, oldPassword, newPassword, question1Id, question2Id, question3Id, answer1, answer2, answer3} = req.body


    if(!editorId){
        return res.json({status: -1, error: "Enter the editor id, please!"})
    }
    if(!isNumber(editorId)){
        return res.json({status: -1, error: "Enter a numeric value for the editor id, please!"})
    }
    let editor = await db.users.findFirst({
        where:{
            id: parseInt(editorId)
        },
        include:{
            role: true
        }
    })
    if(!editor){
        return res.json({status: -1, error: "Editor not found!"})
    }
    if(!hasPermit(editor, menu, module, action)){
        return res.json({status: -1, error: "Editor is not authorized!"})
    }

    if(req.user.password !== null){
        if(newPassword && !oldPassword){
            data.errors.oldPassword = "enter your old password please"
        }
        else if(newPassword && oldPassword && !(await bcrypt.compare(oldPassword, req.user.password))){
            data.errors.oldPassword = "old password is incorrect"
        }
        if(!newPassword && oldPassword){
            data.errors.newPassword = "enter your new password please"
        }
    }

    if(question1Id){
        let Question = await db.securityQuestions.findFirst({
            where:{
                id: parseInt(question1Id)
            }
        })
        if(!Question){
            data.errors.question1Id = "Choose a valid question please!"
        }
    }

    if(question1Id && !answer1){
        data.errors.answer1 = "write an asnwer for the first question, please!"
    }

    if(question2Id){
        let Question = await db.securityQuestions.findFirst({
            where:{
                id: parseInt(question2Id)
            }
        })
        if(!Question){
            data.errors.question2Id = "Choose a valid question please!"
        }
    }

    if(question2Id && !answer2){
        data.errors.answer2 = "write an asnwer for the second question, please!"
    }

    if(question3Id){
        let Question = await db.securityQuestions.findFirst({
            where:{
                id: parseInt(question3Id)
            }
        })
        if(!Question){
            data.errors.question3Id = "Choose a valid question please!"
        }
    }

    if(question3Id && !answer3){
        data.errors.answer3 = "write an asnwer for the third question, please!"
    }

    if(newPassword && newPassword.length < 8){
        data.errors.newPassword = "your new password must be at least 8 chrachters"
    }

    if(question1Id && question2Id && question1Id === question2Id){
        data.errors.question2Id = "This question already has been chosen!"
    }

    if(question1Id && question3Id && question1Id === question3Id){
        data.errors.question3Id = "This question already has been chosen!"
    }

    if(question2Id && question3Id && question2Id === question3Id){
        data.errors.question3Id = "This question already has been chosen!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()
}

exports.setPasswordAfterSocialLogin = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {password} = req.body
    if (req.user.provider === "local") {
        data.errors.provier = "This is only valid after social login!"
    }

    if(!password){
        data.errors.password = "The password field cannot be empty!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()
}

exports.viewDescription = async(req, res, next) => {
    next()
}

exports.editDescription = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    let menu   = req.path.split("/")[1]
    let module = req.path.split("/")[2]
    let action = req.path.split("/")[3]
    const {editorId, description} = req.body


    if(!editorId){
        return res.json({status: -1, error: "Enter the editor id, please!"})
    }
    if(!isNumber(editorId)){
        return res.json({status: -1, error: "Enter a numeric value for the editor id, please!"})
    }
    let editor = await db.users.findFirst({
        where:{
            id: parseInt(editorId)
        },
        include:{
            role: true
        }
    })
    if(!editor){
        return res.json({status: -1, error: "Editor not found!"})
    }
    if(!hasPermit(editor, menu, module, action)){
        return res.json({status: -1, error: "Editor is not authorized!"})
    }

    next()
}

exports.viewAvatar = async(req, res, next) => {
    next()
}

exports.deleteAvatar = async(req, res, next) => {
    next()
}

exports.editAvatar = async(req, res, next) => {

    const form = formidable({ multiples: true });
    form.parse(req,async function (err, fields, files) {

        if(!files.image){
            return res.json({status: -1, error: "Upload an image file for your avatar, please!"})
        }

        let dims = sizeOf(files.image.filepath)

        let ext = files.image.mimetype.split("/")[1]

        if(ext !== "jpeg" && ext !== "jpg" && ext !== "png" && ext !== "webp"){
            return res.json({status: -1, error: "Supported formats are jpg, jpeg, png"})
        }

        // if(dims.width !== dims.height){
        //     return res.json({status: -1, error: "Your photo must be in a squar shape"})
        // }

        // if(dims.width < 100){
        //     return res.json({status: -1, error: "Your photo must be at least 100 square pixels"})
        // }

        // if(files.image.size > 2000000){
        //     return res.json({status: -1, error: "Image can't be larger than 2MB"})
        // }

        req.avatar = files.image
        next()
    })

}

exports.viewBanner = async(req, res, next) => {
    next()
}

exports.editBanner = async(req, res, next) => {

    const form = formidable({ multiples: true });
    form.parse(req,async function (err, fields, files) {

        if(!files.image){
            return res.json({status: -1, error: "Upload an image file for your banner, please!"})
        }

        let dims = sizeOf(files.image.filepath)
        
        // if(dims.width < 1920 || dims.height < 790){
        //     return res.json({status: -1, error: "Your banner must be 1920 × 790 pixels, at least"})
        // }

        let ext = files.image.mimetype.split("/")[1]

        if(ext !== "jpeg" && ext !== "jpg" && ext !== "png" && ext !== "webp"){
            return res.json({status: -1, error: "Supported formats are jpg, jpeg, png"})
        }

        // if(files.image.size > 2000000){
        //     return res.json({status: -1, error: "Image can't be larger than 2MB"})
        // }
        
        req.banner = files.image
        next()
    })


}

exports.viewSocials = async(req, res, next) => {
    next()
}

exports.viewSocial = async(req, res, next) => {
    
    const {id} = req.params
    let data = {status: 0, errors: {}}

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the social media ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric social media ID please!"})
    }

    let Social = await db.userSocials.findFirst({
        where:{
            id: parseInt(id),
            userId: req.user.id
        }
    })
    if(!Social){
        return res.json({status: -1, title: "Sorry!", error: "Social media not found!"})
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.createSocial = async(req, res, next) => {

    let data = {status: -1, errors: {}}
    const {socialId, username} = req.body

    if(!socialId){
        data.errors.socialId = "Select a social media from the list, please!"
    }
    else if(!isNumber(socialId)){
        data.errors.socialId = "Select a valid social media id, please!"
    }
    else if(!await db.socials.findFirst({where:{id: parseInt(socialId)}})){
        data.errors.socialId = "The social id is not valid"
    }

    if(!username || username.length < 3){
        data.errors.username = "Enter your social page address, please!"
    }else{
        let userSocial = await db.userSocials.findFirst({
            where:{
                socialId: parseInt(socialId),
                userId:   req.user.id
            }
        })
        if(userSocial){
            data.errors.username = "You already have this social media in your list"
        }
    }

    // if (size(data.errors)) {
    //     return res.json(data)
    // }

    if (data.errors.socialId) {
        return res.json({status: -1, title: "Sorry!", error: data.errors.socialId})
    }

    if (data.errors.username) {
        return res.json({status: -1, title: "Sorry!", error: data.errors.username})
    }

    next()
}

exports.editSocial = async(req, res, next) => {
    
    const {id} = req.params
    let data = {status: 0, errors: {}}
    // const {socialId, username} = req.body
    const {username} = req.body

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the social media ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric social media ID please!"})
    }

    let Social = await db.userSocials.findFirst({
        where:{
            id: parseInt(id),
            userId: req.user.id
        }
    })
    if(!Social){
        return res.json({status: -1, title: "Sorry!", error: "Social media not found!"})
    }

    // if(!socialId){
    //     data.errors.socialId = "Select a social media from the list, please!"
    // }
    // else if(!isNumber(socialId)){
    //     data.errors.socialId = "Select a valid social media id, please!"
    // }
    // else if(!await db.socials.findFirst({
    //     where:{
    //         id: parseInt(socialId)
    //     }
    // })){
    //     data.errors.socialId = "The social id is not valid"
    // }else{
    //     let userOldSocial = await db.userSocials.findFirst({
    //         where:{
    //             socialId: parseInt(socialId),
    //             userId: req.user.id,
    //             NOT:[
    //                 {
    //                     id: parseInt(id)
    //                 }
    //             ]
    //         },
    //         include:{
    //             social: true
    //         }
    //     })
    //     if(userOldSocial){
    //         data.errors.socialId = `You already registered an account for ${userOldSocial.social.name}`
    //     }
    // }

    if(!username || username === "" || username.length < 3){
        data.errors.username = "Enter a valid username / page name please"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteSocial = async(req, res, next) => {
    
    const {id} = req.params
    let data = {status: 0, errors: {}}

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the social media ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric social media ID please!"})
    }

    let Social = await db.userSocials.findFirst({
        where:{
            id: parseInt(id),
            userId: req.user.id
        }
    })
    if(!Social){
        return res.json({status: -1, title: "Sorry!", error: "Social media not found!"})
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.createInvitation = async(req, res, next) => {

    const {email} = req.body

    if(!email || !isEmail.validate(email)){
        return res.json({
            status: -1,
            error: "enter a valid email address, please!"
        })
    }

    let User = await db.users.findFirst({
        where:{
            isLive: true,
            email
        }
    })

    if(User){
        return res.json({
            status: -1,
            error: "This email is already exists, try another one!"
        })
    }

    next()

}