const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const slugify = require('slugify')
const { toast } = require('../../utils/u_Toasts');



// =================================================================================== Genders

exports.viewAllGenders = async(req, res) => {
    try {
        let list = await db.genders.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneGender = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.genders.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            }
        })

        if(item.translations.length){
            item.title = item.translations[0].title
        }

        item.translations = undefined

        return res.json({status: 1, item})  
         
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createGender = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.genders.create({
            data:{
                title,
                slug: slugify(title.toLowerCase(), "-"),
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editGender = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.genders.update({
            where:{id},
            data:{
                title,
                slug: slugify(title.toLowerCase(), "-"),
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteGender = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.genders.delete({
            where:{
                id: parseInt(id)
            },
        })
        let delTs = await db.gendersTs.deleteMany({
            where:{
                recordId: item.id
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Security Questions

exports.viewAllSecurityQuestions = async(req, res) => {
    try {
        let list = await db.securityQuestions.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })

        return res.json({status: 1, list})

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneSecurityQuestion = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.securityQuestions.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createSecurityQuestion = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.securityQuestions.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editSecurityQuestion = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.securityQuestions.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteSecurityQuestion = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.securityQuestions.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Acadenic Levels

exports.viewAllAcademicLevels = async(req, res) => {
    try {
        let list = await db.academicLevels.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneAcademicLevel = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.academicLevels.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                slug: true,
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createAcademicLevel = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.academicLevels.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editAcademicLevel = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.academicLevels.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteAcademicLevel = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.academicLevels.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== Application Results

exports.viewAllApplicationResults = async(req, res) => {
    try {
        let list = await db.applicationResults.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneApplicationResult = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.applicationResults.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createApplicationResult = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.applicationResults.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editApplicationResult = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.applicationResults.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteApplicationResult = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.applicationResults.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== Domination Levels

exports.viewAllDominationLevels = async(req, res) => {
    try {
        let list = await db.dominationLevels.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneDominationLevel = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.dominationLevels.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createDominationLevel = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.dominationLevels.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editDominationLevel = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.dominationLevels.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteDominationLevel = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.dominationLevels.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Language Levels

exports.viewAllLanguageLevels = async(req, res) => {
    try {
        let list = await db.languageLevels.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneLanguageLevel = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.languageLevels.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createLanguageLevel = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.languageLevels.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editLanguageLevel = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.languageLevels.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteLanguageLevel = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.languageLevels.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Language Certificates

exports.viewAllLanguageCertificates = async(req, res) => {
    try {
        let list = await db.languageCertificates.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneLanguageCertificate = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.languageCertificates.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createLanguageCertificate = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.languageCertificates.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editLanguageCertificate = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.languageCertificates.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteLanguageCertificate = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.languageCertificates.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== Job Question Categories

exports.viewAllJobQuestionCategories = async(req, res) => {
    try {
        let list = await db.jobQuestionsCategories.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneJobQuestionCategory = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.jobQuestionsCategories.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createJobQuestionCategory = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.jobQuestionsCategories.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editJobQuestionCategory = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.jobQuestionsCategories.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteJobQuestionCategory = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.jobQuestionsCategories.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== Countries

exports.viewAllCountries = async(req, res) => {
    try {
        let list = await db.countries.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                code: true,
                prefix: true,
                title: true,
                flagId: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title;
            item.flag = `${process.env.CFLARE_IMG_URL}/${item.flagId}/icon`;
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
            item.flagId = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneCountry = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.countries.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                code: true,
                prefix: true,
                title: true,
                flagId: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        item.flag = `${process.env.CFLARE_IMG_URL}/${item.flagId}/icon`;
        item.flagId = undefined;
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createCountry = async(req, res) => {
    const {title, code, prefix} = req.fields
    try {
        let item = await db.countries.create({
            data:{
                title,
                slug: slugify(title.toLowerCase(), "-"),
                code,
                prefix,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editCountry = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title, code, prefix} = req.fields
    try {
        let item = await db.countries.update({
            where:{id},
            data:{
                title,
                slug: slugify(title.toLowerCase(), "-"),
                code,
                prefix,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteCountry = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.countries.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== Nationalities

exports.viewAllNationalities = async(req, res) => {
    try {
        let list = await db.nationalities.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneNationality = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.nationalities.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createNationality = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.nationalities.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editNationality = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.nationalities.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteNationality = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.nationalities.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Languages

exports.viewAllLanguages = async(req, res) => {
    try {
        let list = await db.languages.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                code: true,
                slug: true,
                title: true,
                isRtl: true,
                isDefault: true,
                isOnList: true,
                isOnLine: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneLanguage = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.languages.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                code: true,
                slug: true,
                title: true,
                isRtl: true,
                isDefault: true,
                isOnList: true,
                isOnLine: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            }
        })

        item.name = item.title
        if(item.translations.length){
            item.title = item.translations[0].title
        }
        item.translations = undefined

        return res.json({status: 1, item})   

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createLanguage = async(req, res) => {

    const {code, title, isRtl} = req.body
    
    try {
        let item = await db.languages.create({
            data:{
                title,
                code,
                slug: slugify(title.toLowerCase(), "-"),
                isRtl,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editLanguage = async(req, res) => {
    
    const id = parseInt(req.params.id)
    const {code, title, isRtl} = req.body

    try {
        let item = await db.languages.update({
            where:{id},
            data:{
                title,
                code,
                slug: slugify(title.toLowerCase(), "-"),
                isRtl,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteLanguage = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.languages.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Currencies

exports.viewAllCurrencies = async(req, res) => {
    try {
        let list = await db.currencies.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                code: true,
                symbol: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneCurrency = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.currencies.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                code: true,
                symbol: true,
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createCurrency = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.currencies.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editCurrency = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.currencies.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteCurrency = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.currencies.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Driving Licenses

exports.viewAllDrivingLicenses = async(req, res) => {
    try {
        let list = await db.drivingLicenses.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneDrivingLicense = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.drivingLicenses.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createDrivingLicense = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.drivingLicenses.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editDrivingLicense = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.drivingLicenses.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteDrivingLicense = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.drivingLicenses.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Industries

exports.viewAllIndustries = async(req, res) => {
    try {
        let list = await db.industries.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneIndustry = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.industries.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createIndustry = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.industries.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editIndustry = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.industries.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteIndustry = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.industries.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Employment Type

exports.viewAllEmploymentTypes = async(req, res) => {
    try {
        let list = await db.employmentTypes.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneEmploymentType = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.employmentTypes.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createEmploymentType = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.employmentTypes.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editEmploymentType = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.employmentTypes.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteEmploymentType = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.employmentTypes.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Timezones

exports.viewAllTimezones = async(req, res) => {
    try {
        let list = await db.timezones.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                offset: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneTimezone = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.timezones.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createTimezone = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.timezones.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editTimezone = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.timezones.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteTimezone = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.timezones.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== Job Status

exports.viewAllJobStatus = async(req, res) => {
    try {
        let list = await db.jobStatus.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneJobStatus = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.jobStatus.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createJobStatus = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.jobStatus.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editJobStatus = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.jobStatus.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteJobStatus = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.jobStatus.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== Skills

exports.viewAllSkills = async(req, res) => {
    try {
        let list = await db.skills.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneSkills = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.skills.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createSkills = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.skills.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editSkills = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.skills.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteSkills = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.skills.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== Sections

exports.viewAllSections = async(req, res) => {

    try {
        let list = await db.sections.findMany({
            where:{
                isLive: true,
            },
            select:{
                id: true,
                slug: true,
                title: true,
                domain: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneSection = async(req, res) => {
    
    const id = parseInt(req.params.id)

    try {
        let item = await db.sections.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                slug: true,
                title: true,
                domain: true,
            },
            orderBy:{
                title: "asc"
            }
        })
        return res.json({status: 1, item})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createSection = async(req, res) => {
    const {title, domain} = req.body
    try {
        let item = await db.sections.create({
            data:{
                title,
                domain,
                slug: slugify(title.toLowerCase(), "-"),
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editSection = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title, domain} = req.body
    try {
        let item = await db.sections.update({
            where:{id},
            data:{
                title,
                domain,
                updatedBy: req.user.id,
                slug: slugify(title.toLowerCase(), "-"),
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteSection = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.sections.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Labels

exports.viewAllLabels = async(req, res) => {

    const {id} = req.params

    try {
        let list = await db.labels.findMany({
            where:{
                isLive: true,
                sectionId: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneLabel = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.labels.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        item.name = item.title
        if(item.translations.length){
            item.title = item.translations[0].title
        }
        item.translations = undefined
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createLabel = async(req, res) => {
    const {title, sectionId} = req.body
    try {
        let item = await db.labels.create({
            data:{
                title,
                slug: slugify(title.toLowerCase(), "-"),
                sectionId: parseInt(sectionId),
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editLabel = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title, sectionId} = req.body
    try {
        let item = await db.labels.update({
            where:{id},
            data:{
                title,
                slug: slugify(title.toLowerCase(), "-"),
                sectionId: parseInt(sectionId),
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteLabel = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.labels.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// =================================================================================== Toasts

exports.viewAllToasts = async(req, res) => {
    try {
        let list = await db.labels.findMany({
            where:{
                isLive: true,
            },
            select:{
                id: true,
                title: true,
                slug: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                id: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneToast = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.toasts.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createToast = async(req, res) => {
    const {title} = req.body
    try {
        let item = await db.toasts.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editToast = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.toasts.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteToast = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.toasts.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

// =================================================================================== SalaryPeriods

exports.viewAllSalaryPeriods = async(req, res) => {
    try {
        let list = await db.salaryPeriods.findMany({
            where:{
                isLive: true
            },
            select:{
                id: true,
                title: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                }
            },
            orderBy:{
                title: "asc"
            }
        })
        list.forEach(item => {
            item.name = item.title
        })
        list.forEach(item => {
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })
        list.forEach(item => {
            item.translations = undefined
        })
        return res.json({status: 1, list})
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneSalaryPeriod = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.salaryPeriods.findFirst({
            where:{
                isLive: true,
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true
            }
        })
        return res.json({status: 1, item})   
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.createSalaryPeriod = async(req, res) => {
    const {title} = req.body
    console.log(title)
    try {
        let item = await db.salaryPeriods.create({
            data:{
                title,
                createdBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.editSalaryPeriod = async(req, res) => {
    const id = parseInt(req.params.id)
    const {title} = req.body
    try {
        let item = await db.salaryPeriods.update({
            where:{id},
            data:{
                title,
                updatedBy: req.user.id,
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.deleteSalaryPeriod = async(req, res) => {
    const {id} = req.params
    try {
        let item = await db.salaryPeriods.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}
