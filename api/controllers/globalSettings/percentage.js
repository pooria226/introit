const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const { toast } = require('../../utils/u_Toasts');




exports.view = async(req, res) => {

    try {
        let percentage = await db.percentage.findMany({
            select:{
                // id              : true,
                firstName       : true,    
                lastName        : true,    
                email           : true,    
                phone           : true,    
                profileImage    : true,    
                dateOfBirth     : true,    
                birthPlace      : true,    
                address         : true,    
                jobTitle        : true,    
                nationality     : true,    
                academicLevel   : true,    
                industry        : true,    
                currency        : true,    
                aboutMe         : true,    
                education       : true,    
                experience      : true,    
                skills          : true,    
                languages       : true,    
                expertise       : true,    
                portfolio       : true,    
                extraCurriculam : true,    
                courses         : true,    
                interships      : true,    
                references      : true,    
                hobbies         : true,    
                additionalInfo  : true,    
                publications    : true,    
                awards          : true,
            }
        })
        return res.json({status: 1, percentage})
        
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.edit = async(req, res) => {

    const {firstName, lastName, email, phone, profileImage, dateOfBirth, birthPlace, address, jobTitle, nationality, academicLevel, industry, currency, aboutMe, education, experience, skills, languages, expertise, portfolio, extraCurriculam, courses, interships, references, hobbies, additionalInfo, publications, awards} = req.body

    try {
        let percentage = await db.percentage.upsert({
            where:{
                id: 1
            },
            create:{
                firstName, lastName, email, phone, profileImage, dateOfBirth, birthPlace, address, jobTitle, nationality, academicLevel, industry, currency, aboutMe, education, experience, skills, languages, expertise, portfolio, extraCurriculam, courses, interships, references, hobbies, additionalInfo, publications, awards,
                createdBy: req.user.id
            },
            update:{
                firstName, lastName, email, phone, profileImage, dateOfBirth, birthPlace, address, jobTitle, nationality, academicLevel, industry, currency, aboutMe, education, experience, skills, languages, expertise, portfolio, extraCurriculam, courses, interships, references, hobbies, additionalInfo, publications, awards,
                updatedBy: req.user.id
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


