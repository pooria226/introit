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
const {isNumber} = require("../../utils/u_Is")
const formidable = require("formidable");
const isUrl = require("is-url")
const {toast} = require("../../utils/u_Toasts")
const {hasPermit} = require("../../middlewares/authenticate")
const slugify = require('slugify')


exports.all = async(req, res, next) => {
    next()
}

exports.search = async(req, res, next) => {
    next()
}

exports.one = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the user ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric user ID please!"})
    }

    try {
        let User = await db.users.findFirst({
            where:{
                id: parseInt(id)
            }
        })
        if(!User){
            return res.json({status: -1, title: "Sorry!", error: "User profile not found!"})
        }
        req.userProfile = User
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    next()
}

exports.viewPersonalInfo = async(req, res, next) => {
    const id = parseInt(req.params.id)
    if(!id){
        return res.json({status: -1, error: "Enter the profile id, please!"})
    }
    if(!isNumber(id)){
        return res.json({status: -1, error: "Enter a numeric value for the profile id, please!"})
    }
    let user = await db.users.findFirst({
        where:{
            id
        },
    })
    if(!user){
        return res.json({status: -1, error: "Profile not found!"})
    }
    req.profile = user
    next()
}

exports.editPersonalInfo = async(req, res, next) => {
    const id = parseInt(req.params.id)
    if(!id){
        return res.json({status: -1, error: "Enter the profile id, please!"})
    }
    if(!isNumber(id)){
        return res.json({status: -1, error: "Enter a numeric value for the profile id, please!"})
    }
    let user = await db.users.findFirst({
        where:{
            id,
            isLive: true,
            isActive: true,
        },
    })
    if(!user){
        return res.json({status: -1, error: "Profile not found!"})
    }
    req.profile = user

    let data   = {status: 0, errors: {}}
    let menu   = req.path.split("/")[1]
    let module = req.path.split("/")[2]
    let action = req.path.split("/")[3]

    const {editorId, genderId, firstName, lastName, dateOfBirth, phone, latitude, longitude, birthCountry, birthState, birthCity, streetAddress, residentCountry, residentState, residentCity} = req.body

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
        
        let Country, State, City;

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

        if(birthState){
            State = await db.states.findFirst({
                where:{
                    AND: [
                        {
                            title: birthState
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
                        title: birthState,
                        slug: slugify(birthState.toLowerCase(), '-'),
                        countryId: Country.id
                    }
                })
            }
            req.birthStateId = State.id;

            if(birthCity){
                City = await db.cities.findFirst({
                    where:{
                        AND: [
                            {
                                title: birthCity
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
                            title: birthCity,
                            slug: slugify(birthCity.toLowerCase(), '-'),
                            stateId: State.id
                        }
                    })
                }
                req.birthCityId = City.id;
            }
        }
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

    if (size(data.errors)) {
        return res.json(data)
    }


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

    req.residentCountryId = Country.id;
    req.residentStateId = State.id;
    req.residentCityId = City.id;
    next()
}

exports.viewOtherInfo = async(req, res, next) => {
    const id = parseInt(req.params.id)
    if(!id){
        return res.json({status: -1, error: "Enter the profile id, please!"})
    }
    if(!isNumber(id)){
        return res.json({status: -1, error: "Enter a numeric value for the profile id, please!"})
    }
    let user = await db.users.findFirst({
        where:{
            id,
            isLive: true,
            isActive: true
        },
    })
    if(!user){
        return res.json({status: -1, error: "Profile not found!"})
    }
    req.profile = user
    next()
}

exports.editOtherInfo = async(req, res, next) => {
    const id = parseInt(req.params.id)
    if(!id){
        return res.json({status: -1, error: "Enter the profile id, please!"})
    }
    if(!isNumber(id)){
        return res.json({status: -1, error: "Enter a numeric value for the profile id, please!"})
    }
    let user = await db.users.findFirst({
        where:{
            id,
            isLive: true,
            isActive: true,
        },
    })
    if(!user){
        return res.json({status: -1, error: "Profile not found!"})
    }
    req.profile = user

    let data = {status: 0, errors: {}}
    let menu   = req.path.split("/")[1]
    let module = req.path.split("/")[2]
    let action = req.path.split("/")[3]
    const {editorId, jobTitle, nationalityId, academicLevelId, industryId, currencyId, minSalary, maxSalary, drivingLicenseId, website} = req.body


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
    const id = parseInt(req.params.id)
    if(!id){
        return res.json({status: -1, error: "Enter the profile id, please!"})
    }
    if(!isNumber(id)){
        return res.json({status: -1, error: "Enter a numeric value for the profile id, please!"})
    }
    let user = await db.users.findFirst({
        where:{
            id,
            isLive: true,
            isActive: true
        },
    })
    if(!user){
        return res.json({status: -1, error: "Profile not found!"})
    }
    req.profile = user
    next()
}

exports.editSecurityInfo = async(req, res, next) => {
    const id = parseInt(req.params.id)
    if(!id){
        return res.json({status: -1, error: "Enter the profile id, please!"})
    }
    if(!isNumber(id)){
        return res.json({status: -1, error: "Enter a numeric value for the profile id, please!"})
    }
    let user = await db.users.findFirst({
        where:{
            id,
            isLive: true,
            isActive: true,
        },
    })
    if(!user){
        return res.json({status: -1, error: "Profile not found!"})
    }
    req.profile = user
    
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

exports.changeRole = async(req, res, next) => {
    const {userId, roleId} = req.body

    if(!userId){
        return res.json({status: -1, title: "Sorry!", error: "Enter the user ID please!"})
    }

    if(!isNumber(parseInt(userId))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric user ID please!"})
    }

    try {
        let User = await db.users.findFirst({
            where:{
                id: parseInt(userId),
                isLive: true,
                isActive: true,
            }
        })
        if(!User){
            return res.json({status: -1, title: "Sorry!", error: "User profile not found!"})
        }
        req.userProfile = User
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    if(!roleId){
        return res.json({status: -1, title: "Sorry!", error: "Enter the role ID please!"})
    }

    if(!isNumber(parseInt(roleId))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric role ID please!"})
    }

    try {
        let Role = await db.roles.findFirst({
            where:{
                id: parseInt(roleId)
            }
        })
        if(!Role){
            return res.json({status: -1, title: "Sorry!", error: "Role not found!"})
        }
        req.role = Role
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    next()
}

exports.isViewd = async(req, res, next) => {

    const userId = req.userProfile.id

    try {
        let Viewed = await db.userViews.findFirst({
            where:{
                userId,
                createdBy: req.user.id,
            },
        })
        
        if(!Viewed){
            req.isViewd = false
        }else{
            req.isViewd = true
        }

    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    next()
            
}

exports.changeStatus = async(req, res, next) => {

    const userId = req.userProfile.id
    const {status} = req.body

    if(!req.isViewd){
        return res.json({status: -1, title: "Sorry!", error: "The user profile has not viewed yet!"})
    }

    if(!status){
        return res.json({status: -1, title: "Sorry!", error: "Select a status please!"})
    }

    if(status !== 'normal' && status !== 'approved' && status !== 'disabled' && status !== 'suspended'){
        return res.json({status: -1, title: "Sorry!", error: "The status is not valid!"})
    }

    next()
            
}

exports.viewAccess = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({status: -1, error: 'Enter the user id, please!'})
    }
    if(!isNumber(id)){
        return res.json({status: -1, error: 'Enter a numeric value as the user id, please!'})
    }
    let User = await db.users.findFirst({
        where:{
            id: parseInt(id),
            isLive: true,
            isActive: true
        },
        select:{
            id: true,
            role:{
                select:{
                    id: true,
                    title: true
                }
            }
        }
    })

    if(!User){
        return res.json({status: -1, error: 'User not found'})
    }
    
    req.user = User

    next()
    
}

exports.createAccess = async(req, res, next) => {

    const {userId, moduleId, permission, value} = req.body

    if(!userId){
        return res.json({status: -1, error: 'Enter the user id, please!'})
    }
    if(!isNumber(userId)){
        return res.json({status: -1, error: 'Enter a numeric value as the user id, please!'})
    }
    let User = await db.users.findFirst({
        where:{
            id: parseInt(userId),
            isLive: true,
            isActive: true
        }
    })
    if(!User){
        return res.json({status: -1, error: 'User not found'})
    }

    if(!moduleId){
        return res.json({status: -1, error: 'Enter the module id, please!'})
    }
    if(!isNumber(moduleId)){
        return res.json({status: -1, error: 'Enter a numeric value as the module id, please!'})
    }
    let Module = await db.modules.findFirst({
        where:{
            id: parseInt(moduleId)
        }
    })
    if(!Module){
        return res.json({status: -1, error: 'Module not found'})
    }

    if(!permission){
        return res.json({status: -1, error: 'Enter the permission, please!'})
    }

    if(permission !== "invite" && permission !== "create" && permission !== "view" && permission !== "edit" && permission !== "delete" && permission !== "approve"){
        return res.json({status: -1, error: 'Enter a valid permission, please!'})
    }

    if(value !== true && value !== false){
        return res.json({status: -1, error: 'Enter a valid value, please!'})
    }
    
    next()
}


