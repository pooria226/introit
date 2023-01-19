const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const slugify = require("slugify")
const passport = require("passport")
const jwt = require('jsonwebtoken')

exports.decoder = async(req, res, next) => {
    const {token} = req.params;
    if (!token) {
        return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more, need a new one?'})
    }
    else {
        jwt.verify( token, process.env.SECRET, async(err, decodedToken)=>{
            if(err){
                return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more, need a new one?'})
            }
            try {
                let User = await db.users.findFirst({
                    where:{
                        email: decodedToken.email
                    }
                })
                if(!User){
                    return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more, need a new one?'})
                }else{
                    req.email = User.email
                    req.status = decodedToken.status
                    req.isVerified = User.isVerified
                    next();
                }
            } catch (error) {
                console.log(error.message)
                return res.json({status: -1, title: "Sorry!", error: 'the link you provided is not valid any more, need a new one?'})
            }
        })
    }
}

exports.protected = async(req, res, next) => {

    if(!req.user || !req.user.isAcceptedTerms){
        return res.json({status: -1, error: "Login first, please!"})
    }

    next()

}

exports.needPermit = async(req, res, next) => {

    let menu   = req.path.split("/")[1]
    let module = req.path.split("/")[2]
    let action = req.path.split("/")[3]

    let menuExists = await db.menus.findFirst({
        where:{
            slug: menu
        }
    })


    if(!menuExists){
        return res.json({status: -1, error: "menu not found!"})
    }

    let moduleExists = await db.modules.findFirst({
        where:{
            slug: module,
            menuId: menuExists.id
        }
    })

    if(!moduleExists){
        return res.json({status: -1, error: "module not found!"})
    }

    let rolePermissions = await db.permissions.findFirst({
        where:{
            actorType:{
                title: 'Role'
            },
            actorId:     req.user.roleId,
            moduleId:    moduleExists.id,
            [action]:    true
        }
    })

    if(!rolePermissions){
        return res.json({status: -1, error: "Your role is not authorized to access this module!"})
    }

    let userPermissions = await db.permissions.findFirst({
        where:{
            actorType:{
                title: 'User'
            },
            actorId:     req.user.id,
            moduleId:    moduleExists.id,
            [action]:    false
        }
    })

    console.log(104, userPermissions)
    if(userPermissions){
        return res.json({status: -1, error: "You are not authorized to access this module!"})
    }

    next()

}

exports.hasPermit = async(editor, menu, module, action) => {

    let menuExists = await db.menus.findFirst({
        where:{
            title: menu
        }
    })

    if(!menuExists){
        return false
    }

    let moduleExists = await db.modules.findFirst({
        where:{
            title: module,
            menuId: menuExists.id
        }
    })

    if(!moduleExists){
        return false
    }

    let rolePermissions = await db.permissions.findFirst({
        where:{
            actorType:{
                title: 'Role'
            },
            actorId:     editor.role.id,
            moduleId:    moduleExists.id,
            [action]:    true
        }
    })

    if(!rolePermissions){
        return false
    }

    let userPermissions = await db.Permissions.findFirst({
        where:{
            actorType:{
                title: 'User'
            },
            actorId:     editor.id,
            moduleId:    moduleExists.id,
            [action]:    false
        }
    })

    if(userPermissions){
        return false
    }

}
