const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { size } = require("lodash")
const formidable = require("formidable");
const sizeOf = require('image-size')
const {isNumber} = require("../../utils/u_Is")
const {toast} = require("../../utils/u_Toasts")


exports.deactivate = async(req, res, next) => {

    const {
        showResumeToEmployers, isProfilePublic, yourSessions
    } = req.body

    if(showResumeToEmployers !== true && showResumeToEmployers !== false){
        return res.json({status: -1, error: "Enter a valid showResumeToEmployers!"})
    }
    if(isProfilePublic !== true && isProfilePublic !== false){
        return res.json({status: -1, error: "Enter a valid isProfilePublic!"})
    }
    if(yourSessions !== true && yourSessions !== false){
        return res.json({status: -1, error: "Enter a valid yourSessions!"})
    }
    
    next()

}

exports.delete = async(req, res, next) => {

    const {
        showResumeToEmployers, isProfilePublic, yourSessions
    } = req.body

    if(showResumeToEmployers !== true && showResumeToEmployers !== false){
        return res.json({status: -1, error: "Enter a valid showResumeToEmployers!"})
    }
    if(isProfilePublic !== true && isProfilePublic !== false){
        return res.json({status: -1, error: "Enter a valid isProfilePublic!"})
    }
    if(yourSessions !== true && yourSessions !== false){
        return res.json({status: -1, error: "Enter a valid yourSessions!"})
    }
    
    next()

}