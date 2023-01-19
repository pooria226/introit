const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { size } = require("lodash")
const formidable = require("formidable");
const sizeOf = require('image-size')
const {isNumber} = require("../../utils/u_Is")
const {toast} = require("../../utils/u_Toasts")


exports.changeTheme = async(req, res, next) => {

    let {id} = req.body

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
        let Result = await db.themes.findUnique({
            where:{
                id: parseInt(id)
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

exports.changeTimezone = async(req, res, next) => {

    const {timezoneId} = req.body

    if(!timezoneId){
        return res.json({status: -1, error: "Select a proper timezone, please!"})
    }

    let TimezoneExists = await db.timezones.findFirst({
        where:{
            id: parseInt(timezoneId)
        }
    })

    if(!TimezoneExists){
        return res.json({status: -1, error: "Timezone not found!"})
    }

    req.timezone = TimezoneExists
    next()

}

exports.changeCurrency = async(req, res, next) => {

    const {currencyId} = req.body

    if(!currencyId){
        return res.json({status: -1, error: "Select a proper currency, please!"})
    }

    let CurrencyExists = await db.currencies.findFirst({
        where:{
            id: parseInt(currencyId)
        }
    })

    if(!CurrencyExists){
        return res.json({status: -1, error: "Currency not found!"})
    }

    req.currency = CurrencyExists
    next()

}

exports.changeLanguage = async(req, res, next) => {
    const {languageId} = req.body
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
    let Result = await db.languages.findFirst({
        where:{
            id: parseInt(languageId)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }
    next()
}

exports.changeGridview = async(req, res, next) => {

    const {defaultGridView, resultsPerPage} = req.body

    if(defaultGridView !== true && defaultGridView !== false){
        return res.json({status: -1, error: "Select a proper grid view, please!"})
    }
    if(!resultsPerPage){
        return res.json({status: -1, error: "Enter results per page, please!"})
    }
    if(isNumber(resultsPerPage) && resultsPerPage < 1){
        return res.json({status: -1, error: "Enter a positive numeric value for results per page, please!"})
    }

    next()

}
