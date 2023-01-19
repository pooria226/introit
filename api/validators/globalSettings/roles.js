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
const {toast} = require("../../utils/u_Toasts")


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
    let Result = await db.roles.findFirst({
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
    req.role = Result
    next()

}

exports.isViewed = async(req, res, next) => {

    const roleId = req.role.id

    try {
        let Viewed = await db.roleViews.findFirst({
            where:{
                roleId,
                createdBy: req.user.id,
            },
        })
        
        if(!Viewed){
            req.isViewd = false
        }else{
            req.isViewd = true
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

exports.create = async(req, res, next) => {
    
    let data = {status: 0, errors: {}}
    const {title} = req.body

    if(!title){
        data.errors.title = await toast("Required", req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    let Result = await db.roles.findFirst({
        where:{
            title
        }
    })
    if(Result){
        data.errors.title = await toast("Already exists", req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.edit = async(req, res, next) => {
    
    let data = {status: 0, errors: {}}
    const {id} = req.params
    const {title} = req.body

    if(!title){
        data.errors.title = await toast("Required", req.user.languageId)
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.addMembers = async(req, res, next) => {
    
    let data = {status: 0, errors: {}}
    const {id} = req.params
    const {members} = req.body

    for(let i=0; i < members.length; i++){
        try {
            let isUser = await db.users.findFirst({
                where:{
                    id: parseInt(members[i])
                },
            })
            if(!isUser){
                data.errors.id = `User with id ${members[i]} not found!`
            }
        } catch (error) {
            console.log(error.message);
            return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
            })
        }
    }

    if (size(data.errors)) {
        return res.json(data)
    }

    next()

}

exports.delete = async(req, res, next) => {
    
    const {id} = req.params
    next()

}

exports.viewPermissions = async(req, res, next) => {

    const {id} = req.params
    next()
    
}

exports.createPermission = async(req, res, next) => {

    const {roleId, moduleId, permission, value} = req.body

    if(!roleId){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(roleId)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result = await db.roles.findFirst({
        where:{
            id: parseInt(roleId)
        }
    })
    if(!Result){
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }
    req.role = Result

    if(!moduleId){
        return res.json({
            status: -1, 
            error: await toast("Id is required", req.user.languageId)
        })
    }
    if(!isNumber(moduleId)){
        return res.json({
            status: -1, 
            error: await toast("Numeric id is required", req.user.languageId)
        })
    }
    let Result2 = await db.modules.findFirst({
        where:{
            id: parseInt(moduleId)
        }
    })
    if(!Result2){
        return res.json({
            status: -1, 
            error: await toast("Not found", req.user.languageId)
        })
    }
    req.module = Result2

    if(!permission){
        return res.json({
            status: -1, 
            error: await toast("Required", req.user.languageId)
        })
    }

    if(permission !== "invite" && permission !== "create" && permission !== "view" && permission !== "edit" && permission !== "delete" && permission !== "approve"){
        return res.json({status: -1, error: 'Enter a valid permission, please!'})
    }

    if(value !== true && value !== false){
        return res.json({status: -1, error: 'Enter a valid value, please!'})
    }
    
    next()
}