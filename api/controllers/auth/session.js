const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const speakeasy = require("speakeasy")
const {nanoid} = require("nanoid")
const {send_Activation_Mail, send_Recovery_Mail} = require("../../utils/u_Email")
const { set } = require('lodash')
const { toast } = require('../../utils/u_Toasts');


exports.current = async(req, res) => {
    if (!req.user)
        return res.json({status: -1, error: "Login first, please!"})
    let User = await db.users.findFirst({
        where:{
            id: req.user.id
        },
        select:{
            id: true,
            email: true,
            provider: true,
            givenName: true,
            familyName: true,
            avatar: true,
            bannerId: true,
            dateOfBirth: true,
            phone: true,
            isVerified: true,
            is2FA: true,
            isSidebarMinimized: true,
            jobTitle: true,
            description: true,
            streetAddress: true,
            hobbies: true,
            additionalInfo: true,
            publications: true,
            latitude: true,
            longitude: true,
            isProfilePublic: true,
            showResumeToEmployers: true,
            defaultGridView: true,
            resultsPerPage: true,
            isAcceptedTerms: true,
            gender: {
                select:{
                    id: true,
                    title: true
                }
            },
            role: {
                select:{
                    id: true,
                    title: true
                }
            },
            theme: {
                select:{
                    id: true,
                    title: true
                }
            },
            language: {
                select:{
                    id: true,
                    title: true
                }
            },
            nationality: {
                select: {
                    id: true,
                    title: true
                }
            },
            industry: {
                select: {
                    id: true,
                    title: true
                }
            },
            currency: {
                select: {
                    id: true,
                    title: true
                }
            },
            timezone: {
                select: {
                    id: true,
                    title: true
                }
            },
            birthCountry: {
                select: {
                    id: true,
                    title: true
                }
            },
            birthCity: {
                select: {
                    id: true,
                    title: true
                }
            },
        }
    })

    let menus = await db.menus.findMany({
        where:{
            isLive: true
        },
        select: {
            id:   true,
            sort: true,
            slug: true,
            title:true,
            modules: {
                select: {
                    id:   true,
                    sort: true,
                    slug: true,
                    title:true,
                    permissions:{
                        where:{
                            OR:[
                                {
                                    AND: [
                                        {
                                            actorType: { title: 'Role' }
                                        },
                                        {
                                            actorId: req.user.roleId
                                        },
                                    ]
                                },
                                {
                                    AND: [
                                        {
                                            actorType: { title: 'User' }
                                        },
                                        {
                                            actorId: req.user.id
                                        },
                                    ]
                                }
                            ]
                        },
                        select:{
                            id: true,
                            actorId: true,
                            invite: true,
                            create: true,
                            view: true,
                            edit: true,
                            delete: true,
                            approve: true,
                            actorType:{
                                select:{
                                    id: true,
                                    title: true
                                }
                            }  
                        }
                    }
                }
            }
        }
    })

    let newMenus = []

    menus.forEach(menu => {
        let newMenu = {id: null, sort: null, title: null, slug: null, modules: []}
        menu.modules.forEach(modul => {
            let isAllowed = true
            modul.permissions.forEach(permission => {
                if(!permission.view){
                    isAllowed = false
                }
            })
            if(isAllowed && modul.permissions.length > 0){
                newMenu.id = menu.id;
                newMenu.sort = menu.sort;
                newMenu.title = menu.title;
                newMenu.slug = menu.slug;
                modul.permissions = undefined
                newMenu.modules.push(modul)
            }
        })
        if(newMenu.modules.length > 0){
            newMenus.push(newMenu)
        }
    })
    
    User.banner = User.bannerId === null ? null : `${process.env.CFLARE_IMG_URL}/${req.user.bannerId}/banner`,
    User.bannerId = undefined
    User.menus = newMenus

    return res.json({status: 1, user: User})

}

exports.logout = async(req, res) => {

    if(!req.user){
        return res.json({
            status: -1, 
            error: "Login first, please!"
        })
    }

    let message = await toast("Logged out", req.user.languageId)
    req.logout((e) => {
        console.log(e)
    })

    return res.json({
        status: 1, 
        message
    })

}

