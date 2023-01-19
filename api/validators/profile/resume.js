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
const {toast} = require("../../utils/u_Toasts")
const slugify = require("slugify")


// Educations ======================================================

exports.viewAllEducations = async(req, res, next) => {
    next()
}

exports.viewOneEducation = async(req, res, next) => {
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
    try {
        let Result = await db.userEducations.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createEducation = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    let {institute, fromDate, toDate, present, degreeId, major} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))
    let {country, state, city} = req.body

    // console.log(newFromDate);
    // console.log(new Date(toDate));
    // console.log(new Date());

    if(!institute){
        data.errors.institute = await toast("Required", req.user.languageId)
    }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!degreeId){
        data.errors.degreeId = await toast("Id is required", req.user.languageId)
    }
    else if(!isNumber(parseInt(degreeId))){
        data.errors.degreeId = await toast("Numeric id is required", req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    
    else{
        let degree = await db.academicLevels.findFirst({
            where:{
                id: parseInt(degreeId)
            }
        })
        if(!degree){
            data.errors.degreeId = "Degree not found!"
        }else{
            let UserDegree = await db.userEducations.findFirst({
                where:{
                    userId: req.user.id,
                    degreeId: parseInt(degreeId)
                }
            })
        
            if(UserDegree){
                data.errors.degreeId = "You already have this degree in your resume!"
            }
        }
    }

    if(!major){
        data.errors.major = "Enter the academic major, please!"
    }

    console.log("---------------------------------------");
    console.log('Country:', country);
    console.log('State:', state);
    console.log('City:', city);
    console.log("---------------------------------------");

    if(country){

        if(!city){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: country
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.countryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                slug: slugify(city.toLowerCase(), '-')
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: city,
                    slug: slugify(city.toLowerCase(), '-')
                }
            })
        }
        req.cityId = City.id;

    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editEducation = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    let {institute, fromDate, toDate, present, degreeId, major} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))
    let {country, state, city} = req.body

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
        let Result = await db.userEducations.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

    if(!institute){
        data.errors.institute = await toast("Required", req.user.languageId)
    }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!degreeId){
        data.errors.degreeId = await toast("Required", req.user.languageId)
    }
    else if(!isNumber(parseInt(degreeId))){
        data.errors.degreeId = await toast("Numeric", req.user.languageId)
    }
    else{
        let degree = await db.academicLevels.findFirst({
            where:{
                id: parseInt(degreeId)
            }
        })
        if(!degree){
            data.errors.degreeId = "Degree not found!"
        }else{
            let userDegree = await db.userEducations.findFirst({
                where:{
                    degreeId: parseInt(degreeId),
                    userId: req.user.id,
                    NOT:[
                        {
                            id: parseInt(id)
                        }
                    ]
                }
            })
            if(userDegree){
                data.errors.degreeId = "You already have this degree in your resume!"
            }
        }
    }

    if(!major){
        data.errors.major = "Enter the academic major, please!"
    }

    console.log("---------------------------------------");
    console.log('Country:', country);
    console.log('State:', state);
    console.log('City:', city);
    console.log("---------------------------------------");

    if(country){

        if(!city){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: country
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.countryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                slug: slugify(city.toLowerCase(), '-')
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: city,
                    slug: slugify(city.toLowerCase(), '-')
                }
            })
        }
        req.cityId = City.id;

    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteEducation = async(req, res, next) => {
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
    try {
        let Result = await db.userEducations.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// Experiences ======================================================

exports.viewAllExperiences = async(req, res, next) => {
    next()
}

exports.viewOneExperience = async(req, res, next) => {
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
    try {
        let Result = await db.userExperiences.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createExperience = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    let {title, fromDate, toDate, present, institute, description, employmentTypeId} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))
    let {country, state, city} = req.body

    if(!title){
        data.errors.title = "Enter a title for the experience, please!"
    }
    // else{
    //     let experience = await db.userExperiences.findFirst({
    //         where:{
    //             title,
    //             userId: req.user.id,
    //         }
    //     })
    //     if(experience){
    //         data.errors.title = "You aleady have this experience in your resume!"
    //     }
    // }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!institute){
        data.errors.institute = "Enter the institute name, please!"
    }

    if(country){

        if(!city){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: country
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.countryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                slug: slugify(city.toLowerCase(), '-')
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: city,
                    slug: slugify(city.toLowerCase(), '-')
                }
            })
        }
        req.cityId = City.id;

    }

    if(!employmentTypeId || !isNumber(employmentTypeId)){
        data.errors.employmentTypeId = "Select a valid employment type, please!"
    }else{
        let employmentType = await db.employmentTypes.findFirst({
            where:{
                id: parseInt(employmentTypeId)
            }
        })
        if(!employmentType){
            data.errors.employmentTypeId = "Employment type is invalid!"
        }
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editExperience = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    let {title, fromDate, toDate, present, institute, description, employmentTypeId} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))
    let {country, state, city} = req.body

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the experience ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric experience ID please!"})
    }

    try {
        let Experience = await db.userExperiences.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Experience){
            return res.json({status: -1, title: "Sorry!", error: "Experience not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = "Enter a title for the experience, please!"
    }
    // else{
    //     let userExperience = await db.userExperiences.findFirst({
    //         where:{
    //             title,
    //             userId: req.user.id,
    //             NOT:[
    //                 {
    //                     id: parseInt(id)
    //                 }
    //             ]
    //         }
    //     })
    //     if(userExperience){
    //         data.errors.title = "You already have this Experience in your resume!"
    //     }
    // }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!institute){
        data.errors.institute = "Enter the institute name, please!"
    }

    if(country){

        if(!city){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: country
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.countryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                slug: slugify(city.toLowerCase(), '-')
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: city,
                    slug: slugify(city.toLowerCase(), '-')
                }
            })
        }
        req.cityId = City.id;

    }

    if(!employmentTypeId || !isNumber(employmentTypeId)){
        data.errors.employmentTypeId = "Select a valid employment type, please!"
    }else{
        let employmentType = await db.employmentTypes.findFirst({
            where:{
                id: parseInt(employmentTypeId)
            }
        })
        if(!employmentType){
            data.errors.employmentTypeId = "Employment type is invalid!"
        }
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteExperience = async(req, res, next) => {
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
    try {
        let Result = await db.userExperiences.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// Skills ======================================================

exports.viewAllSkills = async(req, res, next) => {
    next()
}

exports.viewOneSkill = async(req, res, next) => {
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
    try {
        let Result = await db.userSkills.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createSkill = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title, percentage, dominationId} = req.body

    if(!title){
        data.errors.title = "Enter a title for the Skill, please!"
    }else{
        let Skill = await db.userSkills.findFirst({
            where:{
                title,
                userId: req.user.id,
            }
        })
        if(Skill){
            data.errors.title = "You aleady have this Skill in your resume!"
        }
    }

    if(!dominationId){
        data.errors.dominationId = "Enter the domination id please!"
    }
    else if(!isNumber(dominationId)){
        data.errors.dominationId = "Enter a numeric value for the domination id please!"
    }
    else{
        let domination = await db.dominationLevels.findFirst({
            where:{
                id: parseInt(dominationId),
            }
        })
        if(!domination){
            data.errors.dominationId = "Enter a valid domination id please!"
        }
    }

    if(!percentage){
        data.errors.percentage = "Enter the percentage determiation value, please!"
    }else if(!isNumber(percentage)){
        data.errors.percentage = "Enter a numeric percentage value, please!"
    }else if(parseInt(percentage) < 0 && parseInt(percentage) > 100){
        data.errors.percentage = "Enter a value between 0 ~ 100 as the percentage determiation value, please!"
    }


    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editSkill = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title, dominationId, percentage} = req.body

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Skill ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Skill ID please!"})
    }

    try {
        let Skill = await db.userSkills.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Skill){
            return res.json({status: -1, title: "Sorry!", error: "Skill not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = "Enter a title for the Skill, please!"
    }
    else{
        let userSkill = await db.userSkills.findFirst({
            where:{
                title,
                userId: req.user.id,
                NOT:[
                    {
                        id: parseInt(id)
                    }
                ]
            }
        })
        if(userSkill){
            data.errors.title = "You already have this Skill in your resume!"
        }
    }

    if(!dominationId){
        data.errors.dominationId = "Enter the domination id please!"
    }
    else if(!isNumber(dominationId)){
        data.errors.dominationId = "Enter a numeric value for the domination id please!"
    }
    else{
        let domination = await db.dominationLevels.findFirst({
            where:{
                id: parseInt(dominationId)
            }
        })
        if(!domination){
            data.errors.dominationId = "Enter a valid domination id please!"
        }
    }

    if(!percentage){
        data.errors.percentage = "Enter the percentage determiation value, please!"
    }else if(!isNumber(percentage)){
        data.errors.percentage = "Enter a numeric percentage value, please!"
    }else if(parseInt(percentage) < 0 && parseInt(percentage) > 100){
        data.errors.percentage = "Enter a value between 0 ~ 100 as the percentage determiation value, please!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteSkill = async(req, res, next) => {
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
    try {
        let Result = await db.userSkills.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// Languages ======================================================

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
    try {
        let Result = await db.userLanguages.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createLanguage = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {languageId, levelId, certificateId, percentage} = req.body

    if(!languageId || !isNumber(languageId)){
        data.errors.languageId = "Enter a valid language ID, please!"
    }else{
        let LanguageExists = await db.languages.findFirst({
            where:{
                id: parseInt(languageId),
            }
        })
        if(!LanguageExists){
            data.errors.languageId = "Language not found!"
        }else{
            let Language = await db.userLanguages.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    userId: req.user.id,
                }
            })
            if(Language){
                data.errors.languageId = "You aleady have this Language in your resume!"
            }
        }
    }

    if(!levelId || !isNumber(levelId)){
        data.errors.levelId = "Enter a valid language level ID, please!"
    }else{
        let LevelExists = await db.languageLevels.findFirst({
            where:{
                id: parseInt(levelId),
            }
        })
        if(!LevelExists){
            data.errors.levelId = "Language lavel not found!"
        }
    }

    if(!certificateId || !isNumber(certificateId)){
        data.errors.certificateId = "Enter a valid certificate level ID, please!"
    }else{
        let CertificateExists = await db.languageCertificates.findFirst({
            where:{
                id: parseInt(certificateId),
            }
        })
        if(!CertificateExists){
            data.errors.certificateId = "Language certificate not found!"
        }
    }

    if(!percentage){
        data.errors.percentage = "Enter the percentage determiation value, please!"
    }else if(!isNumber(percentage)){
        data.errors.percentage = "Enter a numeric percentage value, please!"
    }else if(parseInt(percentage) < 0 && parseInt(percentage) > 100){
        data.errors.percentage = "Enter a value between 0 ~ 100 as the percentage determiation value, please!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editLanguage = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {languageId, certificateId, levelId, percentage} = req.body

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Language ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Language ID please!"})
    }

    try {
        let Language = await db.userLanguages.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Language){
            return res.json({status: -1, title: "Sorry!", error: "Language not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if(!languageId || !isNumber(languageId)){
        data.errors.title = "Enter a valid language ID, please!"
    }
    else{
        let LanguageExists = await db.languages.findFirst({
            where:{
                id: parseInt(languageId),
            }
        })
        if(!LanguageExists){
            data.errors.title = "Language not found!"
        }else{
            let userLanguage = await db.userLanguages.findFirst({
                where:{
                    languageId: parseInt(languageId),
                    userId: req.user.id,
                    NOT:[
                        {
                            id: parseInt(id)
                        }
                    ]
                }
            })
            if(userLanguage){
                data.errors.title = "You already have this Language in your resume!"
            }
        }
    }

    if(!levelId || !isNumber(levelId)){
        data.errors.levelId = "Enter a valid language level ID, please!"
    }else{
        let LevelExists = await db.languageLevels.findFirst({
            where:{
                id: parseInt(levelId),
            }
        })
        if(!LevelExists){
            data.errors.levelId = "Language lavel not found!"
        }
    }

    if(!certificateId || !isNumber(certificateId)){
        data.errors.certificateId = "Enter a valid certificate level ID, please!"
    }else{
        let CertificateExists = await db.languageCertificates.findFirst({
            where:{
                id: parseInt(certificateId),
            }
        })
        if(!CertificateExists){
            data.errors.certificateId = "Language certificate not found!"
        }
    }

    if(!percentage){
        data.errors.percentage = "Enter the percentage determiation value, please!"
    }else if(!isNumber(percentage)){
        data.errors.percentage = "Enter a numeric percentage value, please!"
    }else if(parseInt(percentage) < 0 && parseInt(percentage) > 100){
        data.errors.percentage = "Enter a value between 0 ~ 100 as the percentage determiation value, please!"
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
    try {
        let Result = await db.userLanguages.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// Expertises ======================================================

exports.viewAllExpertises = async(req, res, next) => {
    next()
}

exports.viewOneExpertise = async(req, res, next) => {
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
    try {
        let Result = await db.userExpertises.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createExpertise = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title, dominationId, percentage} = req.body

    if(!title){
        data.errors.title = "Enter a title for the Expertise, please!"
    }else{
        let Expertise = await db.userExpertises.findFirst({
            where:{
                title,
                userId: req.user.id,
            }
        })
        if(Expertise){
            data.errors.title = "You aleady have this Expertise in your resume!"
        }
    }

    if(!dominationId){
        data.errors.dominationId = "Enter the domination id please!"
    }
    else if(!isNumber(dominationId)){
        data.errors.dominationId = "Enter a numeric value for the domination id please!"
    }
    else{
        let domination = await db.dominationLevels.findFirst({
            where:{
                id: parseInt(dominationId)
            }
        })
        if(!domination){
            data.errors.dominationId = "Enter a valid domination id please!"
        }
    }

    if(!percentage){
        data.errors.percentage = "Enter the percentage determiation value, please!"
    }else if(!isNumber(percentage)){
        data.errors.percentage = "Enter a numeric percentage value, please!"
    }else if(parseInt(percentage) < 0 && parseInt(percentage) > 100){
        data.errors.percentage = "Enter a value between 0 ~ 100 as the percentage determiation value, please!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editExpertise = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title, dominationId, percentage} = req.body

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Expertise ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Expertise ID please!"})
    }

    try {
        let Expertise = await db.userExpertises.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Expertise){
            return res.json({status: -1, title: "Sorry!", error: "Expertise not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = "Enter a title for the Expertise, please!"
    }
    else{
        let userExpertise = await db.userExpertises.findFirst({
            where:{
                title,
                userId: req.user.id,
                NOT:[
                    {
                        id: parseInt(id)
                    }
                ]
            }
        })
        if(userExpertise){
            data.errors.title = "You already have this Expertise in your resume!"
        }
    }

    if(!dominationId){
        data.errors.dominationId = "Enter the domination id please!"
    }
    else if(!isNumber(dominationId)){
        data.errors.dominationId = "Enter a numeric value for the domination id please!"
    }
    else{
        let domination = await db.dominationLevels.findFirst({
            where:{
                id: parseInt(dominationId)
            }
        })
        if(!domination){
            data.errors.dominationId = "Enter a valid domination id please!"
        }
    }

    if(!percentage){
        data.errors.percentage = "Enter the percentage determiation value, please!"
    }else if(!isNumber(percentage)){
        data.errors.percentage = "Enter a numeric percentage value, please!"
    }else if(parseInt(percentage) < 0 && parseInt(percentage) > 100){
        data.errors.percentage = "Enter a value between 0 ~ 100 as the percentage determiation value, please!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteExpertise = async(req, res, next) => {
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
    try {
        let Result = await db.userExpertises.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// Portfolios ======================================================

exports.viewAllPortfolios = async(req, res, next) => {
    next()
}

exports.viewOnePortfolio = async(req, res, next) => {
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
    try {
        let Result = await db.userPortfolios.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createPortfolio = async(req, res, next) => {

    let Portfolio;
    let imageIds = [];
    let data = {status: 0, errors: {}}
    const form = formidable({ multiples: true });
    form.parse(req,async function (err, fields, files) {
        let {title, link, videoLink} = fields;

        if(!title){
            data.errors.title = "Enter a title for the portfolio, please!"
        }else{
            Portfolio = await db.userPortfolios.findFirst({
                where:{
                    title,
                    userId: req.user.id,
                }
            })
            if(Portfolio){
                data.errors.title = "You aleady have this Portfolio in your resume!"
            }
        }

        // if(!link){
        //     data.errors.link = "Enter a link for the portfolio, please!"
        // }

        // if(!videoLink){
        //     data.errors.videoLink = "Enter a video link for the portfolio, please!"
        // }
        if (size(data.errors)) {
            return res.json(data)
        }

        if(files){
            data.status = 1
            if(isArray(files.images)){
                // for(let i=0; i<files.images.length; i++){
                //     if(files.images[i].size > 2000000){
                //         data.errors.images = `Image ${i+1} can't be larger than 2MB`
                //     }
                // }
                // if (size(data.errors)) {
                //     return res.json(data)
                // }
                for(let i=0; i<files.images.length; i++){
                    let pic = fs.createReadStream(files.images[i].filepath)
                    let data = new FormData()
                    data.append("file", pic)
    
                    await axios({
                        method: "post",
                        url: process.env.CFLARE_ENDPOINT,
                        headers: {
                        Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                        ...data.getHeaders(),
                        },
                        data,
                    }).then(response => {
                        imageIds.push(response.data.result.id)
                    }).catch(err => {
                        return res.json({status: -1, message: error})
                    })
                }
            }
            else if(size(files.images)){
                // if(files.images.size > 2000000){
                //     data.errors.images = `Image can't be larger than 2MB`
                // }
                let pic = fs.createReadStream(files.images.filepath)
                let data = new FormData()
                data.append("file", pic)
    
                await axios({
                    method: "post",
                    url: process.env.CFLARE_ENDPOINT,
                    headers: {
                    Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                    ...data.getHeaders(),
                    },
                    data,
                }).then(response => {
                    imageIds.push(response.data.result.id)
                }).catch(error => {
                    return res.json({status: 1, error: error})
                })
            }
        }

        else if (size(data.errors)) {
            return res.json(data)
        }

        req.fields = fields;
        req.imageIds = imageIds;
        next()
    })

}

exports.editPortfolio = async(req, res, next) => {

    let Portfolio;
    const {id} = req.params

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Portfolio ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Portfolio ID please!"})
    }

    try {
        Portfolio = await db.userPortfolios.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Portfolio){
            return res.json({status: -1, title: "Sorry!", error: "Portfolio not found!"})
        }else{
            req.portfolio = Portfolio
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }


    let imageIds = [];
    let myData = {status: 0, errors: {}}
    const form = formidable({ multiples: true });
    form.parse(req,async function (err, fields, files) {
        let {title, link, videoLink} = fields;

        if(!title){
            myData.errors.title = "Enter a title for the portfolio, please!"
        }else{
            let Portfolio = await db.userPortfolios.findFirst({
                where:{
                    NOT:[{
                        id: parseInt(id)
                    }],
                    title,
                    userId: req.user.id,
                }
            })
            if(Portfolio){
                myData.errors.title = "You aleady have this Portfolio in your resume!"
            }
        }

        // if(!link){
        //     myData.errors.link = "Enter a link for the portfolio, please!"
        // }

        // if(!videoLink){
        //     myData.errors.videoLink = "Enter a video link for the portfolio, please!"
        // }

        if (size(myData.errors)) {
            return res.json(myData)
        }

        if(files){
            myData.status = 1
            if(isArray(files.images)){
                for(let i=0; i<files.images.length; i++){
                    let ext = files.images[i].mimetype.split("/")[1]
                    if(ext !== "jpeg" && ext !== "jpg" && ext !== "png" && ext !== "webp"){
                        myData.errors.images = "Supported formats are jpg, jpeg, png"
                    }
                }
                if (size(myData.errors)) {
                    return res.json(myData)
                }
                for(let i=0; i<files.images.length; i++){
                    let pic = fs.createReadStream(files.images[i].filepath)
                    let data = new FormData()
                    data.append("file", pic)
    
                    await axios({
                        method: "post",
                        url: process.env.CFLARE_ENDPOINT,
                        headers: {
                        Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                        ...data.getHeaders(),
                        },
                        data,
                    }).then(response => {
                        imageIds.push(response.data.result.id)
                    }).catch(error => {
                        return res.json({status: -1, message: error.message})
                    })
                }
            }
            else if(size(files.images)){
                // if(files.images.size > 2000000){
                //     myData.errors.images = `Image can't be larger than 2MB`
                // }
                let ext = files.images.mimetype.split("/")[1]
                if(ext !== "jpeg" && ext !== "jpg" && ext !== "png" && ext !== "webp"){
                    return res.json({status: -1, error: "Supported formats are jpg, jpeg, png"})
                }
                let pic = fs.createReadStream(files.images.filepath)
                let data = new FormData()
                data.append("file", pic)
    
                await axios({
                    method: "post",
                    url: process.env.CFLARE_ENDPOINT,
                    headers: {
                    Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                    ...data.getHeaders(),
                    },
                    data,
                }).then(response => {
                    imageIds.push(response.data.result.id)
                }).catch(error => {
                    return res.json({status: -1, message: error.message})
                })
            }
        }



        if (size(myData.errors)) {
            return res.json(myData)
        }

        req.fields = fields;
        req.imageIds = imageIds;
        req.oldImageIds = Portfolio.imageIds;
        next()
    })

}

exports.deletePortfolio = async(req, res, next) => {
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
    try {
        let Result = await db.userPortfolios.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
            return res.json({
                status: -1, 
                error: await toast("Not found", req.user.languageId)
            })
        }
        req.portfolio = Result
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
    next()
}

exports.delimage = async(req, res, next) => {

    const {id, imageId} = req.params

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Portfolio ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Portfolio ID please!"})
    }

    try {
        let Portfolio = await db.userPortfolios.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Portfolio){
            return res.json({status: -1, title: "Sorry!", error: "Portfolio not found!"})
        }
        let ImageExists = await db.userPortfolios.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id,
                imageIds:{
                    has: imageId
                }
            }
        })
        if(!ImageExists){
            return res.json({status: -1, title: "Sorry!", error: "The image is not belong to this Portfolio!"})
        }
        req.portfolio = Portfolio;
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    next()
}

exports.addimage = async(req, res, next) => {
    
    const {id} = req.params

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Portfolio ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Portfolio ID please!"})
    }

    try {
        let Portfolio = await db.userPortfolios.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Portfolio){
            return res.json({status: -1, title: "Sorry!", error: "Portfolio not found!"})
        }else{
            req.portfolio = Portfolio
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
    
    const form = formidable({ multiples: true });
    form.parse(req,async function (err, fields, files) {
        let pic = fs.createReadStream(files.image.filepath)
        let data = new FormData()
        data.append("file", pic)
        await axios({
            method: "post",
            url: process.env.CFLARE_ENDPOINT,
            headers: {
            Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
            ...data.getHeaders(),
            },
            data,
        }).then(response => {
            req.imageId = response.data.result.id
        }).catch(error => {
            return res.json({status: -1, error: error})
        })
        next()
    })
}


// Extra Activities ======================================================

exports.viewAllExtraActivities = async(req, res, next) => {

    next()
}

exports.viewOneExtraActivity = async(req, res, next) => {
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
    try {
        let Result = await db.userExtraActivities.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createExtraActivity = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    let {title, fromDate, toDate, present, institute, description} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))
    let {country, state, city} = req.body

    if(!title){
        data.errors.title = "Enter a title for the Extra Activity, please!"
    }else{
        let ExtraActivity = await db.userExtraActivities.findFirst({
            where:{
                title,
                userId: req.user.id,
            }
        })
        if(ExtraActivity){
            data.errors.title = "You aleady have this Extra Activity in your resume!"
        }
    }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!institute){
        data.errors.institute = "Enter the institute name, please!"
    }

    if(country){

        if(!city){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: country
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.countryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                slug: slugify(city.toLowerCase(), '-')
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: city,
                    slug: slugify(city.toLowerCase(), '-')
                }
            })
        }
        req.cityId = City.id;

    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editExtraActivity = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    let {title, fromDate, toDate, present, institute, description} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))
    let {country, state, city} = req.body

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Extra Activity ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Extra Activity ID please!"})
    }

    try {
        let ExtraActivity = await db.userExtraActivities.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!ExtraActivity){
            return res.json({status: -1, title: "Sorry!", error: "Extra Activity not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = "Enter a title for the Extra Activity, please!"
    }else{
        let ExtraActivity = await db.userExtraActivities.findFirst({
            where:{
                NOT:[{
                    id: parseInt(id)
                }],
                title,
                userId: req.user.id,
            }
        })
        if(ExtraActivity){
            data.errors.title = "You aleady have this Extra Activity in your resume!"
        }
    }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!institute){
        data.errors.institute = "Enter the institute name, please!"
    }

    if(country){

        if(!city){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: country
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.countryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                slug: slugify(city.toLowerCase(), '-')
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: city,
                    slug: slugify(city.toLowerCase(), '-')
                }
            })
        }
        req.cityId = City.id;

    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteExtraActivity = async(req, res, next) => {
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
    try {
        let Result = await db.userExtraActivities.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// Interships ======================================================

exports.viewAllInterships = async(req, res, next) => {

    next()
}

exports.viewOneIntership = async(req, res, next) => {
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
    try {
        let Result = await db.userInterships.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createIntership = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    let {title, fromDate, toDate, present, employer} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))
    let {country, state, city} = req.body

    if(!title){
        data.errors.title = "Enter a title for the Intership, please!"
    }else{
        let Intership = await db.userInterships.findFirst({
            where:{
                title,
                userId: req.user.id,
            }
        })
        if(Intership){
            data.errors.title = "You aleady have this Intership in your resume!"
        }
    }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!employer){
        data.errors.employer = "Enter the employer name, please!"
    }

    if(country){

        if(!city){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: country
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.countryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                slug: slugify(city.toLowerCase(), '-')
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: city,
                    slug: slugify(city.toLowerCase(), '-')
                }
            })
        }
        req.cityId = City.id;

    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editIntership = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    let {title, fromDate, toDate, present, employer} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))
    let {country, state, city} = req.body

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Intership ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Intership ID please!"})
    }

    try {
        let Intership = await db.userInterships.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Intership){
            return res.json({status: -1, title: "Sorry!", error: "Intership not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = "Enter a title for the Intership, please!"
    }else{
        let Intership = await db.userInterships.findFirst({
            where:{
                NOT:[{
                    id: parseInt(id)
                }],
                title,
                userId: req.user.id,
            }
        })
        if(Intership){
            data.errors.title = "You aleady have this Intership in your resume!"
        }
    }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!employer){
        data.errors.employer = "Enter the employer name, please!"
    }

    if(country){

        if(!city){
            data.errors.location = 'Enter a full address please! (an address with a country and a city)';
        }

        if (size(data.errors)) {
            return res.json(data)
        }
        
        let Country, City;

        Country = await db.countries.findFirst({
            where:{
                title: country
            }
        })
        if(!Country){
            data.errors.birthPlace = "Country not found!"
        }
        if (size(data.errors)) {
            return res.json(data)
        }
        req.countryId = Country.id;

        City = await db.cities.findFirst({
            where:{
                slug: slugify(city.toLowerCase(), '-')
            }
        })
        if(!City){
            City = await db.cities.create({
                data:{
                    title: city,
                    slug: slugify(city.toLowerCase(), '-')
                }
            })
        }
        req.cityId = City.id;

    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteIntership = async(req, res, next) => {
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
    try {
        let Result = await db.userInterships.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// References ======================================================

exports.viewAllReferences = async(req, res, next) => {

    next()
}

exports.viewOneReference = async(req, res, next) => {
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
    try {
        let Result = await db.userReferences.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createReference = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {fullName, company, phone, email} = req.body

    if(!fullName){
        data.errors.fullName = "Enter a full name for the Reference, please!"
    }else{
        let Reference = await db.userReferences.findFirst({
            where:{
                fullName,
                userId: req.user.id,
            }
        })
        if(Reference){
            data.errors.fullName = "You aleady have this Reference in your resume!"
        }
    }

    if(!company){
        data.errors.company = "Enter the company name, please!"
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
        //     data.errors.phone = "Make sure that you entered a valid international number"
        // }

    }

    if(!email || !isEmail.validate(email)){
        data.errors.email = "enter a valid email address, please!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editReference = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {fullName, company, phone, email} = req.body


    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Reference ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Reference ID please!"})
    }

    try {
        let Reference = await db.userReferences.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Reference){
            return res.json({status: -1, title: "Sorry!", error: "Reference not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
    
    if(!fullName){
        data.errors.fullName = "Enter a full name for the Reference, please!"
    }else{
        let Reference = await db.userReferences.findFirst({
            where:{
                NOT:[{
                    id: parseInt(id)
                }],
                fullName,
                userId: req.user.id,
            }
        })
        if(Reference){
            data.errors.fullName = "You aleady have this Reference in your resume!"
        }
    }

    if(!company){
        data.errors.company = "Enter the company name, please!"
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
        //     data.errors.phone = "Make sure that you entered a valid international number"
        // }

    }

    if(!email || !isEmail.validate(email)){
        data.errors.email = "enter a valid email address, please!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteReference = async(req, res, next) => {
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
    try {
        let Result = await db.userReferences.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// Awards ======================================================

exports.viewAllAwards = async(req, res, next) => {

    next()
}

exports.viewOneAward = async(req, res, next) => {
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
    try {
        let Result = await db.userAwards.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createAward = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {title, date, description} = req.body

    if(!title){
        data.errors.title = "Enter a title for the Award, please!"
    }else{
        let Award = await db.userAwards.findFirst({
            where:{
                title,
                userId: req.user.id,
            }
        })
        if(Award){
            data.errors.title = "You aleady have this Award in your resume!"
        }
    }

    if(!date || (date && !isDate(new Date(date)))){
        data.errors.date = "Enter a valid date, please!"
    }else if(new Date(date) > new Date()){
        data.errors.date = "The date, can not be in the future!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editAward = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {title, date, description} = req.body


    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Award ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Award ID please!"})
    }

    try {
        let Award = await db.userAwards.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Award){
            return res.json({status: -1, title: "Sorry!", error: "Award not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = "Enter a title for the Award, please!"
    }else{
        let Award = await db.userAwards.findFirst({
            where:{
                NOT:[{
                    id: parseInt(id)
                }],
                title,
                userId: req.user.id,
            }
        })
        if(Award){
            data.errors.title = "You aleady have this Award in your resume!"
        }
    }

    if(!date || (date && !isDate(new Date(date)))){
        data.errors.date = "Enter a valid date, please!"
    }else if(new Date(date) > new Date()){
        data.errors.date = "The date, can not be in the future!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteAward = async(req, res, next) => {
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
    try {
        let Result = await db.userAwards.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// Courses ======================================================

exports.viewAllCourses = async(req, res, next) => {

    next()
}

exports.viewOneCourse = async(req, res, next) => {
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
    try {
        let Result = await db.userCourses.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

exports.createCourse = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    let {title, fromDate, toDate, present, institute} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))

    if(!title){
        data.errors.title = "Enter a title for the Course, please!"
    }else{
        let Course = await db.userCourses.findFirst({
            where:{
                title,
                userId: req.user.id,
            }
        })
        if(Course){
            data.errors.title = "You aleady have this Course in your resume!"
        }
    }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!institute){
        data.errors.institute = "Enter the institute name, please!"
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.editCourse = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    let {title, fromDate, toDate, present, institute} = req.body
    let newFromDate = new Date(Math.floor(new Date(fromDate)))

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Course ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Course ID please!"})
    }

    try {
        let Course = await db.userCourses.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Course){
            return res.json({status: -1, title: "Sorry!", error: "Course not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if(!title){
        data.errors.title = "Enter a title for the Course, please!"
    }else{
        let Course = await db.userCourses.findFirst({
            where:{
                title,
                userId: req.user.id,
                NOT:[
                    {
                        id: parseInt(id)
                    }
                ]
            }
        })
        if(Course){
            data.errors.title = "You aleady have this Course in your resume!"
        }
    }

    if(!fromDate || (fromDate && !isDate(new Date(fromDate)))){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(newFromDate > new Date()){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }else if(!toDate || (toDate && !isDate(new Date(toDate)))){
        data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(toDate) > new Date()){
        toDate = new Date()
        // data.errors.toDate = await toast("End Date", req.user.languageId)
    }else if(new Date(fromDate) > new Date(toDate)){
        data.errors.fromDate = await toast("Start Date", req.user.languageId)
    }
    if(present && present !== true && present !== false){
        data.errors.present = await toast("Not Valid", req.user.languageId)
    }
    if(present === true){
        toDate = new Date()
    }

    if(!institute){
        data.errors.institute = "Enter the institute name, please!"
    }


    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.deleteCourse = async(req, res, next) => {
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
    try {
        let Result = await db.userCourses.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Result){
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

// CV ======================================================

exports.viewCV = async(req, res, next) => {
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
    try {
        let Result = await db.users.findFirst({
            where:{
                id: parseInt(id),
            }
        })
        if(!Result){
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

