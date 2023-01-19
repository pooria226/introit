const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const isEmail = require("email-validator")
const {isNumber} = require("../../utils/u_Is")


exports.login = async(req, res, next) => {

    let data = {status:0, errors:{}}
    const {email, password, remember_me} = req.body
    
    if(!email || !isEmail.validate(email)){
        data.errors.email = "enter a valid email address, please!"
    }
    if(!password || password.length < 8){
        data.errors.password = "enter a password of minimum 8 charachters, please!"
    }
    if(remember_me !== true && remember_me !== false){
        data.errors.remember_me = "Got incorrect value for remember me field"
    }

    if (_.size(data.errors)) {
        return res.json(data)
    }
    
    let user = await db.users.findFirst({
        where:{
            email
        }
    })

    if(!user || !user.isLive){
        data.errors.email = "email not found!"
    }

    if (_.size(data.errors)) {
        return res.json(data)
    }

    else if(user.password === null){
        return res.json({status: -1, error: `you need to signin with ${user.provider} first, then set a password`})
    }

    if(!(await bcrypt.compare(password, user.password))){
        return res.json({status: -1, error: "email/password is incorrect"})
    }

    let updUser = await db.users.update({
        where:{
            email
        },
        data:{
            isRememberMe: remember_me
        }
    })

    if(user.is2FA){
        return res.json({status: 2, error: "Enter your 2FA PIN code please"})
    }

    next()
}

exports.login2FA = async(req, res, next) => {

    let data = {status:0, errors:{}}
    const {email, password, remember_me, pin} = req.body
    
    if(!email || !isEmail.validate(email)){
        data.errors.email = "enter a valid email address, please!"
    }
    if(!password || password.length < 8){
        data.errors.password = "enter a password of minimum 8 charachters, please!"
    }
    if(remember_me !== true && remember_me !== false){
        data.errors.remember_me = "Got incorrect value for remember me field"
    }
    
    let user = await db.users.findUnique({
        where:{
            email
        }
    })

    if(!user || !user.isLive){
        data.errors.email = "no such email found, you may need to login with another way!"
    }

    if (_.size(data.errors)) {
        return res.json(data)
    }

    if(user.password === null){
        return res.json({status: -1, error: `you need to signin with ${user.provider} first, then set a password`})
    }

    if(!(await bcrypt.compare(password, user.password))){
        return res.json({status: -1, error: "email/password is incorrect"})
    }

    if(user.is2FA === false){
        return res.json({status: -1, error: "you need to use the regular login method"})
    }

    if(!pin){
        return res.json({status: -1, error: "Enter your 2FA PIN code please!"})
    }

    if(!isNumber(pin)){
        return res.json({status: -1, error: "Enter a valid 2FA PIN code please!"})
    }

    let updUser = await db.users.update({
        where:{
            email
        },
        data:{
            isRememberMe: remember_me
        }
    })

    next()
}
