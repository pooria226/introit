const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const isEmail = require("email-validator")
const {isNumber} = require("../../utils/u_Is")


exports.forgotPassword = async(req, res, next) => {
    let data = {status:0, errors:{}}
    const {email} = req.body

    if(!email || !isEmail.validate(email)){
        data.errors.email = "enter a valid email address, please!"
    }

    if (_.size(data.errors)) {
        return res.json(data)
    }

    next()
}

exports.resetPassword = async(req, res, next) => {
    let data = {status:0, errors:{}}
    const {token, newPassword} = req.body

    if (!token) {
        return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more'})
    }

    jwt.verify( token, process.env.SECRET, async(err, decodedToken)=>{
        if(err){
            return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more'})
        }
        try {
            let User = await db.users.findFirst({
                where:{
                    email: decodedToken.email
                }
            })
            if(!User){
                return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more'})
            }
            if(decodedToken.status !== "forgot"){
                return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more'})
            }
            if(newPassword === null){
                data.errors.newPassword = "enter a new password, please!"
            }
            else if(newPassword.length < 8){
                data.errors.newPassword = "enter a new password of minimum 8 charachters, please!"
            }
        
            if (_.size(data.errors)) {
                return res.json(data)
            }
        
            req.email = User.email
            next()
        } catch (error) {
            console.log(error.message)
            return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more'})
        }
    })

}
