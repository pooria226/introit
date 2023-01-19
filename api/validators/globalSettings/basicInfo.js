const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { size } = require("lodash")
const formidable = require("formidable");
const sizeOf = require('image-size')
const {isNumber} = require("../../utils/u_Is")
const {toast} = require("../../utils/u_Toasts")
const slugify = require('slugify')




// =================================================================================== Genders

exports.viewAllGenders = async(req, res, next) => {
    next()
}

exports.viewOneGender = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.genders.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }
    
    next()
}

exports.createGender = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1,
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let Result = await db.genders.findFirst({
            where:{
                title
            }
        })
        if(Result){
            data.errors.title = await toast("Already exists", req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editGender = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body


    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    
    if(!title){
        data.errors.title = await toast("Title is required", req.user.languageId)
    }
    
    if (size(data.errors)) {
        return res.json(data)
    }
    
    try {
        let Result = await db.genders.findFirst({
            where:{
                id: parseInt(id)
            }
        })
        if(!Result){
            data.errors.title = await toast("Not found", req.user.languageId)
        }else{
            let isTitleUsed = await db.genders.findFirst({
                where:{
                    title,
                    NOT:[
                        {
                            id: parseInt(id)
                        }
                    ]
                }
            })
            if(isTitleUsed){
                data.errors.title = await toast("Already exists", req.user.languageId)
            }else {
                req.currentRecord = Result
                next()
            }
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.deleteGender = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.genders.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Security Questions

exports.viewAllSecurityQuestions = async(req, res, next) => {
    next()
}

exports.viewOneSecurityQuestion = async(req, res, next) => {

    let {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }

    try {
        let Question = await db.securityQuestions.findUnique({
            where:{
                id: parseInt(id)
            }
        })
        if(!Question){
            return res.json({
                status: -1, 
                error: await toast("Not found", req.user.languageId)
            })
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    next()

}

exports.createSecurityQuestion = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body
    
    if(!title){
        return res.json({
            status: -1,
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let Question = await db.securityQuestions.findUnique({
            where:{
                title
            }
        })
        if(Question){
            data.errors.title = await toast("Already exists", req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editSecurityQuestion = async(req, res, next) => {

    let id = req.params.id
    let data = {status: 0, errors: {}}
    const {title} = req.body

    
    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }

    let QExists = await db.securityQuestions.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!QExists){
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }
    
    try {    
        let Question = await db.securityQuestions.findFirst({
            where:{
                NOT:[
                    {
                        id: parseInt(id)
                    }
                ],
                title,
            }
        })
        if(Question){
            data.errors.title = await toast("Already exists", req.user.languageId)
        }
        else{
            req.currentRecord = Question
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()
}

exports.deleteSecurityQuestion = async(req, res, next) => {
  
    let id = req.params.id

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }

    try {
        let Question = await db.securityQuestions.findUnique({
            where:{
                id: parseInt(id)
            }
        })
        if(!Question){
            return res.json({
                status: -1, 
                error: await toast("Not found", req.user.languageId)
            })
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    next()

}


// =================================================================================== Academic Levels

exports.viewAllAcademicLevels = async(req, res, next) => {
    next()
}

exports.viewOneAcademicLevel = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.academicLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createAcademicLevel = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1,
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let LevelExists = await db.academicLevels.findFirst({
            where:{
                title
            }
        })
        if(LevelExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editAcademicLevel = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body


    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.academicLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }
    
    let isExists = await db.academicLevels.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteAcademicLevel = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.academicLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}


// =================================================================================== Domination Levels

exports.viewAllDominationLevels = async(req, res, next) => {
    next()
}

exports.viewOneDominationLevel = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.dominationLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createDominationLevel = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1, 
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let LevelExists = await db.dominationLevels.findFirst({
            where:{
                title
            }
        })
        if(LevelExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editDominationLevel = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body


    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.dominationLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }
    
    if (size(data.errors)) {
        return res.json(data)
    }
    
    let isExists = await db.dominationLevels.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteDominationLevel = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.dominationLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Language Levels

exports.viewAllLanguageLevels = async(req, res, next) => {
    next()
}

exports.viewOneLanguageLevel = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languageLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createLanguageLevel = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1, 
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let LevelExists = await db.languageLevels.findFirst({
            where:{
                title
            }
        })
        if(LevelExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editLanguageLevel = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body


    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languageLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }
    
    let isExists = await db.languageLevels.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }
    
    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteLanguageLevel = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languageLevels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Language Certificate

exports.viewAllLanguageCertificates = async(req, res, next) => {
    next()
}

exports.viewOneLanguageCertificate = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languageCertificates.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createLanguageCertificate = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1, 
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let isExists = await db.languageCertificates.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.name = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editLanguageCertificate = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body


    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languageCertificates.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    let isExists = await db.languageCertificates.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteLanguageCertificate = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languageCertificates.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Countries

exports.viewAllCountries = async(req, res, next) => {
    next()
}

exports.viewOneCountry = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.countries.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createCountry = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const form = formidable({ multiples: true });

    form.parse(req,async function (err, fields, files) {

        const {title, code, prefix} = fields

        let {flag} = files;

        if(!code){
            data.errors.code = await toast("Required", req.user.languageId)
        }
        if(!title){
            data.errors.title = await toast("Required", req.user.languageId)
        }
        if(!prefix){
            data.errors.prefix = await toast("Required", req.user.languageId)
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        let isExists = await db.countries.findFirst({
            where:{
                OR:[
                    {code},{title},{prefix}
                ]
            }
        })
        if(isExists){
            data.errors.code = await toast("Already exists", req.user.languageId)
        }
        if(!flag){
            data.errors.flag = "Upload a flag image, please!"
        }
        else if(flag.size > 2000000){
            data.errors.flag = "Flag file can't be larger than 2MB"
        }
        if (size(data.errors)) {
            return res.json(data)
        }

        req.fields = fields;
        req.files = files;
        next()

    })

}

exports.editCountry = async(req, res, next) => {

    let id = req.params.id
    let data = {status: 0, errors: {}}
    const form = formidable({ multiples: true });

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }

    try {
        let Result = await db.countries.findFirst({
            where:{
                id: parseInt(id)
            }
        })
        if(!Result){
            return res.json({
                status: -1, 
                error: await toast('Not found', req.user.languageId)
            })
        }else{
            req.country = Result
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
    
    form.parse(req,async function (err, fields, files) {

        const {code, prefix, title} = fields

        let {flag} = files;

        if(!code){
            data.errors.code = await toast("Code is required", req.user.languageId)
        }
        else if(!title){
            data.errors.title = await toast("Title is required", req.user.languageId)
        }
        else if(!prefix){
            data.errors.code = await toast("Prefix is required", req.user.languageId)
        }
        else{
            let isExists = await db.countries.findFirst({
                where:{
                    AND:[
                        {
                            NOT:[
                                {
                                    id: parseInt(id)
                                }
                            ],
                            OR:[
                                {code},{title},{prefix}
                            ]
                        }
                    ]
                }
            })
            if(isExists){
                data.errors.code = await toast("Already exists", req.user.languageId)
            }
        }

        // if(flag && flag.size > 2000000){
        //     data.errors.flag = "Upload a flag with less than 2MB, please!"
        // }

        if (size(data.errors)) {
            return res.json(data)
        }

        req.fields = fields;
        req.files = files;
        next()

    })

}

exports.deleteCountry = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.countries.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Nationalities

exports.viewAllNationalities = async(req, res, next) => {
    next()
}

exports.viewOneNationality = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.nationalities.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createNationality = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1, 
            error: await toast('Title is required', req.user.languageId)
        })
    }

    try {
        let isExists = await db.nationalities.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editNationality = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.nationalities.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    let isExists = await db.nationalities.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteNationality = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.nationalities.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Languages

exports.viewAllLanguages = async(req, res, next) => {
    next()
}

exports.viewOneLanguage = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languages.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createLanguage = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {code, title, isRtl} = req.body
    
    if(!title){
        data.errors.title = await toast('Required', req.user.languageId)
    }
    if(!code){
        data.errors.code = await toast('Required', req.user.languageId)
    }
    if(isRtl !== true && isRtl !== false){
        data.errors.isRtl = await toast('Required', req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    
    try {
        let isCodeExists = await db.languages.findFirst({
            where:{
                code
            }
        })
        if(isCodeExists){
            data.errors.code = await toast('Already exists', req.user.languageId)
        }
        let isEnTitleExists = await db.languages.findFirst({
            where:{
                title
            }
        })
        if(isEnTitleExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editLanguage = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {code, title, isRtl} = req.body
    
    if(!title){
        data.errors.title = await toast('Required', req.user.languageId)
    }
    if(!code){
        data.errors.code = await toast('Required', req.user.languageId)
    }
    if(isRtl !== true && isRtl !== false){
        data.errors.isRtl = await toast('Required', req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languages.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = "Enter the english title, please!"
    }

    let isExists = await db.languages.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteLanguage = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.languages.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Currencies

exports.viewAllCurrencies = async(req, res, next) => {
    next()
}

exports.viewOneCurrency = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.currencies.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createCurrency = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {code, symbol, title} = req.body

    if(!code){
        data.errors.code = await toast('Code is required', req.user.languageId)
    }

    if(!symbol){
        data.errors.symbol = await toast('Symbol is required', req.user.languageId)
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }
    
    try {
        let isExists = await db.currencies.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editCurrency = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {name, code, symbol, title} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.currencies.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = "Enter the english title, please!"
    }

    let isExists = await db.currencies.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteCurrency = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.currencies.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Driving Licenses

exports.viewAllDrivingLicenses = async(req, res, next) => {
    next()
}

exports.viewOneDrivingLicense = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.drivingLicenses.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createDrivingLicense = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1, 
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let isExists = await db.drivingLicenses.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editDrivingLicense = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.drivingLicenses.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = "Enter the english title, please!"
    }

    let isExists = await db.drivingLicenses.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteDrivingLicense = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.drivingLicenses.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Industries

exports.viewAllIndustries = async(req, res, next) => {
    next()
}

exports.viewOneIndustry = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.industries.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createIndustry = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1, 
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let isExists = await db.industries.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editIndustry = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.industries.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = "Enter the english title, please!"
    }

    let isExists = await db.industries.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteIndustry = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.industries.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Employment Types

exports.viewAllEmploymentTypes = async(req, res, next) => {
    next()
}

exports.viewOneEmploymentType = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.employmentTypes.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createEmploymentType = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1, 
            error: await toast("Title is required", req.user.languageId)
        })
    }

    try {
        let isExists = await db.employmentTypes.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editEmploymentType = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.employmentTypes.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = "Enter the english title, please!"
    }

    let isExists = await db.employmentTypes.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteEmploymentType = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.employmentTypes.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Timezones

exports.viewAllTimezones = async(req, res, next) => {
    next()
}

exports.viewOneTimezone = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.timezones.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createTimezone = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {offset, title} = req.body

    if(!offset){
        data.errors.offset = await toast('Offset is required', req.user.languageId)
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }
    
    try {
        let isExists = await db.timezones.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editTimezone = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {offset, title} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.timezones.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = await toast("Title is required", req.user.languageId)
    }
    
    if(!offset){
        data.errors.offset = await toast("Offset is required", req.user.languageId)
    }
    
    if (size(data.errors)) {
        return res.json(data)
    }
    
    let isExists = await db.timezones.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })
    
    if(isExists){
        data.errors.title = await toast("Already exists", req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteTimezone = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.timezones.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Sections

exports.viewAllSections = async(req, res, next) => {
    next()
}

exports.viewOneSection = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.sections.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    req.section = Result
    
    next()
}

exports.createSection = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title, domain} = req.body

    if(!title){
        data.errors.title = await toast("Required", req.user.languageId)
    }
    if(!domain){
        data.errors.domain = await toast("Required", req.user.languageId)
    }
    if(domain !== 'basic' && domain !== 'app' && domain !== 'site'){
        data.errors.domain = await toast("Not found", req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }

    try {
        let isExists = await db.sections.findFirst({
            where:{
                slug: slugify(title.toLowerCase(), "-"),
                domain,
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editSection = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title, domain} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.sections.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }


    if(!title){
        data.errors.title = await toast("Required", req.user.languageId)
    }
    if(!domain){
        data.errors.domain = await toast("Required", req.user.languageId)
    }
    if(domain !== 'basic' && domain !== 'app' && domain !== 'site'){
        data.errors.domain = await toast("Not found", req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    let isExists = await db.sections.findFirst({
        where:{
            slug: slugify(title.toLowerCase(), "-"),
            domain,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })
    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }
    
    if (size(data.errors)) {
        return res.json(data)
    }

    req.currentRecord = Result
    next()

}

exports.deleteSection = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.sections.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Labels

exports.viewAllLabels = async(req, res, next) => {

    const {id} = req.params

    let Section = await db.sections.findFirst({
        where:{
            id: parseInt(id),
        }
    })
    if(!Section){
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }
    if(!Section.domain === 'basic'){
        return res.json({
            status: -1, 
            error: await toast("Domain not found", req.user.languageId)
        })
    }
    next()
}

exports.viewOneLabel = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.labels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createLabel = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title, sectionId} = req.body

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }
    if(!sectionId){
        data.errors.section = await toast('Required', req.user.languageId)
    }
    if(!isNumber(sectionId)){
        data.errors.section = await toast('Numeric id is required', req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    try {
        let isExists = await db.labels.findFirst({
            where:{
                sectionId: parseInt(sectionId),
                slug: slugify(title.toLowerCase(), "-")
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    next()
}

exports.editLabel = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title, sectionId} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }
    if(!sectionId){
        data.errors.section = await toast('Required', req.user.languageId)
    }
    if(!isNumber(sectionId)){
        data.errors.section = await toast('Numeric id is required', req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }

    let Label = await db.labels.findFirst({
        where:{
            isLive: true,
            id: parseInt(id)
        }
    })
    if(!Label){
        data.errors.title = await toast('Not found', req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }

    let Section = await db.sections.findFirst({
        where:{
            isLive: true,
            id: parseInt(sectionId)
        }
    })
    if(!Section){
        data.errors.section = await toast('Not found', req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }

    let isExists = await db.labels.findFirst({
        where:{
            slug: slugify(item.toLowerCase(), "-"),
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })
    
    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }
    
    if (size(data.errors)) {
        return res.json(data)
    }
    
    req.currentRecord = isExists
    next()
    
}

exports.deleteLabel = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.labels.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== Toasts

exports.viewAllToasts = async(req, res, next) => {
    next()
}

exports.viewOneToast = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.toasts.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createToast = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    try {
        let isExists = await db.toasts.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editToast = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }

    let Result = await db.toasts.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    
    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    let isExists = await db.toasts.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })
    
    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }
    
    if (size(data.errors)) {
        return res.json(data)
    }
    
    req.currentRecord = Result
    next()
    
}

exports.deleteToast = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.toasts.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

// =================================================================================== SalaryPeriods

exports.viewAllSalaryPeriods = async(req, res, next) => {
    next()
}

exports.viewOneSalaryPeriod = async(req, res, next) => {
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.nationalities.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    
    next()
}

exports.createSalaryPeriod = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        return res.json({
            status: -1, 
            error: await toast('Title is required', req.user.languageId)
        })
    }

    try {
        let isExists = await db.salaryPeriods.findFirst({
            where:{
                title
            }
        })
        if(isExists){
            data.errors.title = await toast('Already exists', req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editSalaryPeriod = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.salaryPeriods.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }
    else{
        req.currentRecord = Result
    }

    if(!title){
        data.errors.title = await toast('Title is required', req.user.languageId)
    }

    let isExists = await db.salaryPeriods.findFirst({
        where:{
            title,
            NOT:[
                {
                    id: parseInt(id)
                }
            ]
        }
    })

    if(isExists){
        data.errors.title = await toast('Already exists', req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteSalaryPeriod = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.salaryPeriods.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast('Not found', req.user.languageId)
        })
    }

    next()
}

