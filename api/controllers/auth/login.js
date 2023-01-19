const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const speakeasy = require("speakeasy")
const {nanoid} = require("nanoid")
const {send_Activation_Mail, send_Recovery_Mail} = require("../../utils/u_Email")
const { toast } = require('../../utils/u_Toasts');


exports.login = async(req, res) => {

    if(!req.user){
        req.user = null
        req.session = null
        return res.json({status: -1, error: "Incorrect credentials, double check please!"})
    }

    if(!req.user.isLive){
        req.user = null
        req.session = null
        return res.json({status: -1, error: "Account not found!"})
    }

    let userStatus = await db.userStatus.findMany({
        where:{
            userId: req.user.id
        },
        orderBy:{
            createdAt: 'desc'
        },
        take: 1
    })

    if(userStatus[0] && userStatus[0].status !== 'normal' && userStatus[0].status !== 'approved'){
        req.user = null
        req.session = null
        return res.json({status: -1, error: `This account is ${userStatus[0].status}!`})
    }

    if(!req.user.isVerified){
        return res.json({status: -1, error: "This account is not activated yet!"})
    }
    
    let activateUser = await db.users.update({
        where:{
            email: req.user.email
        },
        data:{
            isActive: true
        }
    })

    if(req.user.provider === "local" && req.user.is2FA){
        req.user = null
        req.session = null
        return res.json({status: 2, error: "Enter your 2FA PIN code please!"})
    }

    if(req.user.loginMethod !== "local"){
        // return res.redirect('http://dev.techtalentshub.com/signup');
        return res.redirect(`${process.env.APP}/signup`)
    }else{
        return res.json({
            status: 1, 
            message: await toast("Logged in", req.user.languageId)
        })
    }
    
}

exports.login2FA = async(req, res) => {

    const {pin} = req.body

    if(!req.user){
        req.user = null
        req.session = null
        return res.json({status: -1, error: "Incorrect credentials, double check please!"})
    }

    if(!req.user.isLive){
        req.user = null
        req.session = null
        return res.json({status: -1, error: "Account not found!"})
    }

    let userStatus = await db.userStatus.findMany({
        where:{
            userId: req.user.id
        },
        orderBy:{
            createdAt: 'desc'
        },
        take: 1
    })

    if(userStatus[0] && userStatus[0].status !== 'normal' && userStatus[0].status !== 'approved'){
        req.user = null
        req.session = null
        return res.json({status: -1, error: `This account is ${userStatus[0].status}!`})
    }

    if(!req.user.isVerified){
        return res.json({status: -1, error: "This account is not activated yet!"})
    }
    
    let verified = speakeasy.totp.verify({
        secret: req.user.secret.base32,
        encoding: "base32",
        token: pin
    })

    if(!verified){
        req.user = null
        req.session = null
        return res.json({status: -1, error: "Your PIN is incorrect"})
    }

    let activateUser = await db.users.update({
        where:{
            email: req.user.email
        },
        data:{
            isActive: true
        }
    })

    if(req.user.loginMethod !== "local"){
        return res.redirect(`${process.env.APP}/profile`)
    }else{
        return res.json({
            status: 1, 
            message: await toast("Logged in", req.user.languageId)
        })
    }

}



