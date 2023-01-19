const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const { toast } = require('../../utils/u_Toasts');




exports.changeTheme = async(req, res) => {

    const {id} = req.body

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                themeId: parseInt(id)
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

exports.changeTimezone = async(req, res) => {

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                timezoneId: req.timezone.id
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

exports.changeCurrency = async(req, res) => {

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                currencyId: req.currency.id
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

exports.changeLanguage = async(req, res) => {

    const {languageId} = req.body

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                languageId: parseInt(languageId)
            }
        })
        return res.json({
            status: 1,
            message: await toast("Updated", parseInt(languageId))
        })
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.changeGridview = async(req, res) => {

    const {defaultGridView, resultsPerPage} = req.body

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                defaultGridView,
                resultsPerPage
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

exports.changeRole = async(req, res) => {

    try {
        let updUser = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                roleId: req.role.id
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
