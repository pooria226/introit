const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const { toast } = require('../../utils/u_Toasts');




exports.accountDeactivation = async(req, res) => {

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                isActive: false
            }
        })
        
        return res.json({
            status: 1, 
            message: await toast("Account deactivated", req.user.languageId)
        })
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.accountDelete = async(req, res) => {

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                isLive: false
            }
        })
        return res.json({
            status: 1, 
            message: await toast("Account deleted", req.user.languageId)
        })
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}