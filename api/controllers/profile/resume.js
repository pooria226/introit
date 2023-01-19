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




// Progress ======================================================

exports.viewProgress = async(req, res) => {

    let percent = 0;

    try {
        let user = await db.users.findFirst({
            where:{ 
                id: req.user.id
            },
            select:{
                id: true,
                userEducations: true,
                userExperiences: true,
                userSkils: true,
                userLanguages: true,
                userExpertises: true,
                userPortfolios: true,
                userExtraActivities: true,
                userCourses: true,
                userInterships: true,
                userReferences: true,
                userAwards: true,
                hobbies: true,
                additionalInfo: true,
                publications: true,
            },
        })

        if( user.userEducations.length > 0 ){
            percent = percent + 7.143
        }

        if( user.userExperiences.length > 0 ){
            percent = percent + 7.143
        }

        if( user.userSkils.length > 0 ) {
            percent = percent + 7.143
        }

        if( user.userLanguages.length > 0 ) {
            percent = percent + 7.143
        }

        if( user.userExpertises.length > 0 ) {
            percent = percent + 7.143   
        }

        if( user.userPortfolios.length > 0 ) {   
            percent = percent + 7.143
        }

        if( user.userExtraActivities.length > 0 ) {   
            percent = percent + 7.143
        }

        if( user.userCourses.length > 0 ) {   
            percent = percent + 7.143
        }

        if( user.userInterships.length > 0 ) {   
            percent = percent + 7.143
        }

        if( user.userReferences.length > 0 ) {   
            percent = percent + 7.143
        }

        if( user.userAwards.length > 0 ) {   
            percent = percent + 7.143
        }

        if( user.hobbies ) {   
            percent = percent + 7.143
        }

        if( user.additionalInfo ) {   
            percent = percent + 7.143
        }

        if( user.publications ) {   
            percent = percent + 7.143
        }

        if( percent > 100 ) {   
            percent = 100
        }

        return res.json({status: 1, percent: parseFloat(percent).toFixed(3)})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}


// Educations ======================================================

exports.viewAllEducations = async(req, res) => {
    try {
        let educations = await db.userEducations.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                fromDate: true,
                toDate: true,
                present: true,
                institute: true,
                major: true,
                country: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                city: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                degree: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
            },
            orderBy:{
                toDate: 'desc'
            }
        })
        return res.json({status: 1, educations})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneEducation = async(req, res) => {

    const {id} = req.params

    try {
        let education = await db.userEducations.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                fromDate: true,
                toDate: true,
                present: true,
                institute: true,
                major: true,
                country: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                city: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                degree: {
                    select:{
                        id: true,
                        title: true
                    }
                },
            },
        })
        return res.json({status: 1, education})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createEducation = async(req, res) => {

    const {countryId, cityId} = req
    const {fromDate, toDate, present, institute, degreeId, major} = req.body
    
    try {
        let Education = await db.userEducations.create({
            data:{
                fromDate: new Date(fromDate), 
                toDate:   new Date(toDate), 
                present, institute, major,
                degreeId: parseInt(degreeId),
                createdBy: req.user.id,
                userId: req.user.id,
                countryId: countryId ? countryId : null,
                cityId:  cityId ? cityId : null,
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

exports.editEducation = async(req, res) => {

    const {countryId, cityId} = req
    const {fromDate, toDate, present, institute, degreeId, major} = req.body

    try {
        let Education = await db.userEducations.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                fromDate: new Date(fromDate), 
                toDate:   new Date(toDate), 
                present, institute, major,
                degreeId: parseInt(degreeId),
                updatedBy: req.user.id,
                countryId: countryId ? countryId : null,
                cityId:  cityId ? cityId : null,
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

exports.deleteEducation = async(req, res) => {

    const {id} = req.params

    try {
        let delEducation = await db.userEducations.delete({
            where:{
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

// Experiences ======================================================

exports.viewAllExperiences = async(req, res) => {
    try {
        let experiences = await db.userExperiences.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                title: true,
                fromDate: true,
                toDate: true,
                present: true,
                institute: true,
                country: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                city: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                description: true,
                employmentType: {
                    select:{
                        id: true,
                        title: true
                    }
                },
            },
            orderBy:{
                toDate: 'desc'
            }
        })
        return res.json({status: 1, experiences})

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneExperience = async(req, res) => {

    const {id} = req.params

    try {
        let experience = await db.userExperiences.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                fromDate: true,
                toDate: true,
                present: true,
                institute: true,
                country: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                city: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                description: true,
                employmentType: {
                    select:{
                        id: true,
                        title: true
                    }
                },
            },
        })
        return res.json({status: 1, experience})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createExperience = async(req, res) => {

    const {countryId, cityId} = req
    const {title, fromDate, toDate, present, institute, description, employmentTypeId} = req.body

    try {
        let Experience = await db.userExperiences.create({
            data:{
                title,
                fromDate: new Date(fromDate), 
                toDate:   new Date(toDate), 
                present, institute, description,
                createdBy: req.user.id,
                userId: req.user.id,
                countryId: countryId ? countryId : null,
                cityId:  cityId ? cityId : null,
                employmentTypeId: employmentTypeId ? parseInt(employmentTypeId) : null
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

exports.editExperience = async(req, res) => {

    const {countryId, cityId} = req
    const {title, fromDate, toDate, present, institute, description, employmentTypeId} = req.body

    try {
        let Experience = await db.userExperiences.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                title,
                fromDate : fromDate ? new Date(fromDate) : req.user.fromDate, 
                toDate   : toDate   ? new Date(toDate)   : req.user.toDate, 
                present, institute, description,
                updatedBy: req.user.id,
                countryId: countryId ? countryId : null,
                cityId:  cityId ? cityId : null,
                employmentTypeId: parseInt(employmentTypeId)
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

exports.deleteExperience = async(req, res) => {

    const {id} = req.params

    try {
        let delExperience = await db.userExperiences.delete({
            where:{
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

// Skills ======================================================

exports.viewAllSkills = async(req, res) => {
    try {
        let skills = await db.userSkills.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                title: true,
                domination: {
                    select:{
                        id: true,
                        title: true
                    }
                },
                percentage: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        return res.json({status: 1, skills})

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneSkill = async(req, res) => {

    const {id} = req.params

    try {
        let skill = await db.userSkills.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                domination: {
                    select:{
                        id: true,
                        title: true
                    }
                },
                percentage: true
            },
        })
        return res.json({status: 1, skill})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createSkill = async(req, res) => {

    const {title, dominationId, percentage} = req.body

    try {
        let skill = await db.userSkills.create({
            data:{
                title, percentage,
                dominationId: parseInt(dominationId),
                createdBy: req.user.id,
                userId: req.user.id,
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

exports.editSkill = async(req, res) => {

    const {title, dominationId, percentage} = req.body

    try {
        let Skill = await db.userSkills.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                title, percentage,
                dominationId: parseInt(dominationId),
                createdBy: req.user.id,
                userId: req.user.id,
                updatedBy: req.user.id,
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

exports.deleteSkill = async(req, res) => {

    const {id} = req.params

    try {
        let delSkill = await db.userSkills.delete({
            where:{
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

// Languages ======================================================

exports.viewAllLanguages = async(req, res) => {
    try {
        let languages = await db.userLanguages.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                language:{
                    select:{
                        title: true,
                    }
                },
                level: {
                    select:{
                        title: true,
                    }
                },
                certificate: {
                    select:{
                        title: true
                    }
                },
                percentage: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        return res.json({status: 1, languages})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneLanguage = async(req, res) => {

    const {id} = req.params

    try {
        let language = await db.userLanguages.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                language:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                level: {
                    select:{
                        id: true,
                        title: true
                    }
                },
                certificate: {
                    select:{
                        id: true,
                        title: true
                    }
                },
                percentage: true
            },
        })
        return res.json({status: 1, language})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createLanguage = async(req, res) => {

    const {languageId, levelId, certificateId, percentage} = req.body

    try {
        let Language = await db.userLanguages.create({
            data:{
                percentage,
                languageId: parseInt(languageId), 
                levelId: parseInt(levelId), 
                certificateId: parseInt(certificateId), 
                createdBy: req.user.id,
                userId: req.user.id,
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

exports.editLanguage = async(req, res) => {

    const {languageId, levelId, certificateId, percentage} = req.body

    try {
        let Language = await db.userLanguages.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                percentage,
                languageId: parseInt(languageId), 
                levelId: parseInt(levelId), 
                certificateId: parseInt(certificateId), 
                userId: req.user.id,
                updatedBy: req.user.id,
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

exports.deleteLanguage = async(req, res) => {

    const {id} = req.params

    try {
        let delLanguage = await db.userLanguages.delete({
            where:{
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

// Expertises ======================================================

exports.viewAllExpertises = async(req, res) => {
    try {
        let expertises = await db.userExpertises.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                title: true,
                domination: {
                    select:{
                        id: true,
                        title: true
                    }
                },
                percentage: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        return res.json({status: 1, expertises})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneExpertise = async(req, res) => {

    const {id} = req.params

    try {
        let expertise = await db.userExpertises.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                domination: {
                    select:{
                        id: true,
                        title: true
                    }
                },
                percentage: true
            },
        })
        return res.json({status: 1, expertise})

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createExpertise = async(req, res) => {

    const {title, dominationId, percentage} = req.body

    try {
        let Expertise = await db.userExpertises.create({
            data:{
                title, 
                dominationId: parseInt(dominationId), 
                percentage,
                createdBy: req.user.id,
                userId: req.user.id,
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

exports.editExpertise = async(req, res) => {

    const {title, dominationId, percentage} = req.body

    try {
        let Expertise = await db.userExpertises.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                title, 
                dominationId: parseInt(dominationId),
                percentage,
                createdBy: req.user.id,
                userId: req.user.id,
                updatedBy: req.user.id,
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

exports.deleteExpertise = async(req, res) => {

    const {id} = req.params;

    try {
        let delExpertise = await db.userExpertises.delete({
            where:{
                id: parseInt(id)
            }
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

// Portfolios ======================================================

exports.viewAllPortfolios = async(req, res) => {
    try {
        let portfolios = await db.userPortfolios.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                title: true,
                link: true,
                videoLink: true,
                imageIds: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        portfolios.forEach(portfolio => {
            let imageList = [];
            if(portfolio.imageIds !== null){
                portfolio.imageIds.forEach(imageId => {
                    imageList.push(`${process.env.CFLARE_IMG_URL}/${imageId}/public`)
                })
            }
            portfolio.images = imageList;
        })
        portfolios.forEach(portfolio => {
            portfolio.imageIds = undefined;
        })
        return res.json({status: 1, portfolios})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOnePortfolio = async(req, res) => {

    const {id} = req.params

    try {
        let portfolio = await db.userPortfolios.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                link: true,
                videoLink: true,
                imageIds: true
            },
        })
        let imageList = [];
        if(portfolio.imageIds !== null){
            portfolio.imageIds.forEach(imageId => {
                imageList.push({
                    imageId: imageId,
                    imageLink: `${process.env.CFLARE_IMG_URL}/${imageId}/public`
                })
            })
        }
        portfolio.images = imageList;
        portfolio.imageIds = undefined;
        return res.json({status: 1, portfolio})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createPortfolio = async(req, res) => {

    const imageIds = req.imageIds;
    const {title, link, videoLink} = req.fields

    try {
        let Portfolio = await db.userPortfolios.create({
            data:{
                title, link, videoLink, imageIds,
                createdBy: req.user.id,
                userId: req.user.id,
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

exports.editPortfolio = async(req, res) => {

    const imageIds = req.imageIds;
    const oldImageIds = req.oldImageIds;
    const {title, link, videoLink} = req.fields;

    for(let i=0; i<imageIds.length; i++){
        oldImageIds.push(imageIds[i])
    }

    let updPortfolio = await db.userPortfolios.update({
        where:{
            id: parseInt(req.params.id)
        },
        data:{ 
            title, link, videoLink, 
            imageIds: oldImageIds,
            updatedBy: req.user.id,
        }
    })

    return res.json({
        status: 1, 
        message: await toast("Updated", req.user.languageId)
    })
    
}

exports.deletePortfolio = async(req, res) => {

    let oldImageIDs = req.portfolio.imageIds;

    try {
        if(oldImageIDs !== null){
            for(let i=0; i<oldImageIDs.length; i++){
                await axios({
                    method: "delete",
                    url: `${process.env.CFLARE_ENDPOINT}/${oldImageIDs[i]}`,
                    headers: {
                        Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                    },
                })
            }
            let delPortfolio = await db.userPortfolios.delete({
                where:{
                    id: req.portfolio.id
                },
            })
        }else{
            let delPortfolio = await db.userPortfolios.delete({
                where:{
                    id: req.portfolio.id
                },
            })
        }
    
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

exports.delimage = async(req, res) => {

    const {id, imageId} = req.params

    let newImageIds = req.portfolio.imageIds.filter(imgId => {
        return imgId !== imageId
    })

    try {
        let updPortfolio = await db.userPortfolios.update({
            where:{
                id: parseInt(id)
            },
            data:{
                imageIds: newImageIds
            }
        })

        await axios({
            method: "delete",
            url: `${process.env.CFLARE_ENDPOINT}/${imageId}`,
            headers: {
                Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                // ...data.getHeaders(),
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

exports.addimage = async(req, res) => {

    const {id} = req.params
    const {imageId, portfolio} = req

    let newImageIds = req.portfolio.imageIds
    newImageIds.push(imageId)

    try {
        let updPortfolio = await db.userPortfolios.update({
            where:{
                id: parseInt(id)
            },
            data:{
                imageIds: newImageIds
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

// Extra Activities ======================================================

exports.viewAllExtraActivities = async(req, res) => {
    try {
        let extraActivities = await db.userExtraActivities.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                title: true,
                fromDate: true,
                toDate: true,
                present: true,
                institute: true,
                country: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                city: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                description: true,
            },
            orderBy:{
                toDate: 'desc'
            }
        })
        return res.json({status: 1, extraActivities})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneExtraActivity = async(req, res) => {

    const {id} = req.params

    try {
        let extraActivity = await db.userExtraActivities.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                fromDate: true,
                toDate: true,
                present: true,
                institute: true,
                country: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                city: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                description: true,
            },
        })
        return res.json({status: 1, extraActivity})

    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createExtraActivity = async(req, res) => {

    const {countryId, cityId} = req
    const {title, fromDate, toDate, present, institute, description} = req.body

    try {
        let ExtraActivity = await db.userExtraActivities.create({
            data:{
                title,
                fromDate: new Date(fromDate), 
                toDate:   new Date(toDate), 
                present, institute, description,
                createdBy: req.user.id,
                userId: req.user.id,
                countryId: countryId ? countryId : null,
                cityId:  cityId ? cityId : null,
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

exports.editExtraActivity = async(req, res) => {

    const {countryId, cityId} = req
    const {title, fromDate, toDate, present, institute, description} = req.body

    try {
        let ExtraActivity = await db.userExtraActivities.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                title,
                fromDate : fromDate ? new Date(fromDate) : req.user.fromDate, 
                toDate   : toDate   ? new Date(toDate)   : req.user.toDate, 
                present, institute, description,
                updatedBy: req.user.id,
                countryId: countryId ? countryId : null,
                cityId:  cityId ? cityId : null,
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

exports.deleteExtraActivity = async(req, res) => {

    const {id} = req.params

    try {
        let delExtraActivity = await db.userExtraActivities.delete({
            where:{
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

// Interships ======================================================

exports.viewAllInterships = async(req, res) => {
    try {
        let interships = await db.userInterships.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                title: true,
                fromDate: true,
                toDate: true,
                present: true,
                employer: true,
                country: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                city: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
            },
            orderBy:{
                toDate: 'desc'
            }
        })
        return res.json({status: 1, interships})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneIntership = async(req, res) => {

    const {id} = req.params

    try {
        let intership = await db.userInterships.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                fromDate: true,
                toDate: true,
                present: true,
                employer: true,
                country: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
                city: {
                    select:{
                        id: true,
                        title: true,
                        
                    }
                },
            },
        })
        return res.json({status: 1, intership})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createIntership = async(req, res) => {

    const {countryId, cityId} = req
    const {title, fromDate, toDate, present, employer} = req.body

    try {
        let Intership = await db.userInterships.create({
            data:{
                title,
                fromDate: new Date(fromDate), 
                toDate:   new Date(toDate), 
                present, employer,
                createdBy: req.user.id,
                userId: req.user.id,
                countryId: countryId ? countryId : null,
                cityId:  cityId ? cityId : null,
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

exports.editIntership = async(req, res) => {

    const {countryId, cityId} = req
    const {title, fromDate, toDate, present, employer} = req.body

    try {
        let Intership = await db.userInterships.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                title,
                fromDate : fromDate ? new Date(fromDate) : req.user.fromDate, 
                toDate   : toDate   ? new Date(toDate)   : req.user.toDate, 
                present, employer,
                updatedBy: req.user.id,
                countryId: countryId ? countryId : null,
                cityId:  cityId ? cityId : null,
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

exports.deleteIntership = async(req, res) => {

    const {id} = req.params

    try {
        let delIntership = await db.userInterships.delete({
            where:{
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

// References ======================================================

exports.viewAllReferences = async(req, res) => {
    try {
        let references = await db.userReferences.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                fullName: true,
                company: true,
                phone: true,
                email: true,
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        return res.json({status: 1, references})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneReference = async(req, res) => {

    const {id} = req.params

    try {
        let reference = await db.userReferences.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                fullName: true,
                company: true,
                phone: true,
                email: true,
            },
        })
        return res.json({status: 1, reference})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createReference = async(req, res) => {

    const {fullName, company, phone, email} = req.body

    try {
        let Reference = await db.userReferences.create({
            data:{
                fullName, company, phone, email,
                createdBy: req.user.id,
                userId: req.user.id,
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

exports.editReference = async(req, res) => {

    const {fullName, company, phone, email} = req.body

    try {
        let Reference = await db.userReferences.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                fullName, company, phone, email,
                updatedBy: req.user.id,
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

exports.deleteReference = async(req, res) => {

    const {id} = req.params

    try {
        let delReference = await db.userReferences.delete({
            where:{
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

// Awards ======================================================

exports.viewAllAwards = async(req, res) => {
    try {
        let awards = await db.userAwards.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                title: true,
                date: true,
                description: true,
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        return res.json({status: 1, awards})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneAward = async(req, res) => {

    const {id} = req.params

    try {
        let award = await db.userAwards.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                date: true,
                description: true,
            },
        })
        return res.json({status: 1, award})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createAward = async(req, res) => {

    const {title, date, description} = req.body

    try {
        let Award = await db.userAwards.create({
            data:{
                title,
                date: new Date(date), 
                description,
                createdBy: req.user.id,
                userId: req.user.id,
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

exports.editAward = async(req, res) => {

    const {title, date, description} = req.body

    try {
        let Award = await db.userAwards.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                title,
                date: new Date(date),
                description,
                updatedBy: req.user.id,
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

exports.deleteAward = async(req, res) => {

    const {id} = req.params

    try {
        let delAward = await db.userAwards.delete({
            where:{
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

// Courses ======================================================

exports.viewAllCourses = async(req, res) => {
    try {
        let courses = await db.userCourses.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                title: true,
                fromDate: true,
                toDate: true,
                present: true,
                institute: true,
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        return res.json({status: 1, courses})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.viewOneCourse = async(req, res) => {

    const {id} = req.params

    try {
        let course = await db.userCourses.findUnique({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                fromDate: true,
                toDate: true,
                present: true,
                institute: true,
            },
        })
        return res.json({status: 1, course})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createCourse = async(req, res) => {

    const {title, fromDate, toDate, present, institute} = req.body

    try {
        let Course = await db.userCourses.create({
            data:{
                title,
                fromDate: new Date(fromDate), 
                toDate:   new Date(toDate), 
                present, institute,
                createdBy: req.user.id,
                userId: req.user.id,
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

exports.editCourse = async(req, res) => {

    const {title, fromDate, toDate, present, institute} = req.body

    try {
        let Course = await db.userCourses.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                title,
                fromDate: new Date(fromDate), 
                toDate:   new Date(toDate), 
                present, institute,
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

exports.deleteCourse = async(req, res) => {

    const {id} = req.params

    try {
        let delCourse = await db.userCourses.delete({
            where:{
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

// Hobbies ======================================================
exports.editHobbies = async(req, res) => {

    const {hobbies} = req.body

    try {
        let User = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                hobbies: hobbies ? hobbies : req.user.hobbies
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

// Additional Information ========================================
exports.editAdditionalInfo = async(req, res) => {

    const {additionalInformation} = req.body

    try {
        let User = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                additionalInfo: additionalInformation ? additionalInformation : req.user.additionalInfo
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

// Publications ===================================================
exports.editPublications = async(req, res) => {

    const {publications} = req.body

    try {
        let User = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                publications: publications ? publications : req.user.publications
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

// User CV ===================================================
exports.viewCV = async(req, res) => {

    const id = parseInt(req.params.id)

    const selectDetails = {
        id: true,
        title: true
    }

    try {
        let User = await db.users.findFirst({
            where:{
                id
            },
            select:{
                id: true,
                givenName: true,
                familyName: true,
                dateOfBirth: true,
                avatar: true,
                bannerId: true,
                jobTitle: true,
                phone: true,
                email: true,
                streetAddress: true,
                website: true,
                minSalary: true,
                maxSalary: true,
                about: true,
                description: true,
                hobbies: true,
                additionalInfo: true,
                publications: true,
                gender:{
                    select: selectDetails
                },
                degree:{
                    select: selectDetails
                },
                drivingLicense:{
                    select: selectDetails
                },
                nationality:{
                    select: selectDetails
                },
                industry:{
                    select: selectDetails
                },
                residentCountry:{
                    select: selectDetails
                },
                userEducations:{
                    select:{
                        id: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        institute: true,
                        major: true,
                        country: {
                            select:{
                                id: true,
                                title: true,
                                
                            }
                        },
                        city: {
                            select:{
                                id: true,
                                title: true,
                                
                            }
                        },
                        degree:{
                            select: selectDetails
                        }
                    }
                },
                userExperiences: {
                    select:{
                        id: true,
                        title: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        institute: true,
                        country: {
                            select:{
                                id: true,
                                title: true,
                                
                            }
                        },
                        city: {
                            select:{
                                id: true,
                                title: true,
                                
                            }
                        },
                        description: true,
                    }
                },
                userExpertises: {
                    select:{
                        id: true,
                        title: true,
                        percentage: true,
                        domination:{
                            select: selectDetails
                        }
                    }
                },
                userPortfolios: {
                    select:{
                        id: true,
                        title: true,
                        link: true,
                        videoLink: true,
                        imageIds: true,
                    }
                },
                userSkils:{
                    select:{
                        id: true,
                        title: true,
                        percentage: true,
                        domination:{
                            select: selectDetails
                        }
                    }
                },
                userLanguages:{
                    select:{
                        id: true,
                        percentage: true,
                        language:{
                            select: selectDetails
                        },
                        certificate:{
                            select: selectDetails
                        },
                        level:{
                            select: selectDetails
                        },
                    }
                },
                userExtraActivities:{
                    select:{
                        id: true,
                        title: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        institute: true,
                        country: {
                            select:{
                                id: true,
                                title: true,
                                
                            }
                        },
                        city: {
                            select:{
                                id: true,
                                title: true,
                                
                            }
                        },
                        description: true,
                    }
                },
                userCourses:{
                    select:{
                        id: true,
                        title: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        institute: true,
                    }
                },
                userInterships:{
                    select:{
                        id: true,
                        title: true,
                        fromDate: true,
                        toDate: true,
                        present: true,
                        employer: true,
                        country: {
                            select:{
                                id: true,
                                title: true,
                                
                            }
                        },
                        city: {
                            select:{
                                id: true,
                                title: true,
                                
                            }
                        },
                    } 
                },
                userReferences:{
                    select:{
                        id: true,
                        fullName: true,
                        company: true,
                        phone: true,
                        email: true,
                    }
                },
                userAwards:{
                    select:{
                        id: true,
                        title: true,
                        date: true,
                        description: true,
                    }
                },
                userSocials:{
                    select:{
                        id: true,
                        username: true,
                        social: {
                            select:{
                                id: true,
                                title: true,
                                icon_id: true,
                            }
                        }
                    }
                }
            }
        })

        let portfolioImages = []
        User.userPortfolios.forEach(portfolio => {
            portfolio.imageIds.forEach(id => {
                portfolioImages.push(`${process.env.CFLARE_IMG_URL}/${id}/banner`)
            })
        })
        User.userPortfolios.forEach(portfolio => {
            portfolio.images = portfolioImages
        })
        User.userPortfolios.forEach(portfolio => {
            portfolio.imageIds = undefined
        })

        User.userSocials.forEach(social => {
            social.social.icon = `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`;
            social.url = `https://${social.social.title}.com/${social.username}`;
        })
        User.userSocials.forEach(social => {
            social.social.icon_id = undefined
        })

        User.banner = `${process.env.CFLARE_IMG_URL}/${User.bannerId}/banner`;
        User.bannerId = undefined;

        return res.json({status: 1, cv: User})
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
    
}
