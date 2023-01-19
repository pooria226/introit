const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const _ = require("lodash")
const FormData = require("form-data");
const {copyPermissions} = require("../../utils/u_CopyUserPermissions");
const { toast } = require('../../utils/u_Toasts');



exports.all = async(req, res) => {

    try {
        let roles = await db.roles.findMany({
            where:{
                isLive: true,
            },
            select:{
                id: true,
                title: true,
                isDefault: true,
                users: true,
            },
            orderBy:{
                title: 'asc'
            }
        })

        for(i=0; i<roles.length; i++){

            let role = roles[i]

            let Like = await db.roleLikes.findFirst({
                where:{
                    roleId: role.id,
                    createdBy: req.user.id,
                },
            })

            role.isLiked = Like ? Like.like : false

            role.status = 'normal'

            let isViewed = await db.roleViews.findFirst({
                where:{
                    roleId: role.id,
                    createdBy: req.user.id,
                },
            })
            
            if(isViewed){
                role.status = 'viewed'
            }
            
            let Status = await db.roleStatus.findMany({
                where:{
                    roleId: role.id
                },
                orderBy:{
                    createdAt: "desc"
                },
                take: 1
            })
    
            if(Status[0]){
                role.status = Status[0].status
            }

        }

        roles.forEach(role => {
            role.members = role.users.length
        })

        roles.forEach(role => {
            role.users = undefined
        })

        return res.json({status: 1, roles})

    } catch (err) {
        console.log(err.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.one = async(req, res) => {

    const {id, skip, take} = req.params

    try {
        let roleMembers = await db.roles.findFirst({
            where:{
                id: parseInt(id)
            },
            select:{
                users: true
            }
        })

        let role = await db.roles.findFirst({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                isDefault: true,
                users: {
                    select:{
                        id: true,
                        isLive: true,
                        avatar: true,
                        givenName: true,
                        familyName: true,
                        jobTitle: true,
                        minSalary: true,
                        maxSalary: true,
                        industry:{
                            select:{
                                id: true,
                                title: true,
                            }
                        },
                        residentCountry:{
                            select:{
                                id: true,
                                title: true,
                                code: true,
                                prefix: true,
                                flagId: true,
                            }
                        },
                        userLanguages:{
                            select:{
                                id: true,
                                language:{
                                    select:{
                                        id: true,
                                        title: true,
                                    }
                                }
                            }
                        },
                        userSocials:{
                            select:{
                                id: true,
                                username: true,
                                social:{
                                    select:{
                                        id: true,
                                        website: true,
                                        icon_id: true,
                                        title: true,
                                    }
                                }
                            }
                        }
                    },
                    orderBy:{
                        createdAt: 'asc'
                    }
                }
            },
            orderBy:{
                title: 'asc'
            }
        })

        if(!req.isViewd){
            let View = await db.roleViews.create({
                data:{
                    createdBy: req.user.id,
                    roleId: parseInt(id)
                }
            })
        }

        role.status = 'viewed'

        let Status = await db.roleStatus.findMany({
            where:{
                roleId: parseInt(id)
            },
            orderBy:{
                createdAt: "desc"
            },
            take: 1
        })

        if(Status[0] && Status[0].status !== 'normal'){
            role.status = Status[0].status
        }

        for(i=0; i<role.users.length; i++){

            let user = role.users[i]
            let socials = []
            user.socials = socials
            user.userSocials.forEach(social => {
                user.socials.push({
                    id:   social.id,
                    link: `https://${social.social.website}/${social.username}`,
                    icon:  `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`,
                })
            })

            let Like = await db.userLikes.findFirst({
                where:{
                    userId: user.id,
                    createdBy: req.user.id,
                },
            })

            user.isLiked = Like ? Like.like : false

            user.status = 'normal'

            let isViewed = await db.userViews.findFirst({
                where:{
                    userId: user.id,
                    createdBy: req.user.id,
                },
            })
            
            if(isViewed){
                user.status = 'viewed'
            }
            
            let Status = await db.userStatus.findMany({
                where:{
                    userId: user.id
                },
                orderBy:{
                    createdAt: "desc"
                },
                take: 1
            })
    
            if(Status[0]){
                user.status = Status[0].status
            }

            if(user.country){
                user.country.flag = `${process.env.CFLARE_IMG_URL}/${user.country.flagId}/icon`;
            }

            if(user.country){
                user.country.flagId = undefined;
            }

            user.userSocials = undefined;

        }

        return res.json({
            status: 1, 
            role,
            members:{
                results: roleMembers.users.length,
                pages:   roleMembers.users.length === 0 ? 0 : Math.ceil(roleMembers.users.length / parseInt(take)), 
            }
        })
    
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.notmembers = async(req, res) => {

    const {id} = req.params

    try {

        // let AllUsers = await db.users.findMany({
        //     where:{
        //         isLive: true,
        //         isActive: true,
        //         NOT:[
        //             {
        //                 roleId: parseInt(id)
        //             }
        //         ]
        //     }
        // })

        let users = await db.users.findMany({
            where:{
                isLive: true,
                isActive: true,
                NOT:[
                    {
                        roleId: parseInt(id)
                    }
                ]
            },
            select:{
                id: true,
                isLive: true,
                avatar: true,
                givenName: true,
                familyName: true,
                jobTitle: true,
                minSalary: true,
                maxSalary: true,
                industry:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                residentCountry:{
                    select:{
                        id: true,
                        title: true,
                        code: true,
                        prefix: true,
                        flagId: true,
                    }
                },
                userLanguages:{
                    select:{
                        id: true,
                        language:{
                            select:{
                                id: true,
                                title: true
                            }
                        }
                    }
                },
                userSocials:{
                    select:{
                        id: true,
                        username: true,
                        social:{
                            select:{
                                id: true,
                                website: true,
                                icon_id: true,
                                title: true,
                            }
                        }
                    }
                }
            },
            orderBy:{
                createdAt: 'asc'
            }
        })

        for(i=0; i<users.length; i++){

            let user = users[i]
            let socials = []
            user.socials = socials
            user.userSocials.forEach(social => {
                user.socials.push({
                    id:   social.id,
                    link: `https://${social.social.website}/${social.username}`,
                    icon:  `${process.env.CFLARE_IMG_URL}/${social.social.icon_id}/icon`,
                })
            })

            let Like = await db.userLikes.findFirst({
                where:{
                    userId: user.id,
                    createdBy: req.user.id,
                },
            })

            user.isLiked = Like ? Like.like : false

            user.status = 'normal'

            let isViewed = await db.userViews.findFirst({
                where:{
                    userId: user.id,
                    createdBy: req.user.id,
                },
            })
            
            if(isViewed){
                user.status = 'viewed'
            }
            
            let Status = await db.userStatus.findMany({
                where:{
                    userId: user.id
                },
                orderBy:{
                    createdAt: "desc"
                },
                take: 1
            })
    
            if(Status[0]){
                user.status = Status[0].status
            }

            if(user.country){
                user.country.flag = `${process.env.CFLARE_IMG_URL}/${user.country.flagId}/icon`;
            }

            if(user.country){
                user.country.flagId = undefined;
            }

            user.userSocials = undefined;

        }

        return res.json({
            status: 1, 
            // results: AllUsers.length,
            // pages: Math.ceil(AllUsers.length / parseInt(take)), 
            users
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.members = async(req, res) => {

    const {id} = req.params
    let members = []

    try {

        let users = await db.users.findMany({
            where:{
                roleId: parseInt(id)
            },
            select:{
                id:true
            },
            orderBy:{
                id: 'asc'
            }
        })

        for(let i = 0; i < users.length; i++){
            members.push(users[i].id)
        }

        return res.json({
            status: 1, 
            members
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }
}

exports.addMembers = async(req, res) => {

    const {id} = req.params
    const {members} = req.body

    try {
        
        members.forEach(async(userId) => {
            await db.users.updateMany({
                where:{
                    id: {
                        in: members
                    }
                },
                data:{
                    roleId: parseInt(id)
                }
            })
        })
        
        members.forEach(async(userId) => {
            await copyPermissions(userId, id)
        })

        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.setDefaultRole = async(req, res) => {

    const {id} = req.params

    try {

        await db.roles.updateMany({
            data:{
                isDefault: false
            }
        })

        let defaultRole = await db.roles.update({
            where:{
                id: parseInt(id)
            },
            data:{
                isDefault: true
            }
        })

        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.create = async(req, res) => {

    const {title} = req.body

    try {
        let role = await db.roles.create({
            data: {
                title
            },
        })

        let modules = await db.modules.findMany({
            select:{
                id: true
            }
        })

        modules.forEach(async(module) => {
            await db.permissions.createMany({
                data:{
                    invite: false,
                    approve: false,
                    create: false,
                    view: false,
                    edit: false,
                    delete: false,
                    actorId: role.id,
                    moduleId: module.id,
                    actorTypeId: 1,
                }
            })
        })

        return res.json({
            status: 1, 
            message: await toast("Created", req.user.languageId)
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.edit = async(req, res) => {

    const {id} = req.params
    const {title} = req.body

    try {
        let role = await db.roles.update({
            where:{
                id: parseInt(id)
            },
            data: {
                title
            },
        })

        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.delete = async(req, res) => {

    const {id} = req.params

    try {

        let role = await db.roles.delete({
            where:{
                id: parseInt(id)
            },
        })

        let delPermissions = await db.permissions.deleteMany({
            where:{
                actorType:{
                    title: 'Role'
                },
                actorId: parseInt(id)
            }
        })

        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.viewPermissions = async(req, res) => {

    const {id} = req.params

    try {
        let menus = await db.menus.findMany({
            select:{
                id:    true,
                title: true,
                sort:  true,
                modules:{
                    select:{
                        id:    true,
                        title: true,
                        sort:  true,
                        operations: true,
                        permissions:{
                            where:{
                                actorType:{
                                    title: 'Role'
                                },
                                actorId: parseInt(id)
                            },
                            select:{
                                id: true,
                                invite: true,
                                create: true,
                                view: true,
                                edit: true,
                                delete: true,
                                approve: true
                            }
                        }
                    },
                    orderBy:{
                        sort: 'asc'
                    }
                }
            },
            orderBy:{
                sort: 'asc'
            }
        })

        menus.forEach(menu => {
            menu.modules.forEach(module => {
                module.permissions.forEach(permission => {
                    module.operations.map(operation => {
                        if(operation === "invite")  permission.invite  = null;
                        if(operation === "create")  permission.create  = null;
                        if(operation === "view")    permission.view    = null;
                        if(operation === "edit")    permission.edit    = null;
                        if(operation === "delete")  permission.delete  = null;
                        if(operation === "approve") permission.approve = null;
                    })
                })
            })
        })

        // menus.forEach(menu => {
        //     menu.modules.forEach(module => {
        //         if(permissions.length){
        //             permissions.forEach(permission => {
        //                 if(permission.moduleId === module.id){
        //                     module.permissions = [
        //                         {
        //                             invite  : permission.invite,
        //                             create  : permission.create,
        //                             view    : permission.view,
        //                             edit    : permission.edit,
        //                             delete  : permission.delete,
        //                             approve : permission.approve,
        //                         }
        //                     ]
        //                 }
        //             })
        //         }
        //     })
        // })

        return res.json({status: 1, roleName: req.role.title, access: menus})

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.createPermission = async(req, res) => {

    const {roleId, moduleId, permission, value} = req.body

    try {
        let CurrentPermission = await db.permissions.findFirst({
            where:{
                actorType:{
                    title: 'Role',
                },
                actorId: parseInt(roleId),
                moduleId: parseInt(moduleId)
            }
        })
        if(CurrentPermission){
            let updPermission = await db.permissions.update({
                where:{
                    id: CurrentPermission.id
                },
                data:{
                    [permission]: value
                }
            })
            return res.json({
                status: 1, 
                message:await toast("Updated", req.user.languageId)
            })
        }else{
            let newAccess = await db.permissions.create({
                data:{
                    actorType:{
                        connect:{
                            title: 'Role'
                        }
                    },
                    actorId: parseInt(roleId),
                    module: {
                        connect:{
                            id: parseInt(moduleId)
                        }
                    },
                    [permission]: value
                }
            })
            return res.json({
                status: 1, 
                message:await toast("Created", req.user.languageId)
            })
        }

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}
