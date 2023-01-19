const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const { toast } = require('../../utils/u_Toasts');
const slugify = require('slugify');



exports.all = async(req, res) => {
    try {
        let modules = await db.modules.findMany({
            select:{
                id: true,
                title: true,
                sort: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                },
            },
            orderBy:{
                sort: 'asc'
            }
        })

        modules.forEach(item => {
            item.name = item.title;
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })

        modules.forEach(item => {
            item.translations = undefined
        })

        return res.json({status: 1, list: modules})
        
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
        let module = await db.modules.findFirst({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                sort: true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                },
            }
        })

        module.name = module.title;
        if(module.translations.length){
            module.title = module.translations[0].title
        }

        module.translations = undefined

        return res.json({status: 1, module})
        
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.create = async(req, res) => {

    const {title, sort, operators} = req.body

    try {
        let item = await db.modules.create({
            data: {
                title,
                slug: slugify(title.toLowerCase()),
                sort: parseInt(sort),
                operators,
            },
        })
        await translate(req.user.id, title, item.id, "modules")
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
    const {title, sort} = req.body

    try {
        let module = await db.modules.update({
            where:{
                id: parseInt(id)
            },
            data: {
                title,
                sort: parseInt(sort)
            },
        })
        await updTranslate(req.user.id, title, id, "modules")
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
        let module = await db.modules.delete({
            where:{
                id: parseInt(id)
            },
        })
        await delTranslates(22, id)
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