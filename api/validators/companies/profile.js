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



exports.all = async(req, res, next) => {

    next()
}

exports.one = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Company ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Company ID please!"})
    }

    try {
        let Company = await db.userCompanies.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Company){
            return res.json({status: -1, title: "Sorry!", error: "Company not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    next()

}

exports.create = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const {name, industryId, phone, email, address, website, companySize, specialities} = req.body

    if(!name){
        data.errors.name = "Enter a name for the Company, please!"
    }else{
        let Company = await db.userCompanies.findFirst({
            where:{
                name: name.toLowerCase(),
                userId: req.user.id,
            }
        })
        if(Company){
            data.errors.name = "You aleady have a Company with the same name!"
        }
    }

    if(industryId && industryId !== 0){
        let industry = await db.industries.findFirst({
            where:{
                id: parseInt(industryId)
            }
        })
        if(!industry){
            data.errors.industryId = "Choose a valid industry please!"
        }
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
        //     // data.errors.phone = error.message
        //     // data.errors.phone = "The country code is invalid"
        //     data.errors.phone = "Make sure that you entered a valid international number"
        // }

    }

    if(email){
        if(!isEmail.validate(email)){
            data.errors.email = "enter a valid email address, please!"
        }
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.edit = async(req, res, next) => {

    const {id} = req.params
    let data = {status: 0, errors: {}}
    const {name, industryId, phone, email, address, website, companySize, specialities} = req.body

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Company ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Company ID please!"})
    }

    try {
        let Company = await db.userCompanies.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id,
            }
        })
        if(!Company){
            return res.json({status: -1, title: "Sorry!", error: "Company not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    if(!name){
        data.errors.name = "Enter a name for the Company, please!"
    }else{
        let Company = await db.userCompanies.findFirst({
            where:{
                name: name.toLowerCase(),
                userId: req.user.id,
                NOT:[
                    {
                        id: parseInt(id)
                    }
                ]
            }
        })
        if(Company){
            data.errors.name = "You aleady have a Company with the same name!"
        }
    }

    if(industryId && industryId !== 0){
        let industry = await db.industries.findFirst({
            where:{
                id: parseInt(industryId)
            }
        })
        if(!industry){
            data.errors.industryId = "Choose a valid industry please!"
        }
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
        //     // data.errors.phone = error.message
        //     // data.errors.phone = "The country code is invalid"
        //     data.errors.phone = "Make sure that you entered a valid international number"
        // }

    }

    if(email){
        if(!isEmail.validate(email)){
            data.errors.email = "enter a valid email address, please!"
        }
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.delete = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Company ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Company ID please!"})
    }

    try {
        let Company = await db.userCompanies.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            }
        })
        if(!Company){
            return res.json({status: -1, title: "Sorry!", error: "Company not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    next()

}
