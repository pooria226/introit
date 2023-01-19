const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { size } = require("lodash")
const formidable = require("formidable");
const sizeOf = require('image-size')
const {isNumber} = require("../../utils/u_Is")
const {toast} = require("../../utils/u_Toasts")



exports.view = async(req, res, next) => {

    next()

}

exports.edit = async(req, res, next) => {

    const {firstName, lastName, email, phone, profileImage, dateOfBirth, country, address, jobTitle, nationality, academicLevel, industry, currency, aboutMe, education, experience, skills, languages, expertise, portfolio, extraCurriculam, courses, interships, references, hobbies, additionalInfo, publications, awards} = req.body

    // if(!firstName || !lastName || !email || !phone || !profileImage || !dateOfBirth || !country || !address || !jobTitle || !nationality || !academicLevel || !industry || !currency || !aboutMe || !education || !experience || !skills || !languages || !expertise || !portfolio || !extraCurriculam || !courses || !interships || !references || !hobbies || !additionalInfo || !publications || !awards){
    //     return res.json({status: -1, error: "Enter all values, please!"})
    // }

    if(!isNumber(firstName) || !isNumber(lastName) || !isNumber(email) || !isNumber(phone) || !isNumber(profileImage) || !isNumber(dateOfBirth) || !isNumber(country) || !isNumber(address) || !isNumber(jobTitle) || !isNumber(nationality) || !isNumber(academicLevel) || !isNumber(industry) || !isNumber(currency) || !isNumber(aboutMe) || !isNumber(education) || !isNumber(experience) || !isNumber(skills) || !isNumber(languages) || !isNumber(expertise) || !isNumber(portfolio) || !isNumber(extraCurriculam) || !isNumber(courses) || !isNumber(interships) || !isNumber(references) || !isNumber(hobbies) || !isNumber(additionalInfo) || !isNumber(publications) || !isNumber(awards)){
        return res.json({status: -1, error: "Enter all values in numeric formats, please!"})
    }

    let total = firstName + lastName + email + phone + profileImage + dateOfBirth + country + address + jobTitle + nationality + academicLevel + industry + currency + aboutMe + education + experience + skills + languages + expertise + portfolio + extraCurriculam + courses + interships + references + hobbies + additionalInfo + publications + awards

    if(total > 100){
        return res.json({status: -1, error: "The total value exceeded the 100%"})
    }

    next()

}
