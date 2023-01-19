const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const fs = require("fs");
const formidable = require("formidable");
const axios = require("axios");
const FormData = require("form-data");
const { toast } = require('../../utils/u_Toasts');




exports.viewAllSocials = async(req, res) => {

    try {
        let socials = await db.socials.findMany({
            where:{
                isLive: true,
            },
            select:{
                id:      true,
                title:   true,
                website: true,
                icon_id: true,
            },
            orderBy:{
                id: "asc"
            }
        })
        socials.forEach(social => {
            social.icon = `${process.env.CFLARE_IMG_URL}/${social.icon_id}/icon`
        })
        socials.forEach(social => {
            social.icon_id = undefined
        })
        
        return res.json({status: 1, socials})

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.viewOneSocial = async(req, res) => {

    let id = req.params.id

    try {
        let social = await db.socials.findFirst({
            where:{
                id: parseInt(id),
                isLive: true,
            },
            select:{
                id:      true,
                title:   true,
                website: true,
                icon_id: true,
            }
        })

        social.icon = `${process.env.CFLARE_IMG_URL}/${social.icon_id}/icon`
        social.icon_id = undefined

        return res.json({status: 1, social})

    } catch (error) {
        console.log(error);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }


}

exports.createSocial = async(req, res) => {

    let {title, website} = req.fields;
    let icon = fs.createReadStream(req.files.icon.filepath)
    let data = new FormData()
    data.append("file", icon)

    await axios({
        method: "post",
        url: process.env.CFLARE_ENDPOINT,
        headers: {
            Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
            ...data.getHeaders(),
        },
        config:{
            'maxContentLength': Infinity,
            'maxBodyLength': Infinity
        },
        data,
    }).then(async(response) => {
        let icon_id = response.data.result.id;

        try {
            let social = await db.socials.create({
                data:{
                    createdBy: req.user.id,
                    title, website, icon_id
                }
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


    }).catch(async(error) => {
        console.log(error)
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    })


    // try {
    //     let socials = await db.socials.create({
    //         data:{
    //             name:    req.name, 
    //             website: req.baseUrl, 
    //             icon:    req.imageId
    //         }
    //     })
    //     return res.json({status: 1, message: "The new social media has been saved successfully!"})
    // } catch (error) {
    //     console.log(error.message);
    //     return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    // }
}

exports.editSocial = async(req, res) => {

    let id = req.params.id
    let icon_id = "";
    let {title, website} = req.fields;

    if(req.files && req.files.icon){
        let icon = fs.createReadStream(req.files.icon.filepath)
        let data = new FormData()
        data.append("file", icon)

        await axios({
            method: "post",
            url: process.env.CFLARE_ENDPOINT,
            headers: {
                Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                ...data.getHeaders(),
            },
            config:{
                'maxContentLength': Infinity,
                'maxBodyLength': Infinity
            },
            data,
        }).then(async(response) => {
    
            icon_id = response.data.result.id;
    
        }).catch(async(error) => {
            console.log(error)
            return res.json({
                status: -1, 
                error: await toast("General error", req.user.languageId)
            })
        })

    }
    
    try {
        let social = await db.socials.update({
            where:{
                id: parseInt(id)
            },
            data:{
                title, website, 
                icon_id: icon_id !== "" ? icon_id : req.social.icon_id
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

exports.deleteSocial = async(req, res) => {

    const id = req.params.id

    await axios({
        method: "delete",
        url: `${process.env.CFLARE_ENDPOINT}/${req.social.icon_id}`,
        headers: {
            Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
        },
    }).then(async(response) => {

        let delSocial = await db.socials.delete({
            where:{
                id: parseInt(id)
            },
        })
        
        return res.json({
            status: 1, 
            message: await toast("Deleted", req.user.languageId)
        })

    }).catch(async(error) => {
        console.log(error)
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    })

}

