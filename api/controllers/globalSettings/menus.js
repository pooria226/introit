const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { toast } = require('../../utils/u_Toasts');
const slugify = require('slugify');


exports.all = async(req, res) => {
    try {

        let menus = await db.menus.findMany({
            where:{
                NOT:[
                    {
                        slug: "settings"
                    }
                ]
            },
            select:{
                id: true,
                title: true,
                sort:  true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                },
                modules: {
                    select:{
                        id: true,
                        title: true,
                        sort:  true,
                        translations: {
                            where: {
                                languageId: req.user.languageId
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
            menu.name = menu.title;
            if(menu.translations.length){
                menu.title = menu.translations[0].title
            }
        })

        menus.forEach(menu => {
            menu.modules.forEach(item => {
                item.name = item.title;
                if(item.translations.length){
                    item.title = item.translations[0].title
                }
            })
        })

        menus.forEach(menu => {
            menu.translations = undefined
            menu.modules.forEach(item => {
                item.translations = undefined
            })
        })

        return res.json({status: 1, list: menus})

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
        let menu = await db.menus.findFirst({
            where:{
                id: parseInt(id)
            },
            select:{
                id: true,
                title: true,
                slug:  true,
                sort:  true,
                translations: {
                    where: {
                        languageId: req.user.languageId
                    }
                },
                modules: {
                    select:{
                        id: true,
                        title: true,
                        slug:  true,
                        sort:  true,
                        translations: {
                            where: {
                                languageId: req.user.languageId
                            }
                        },
                    }
                }
            },
        })

        menu.name = menu.title;
        if(menu.translations.length){
            menu.title = menu.translations[0].title
        }

        menu.modules.forEach(item => {
            item.name = item.title;
            if(item.translations.length){
                item.title = item.translations[0].title
            }
        })

        menu.translations = undefined
        menu.modules.forEach(item => {
            item.translations = undefined
        })

        return res.json({status: 1, menu})
        
    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.create = async(req, res) => {

    const {title, sort} = req.body

    try {
        let item = await db.menus.create({
            data: {
                title,
                slug: slugify(title),
                sort: parseInt(sort)
            },
        })
        await translate(req.user.id, title, item.id, "menus")
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
        let menu = await db.menus.update({
            where:{
                id: parseInt(id)
            },
            data: {
                title,
                slug: slugify(title),
                sort: parseInt(sort)
            },
        })
        await updTranslate(req.user.id, title, id, "menus")
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
        let menu = await db.menus.delete({
            where:{
                id: parseInt(id)
            },
        })
        await delTranslates(21, id)
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}