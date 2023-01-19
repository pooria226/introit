const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { size, isArray, isObject } = require("lodash")
const {isNumber} = require("../../utils/u_Is")
const {toast} = require("../../utils/u_Toasts")
const slugify = require('slugify')


// =================================================================================== Sections

exports.one = async(req, res, next) => {

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
    let Language = await db.languages.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Language){
        return res.json({
            status: -1,
            error: await toast("Not found", req.user.languageId)
        })
    }    
    req.language = Language
    
    next()

}

exports.viewAllLanguages = async(req, res, next) => {
    next()
}

exports.viewAllSections = async(req, res, next) => {
    
    let data = {status: 0, errors: {}}
    const {domain} = req.params
    if(domain !== 'basic' && domain !== 'app' && domain !== 'site'){
        data.errors.domain = await toast("Not found", req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    next()
    
}

exports.viewOneSection = async(req, res, next) => {
    let data = {status: 0, errors: {}}
    const {LID, SID} = req.params

    if(!LID){
        data.errors.languageId = await toast("Id is required", req.user.languageId)
    }
    if(!isNumber(LID)){
        data.errors.languageId = await toast("Numeric id is required", req.user.languageId)
    }
    if(!SID){
        data.errors.sectionId = await toast("Id is required", req.user.languageId)
    }
    if(!isNumber(SID)){
        data.errors.sectionId = await toast("Numeric id is required", req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    let Section = await db.sections.findFirst({
        where:{
            id: parseInt(SID)
        }
    })
    if(!Section){
        data.errors.sectionId = await toast("Not found", req.user.languageId)
    }
    let Language = await db.languages.findFirst({
        where:{
            id: parseInt(LID)
        }
    })
    if(!Language){
        data.errors.languageId = await toast("Not found", req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    req.section  = Section
    req.language = Language
    
    next()
}

exports.translate = async(req, res, next) => {

    const {languageId, domain, slug, fields} = req.body

    if(!languageId){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(languageId)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    if(!slug){
        return res.json({
            status: -1, 
            error: await toast("Title is required", req.user.languageId)
        })
    }
    if(!domain){
        return res.json({
            status: -1, 
            error: await toast("Domain is required", req.user.languageId)
        })
    }
    if(domain !== 'basic' && domain !== 'app' && domain !== 'site'){
        return res.json({
            status: -1, 
            error: await toast("Domain is required", req.user.languageId)
        })
    }
    if(!fields || !isArray(fields)){
        return res.json({
            status: -1, 
            error: "An array of translated fields is required"
        })
    }
    fields.forEach(field => {
        if(!isObject(field)){
            return res.json({
                status: -1, 
                error: "An object format of fields are required"
            })
        }
        if(!field.id || !isNumber(field.id)){
            return res.json({
                status: -1, 
                error: "A numeric id for each field is required"
            })
        }
        if(!field.translation){
            return res.json({
                status: -1, 
                error: "A translation for each field is required"
            })
        }
    })
    let Language = await db.languages.findFirst({
        where:{
            id: parseInt(languageId)
        }
    })
    if(!Language){
        return res.json({
            status: -1, 
            error: "Language not found"
        })
    }

    next()

}
