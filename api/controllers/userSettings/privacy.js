const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const { toast } = require('../../utils/u_Toasts');



exports.viewAllPrivacy = async(req, res) => {

    const privacy = {
        showResumeToEmployers:  req.user.showResumeToEmployers,
        isProfilePublic:        req.user.isProfilePublic,
        yourSessions:           req.user.yourSessions,
    }

    return res.json({status: 1, privacy})

}

exports.editUserPrivacy = async(req, res) => {

    const {
        showResumeToEmployers, isProfilePublic, yourSessions
    } = req.body

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                showResumeToEmployers, isProfilePublic, yourSessions
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
