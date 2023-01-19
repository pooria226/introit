const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const { toast } = require('../../utils/u_Toasts');



exports.all = async(req, res) => {

    try {
        let permissions = await db.permissions.findMany({
            select:{
                id: true,
                actorType:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                actorId: true,
                moduleId: true,
                invite: true,
                create: true,
                view: true,
                edit: true,
                delete: true,
                approve: true,
            }
        })
        return res.json({status: 1, permissions})
        
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.one = async(req, res) => {

    const {id} = req.params

    try {
        let permission = await db.permissions.findFirst({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                actorType:{
                    select:{
                        id: true,
                        title: true
                    }
                },
                actorId: true,
                moduleId: true,
                invite: true,
                create: true,
                view: true,
                edit: true,
                delete: true,
                approve: true,
            }
        })

        return res.json({status: 1, permission})
        
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.create = async(req, res) => {

    const {actorTypeId, actorId, moduleId, invite, create, view, edit, del, approve} = req.body

    try {
        let permission = await db.permissions.create({
            data: {
                actorTypeId: parseInt(actorTypeId),
                actorId: parseInt(actorId),
                moduleId: parseInt(moduleId),
                invite, create, view, edit, delete: del, approve
            },
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
    const {actorTypeId, actorId, moduleId, invite, create, view, edit, del, approve} = req.body

    try {
        let permission = await db.permissions.update({
            where:{
                id: parseInt(id)
            },
            data: {
                actorTypeId: parseInt(actorTypeId),
                actorId: parseInt(actorId),
                moduleId: parseInt(moduleId),
                invite, create, view, edit, delete: del, approve
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
        let permission = await db.permissions.delete({
            where:{
                id: parseInt(id)
            },
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