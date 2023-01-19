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
    let Result = await db.modules.findFirst({
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

exports.create = async(req, res, next) => {
    
    let data = {status: 0, errors: {}}
    const {title, sort} = req.body

    if(!title){
        data.errors.title= await toast("Required", req.user.languageId)
    }
    if(!sort){
        data.errors.sort= await toast("Required", req.user.languageId)
    }
    if(!isNumber(sort)){
        data.errors.sort= await toast("Numeric", req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    try {
        let Result = await db.modules.findFirst({
            where:{
                title
            }
        })
        if(Result){
            data.errors.title = await toast("Already exists", req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.edit = async(req, res, next) => {
    
    let data = {status: 0, errors: {}}
    const {id} = req.params
    const {title, sort} = req.body

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric", req.user.languageId)
        })
    }
    if(!title){
        data.errors.title= await toast("Required", req.user.languageId)
    }
    if(!sort){
        data.errors.sort= await toast("Required", req.user.languageId)
    }
    if(!isNumber(sort)){
        data.errors.sort= await toast("Numeric", req.user.languageId)
    }
    if (size(data.errors)) {
        return res.json(data)
    }
    try {
        let Result = await db.modules.findFirst({
            where:{
                title
            }
        })
        if(Result){
            data.errors.title = await toast("Already exists", req.user.languageId)
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.delete = async(req, res, next) => {
    
    let data = {status: 0, errors: {}}
    const {id} = req.params

    if(!id){
        return res.json({
            status: -1, 
            error: await toast("Required", req.user.languageId)
        })
    }
    if(!isNumber(id)){
        return res.json({
            status: -1, 
            error: await toast("Numeric", req.user.languageId)
        })
    }
    let Result = await db.modules.findFirst({
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