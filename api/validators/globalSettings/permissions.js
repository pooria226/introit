const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
const sizeOf = require('image-size')
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
const isUrl = require("is-url")
const { toast } = require('../../utils/u_Toasts');


exports.all = async(req, res, next) => {
    next()
}

exports.one = async(req, res, next) => {
    
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
    let Result = await db.permissions.findFirst({
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
    
    next()

}

exports.delete = async(req, res, next) => {
    
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
    let Result = await db.permissions.findFirst({
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
    
    next()

}

