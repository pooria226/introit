const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

const formidable = require("formidable");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const { isArray, isObject, size, rest } = require("lodash")

//${process.env.CFLARE_IMG_URL}/${pic_id}/${variant}`

exports.images = async(req, res, next) => {
    
    let picsIDs = [];
    const form = formidable({ multiples: true });

    form.parse(req,async function (err, fields, files) {

        if(isArray(files.images)){
            for(let i=0; i<files.images.length; i++){
                let pic = fs.createReadStream(files.images[i].filepath)
                let data = new FormData()
                data.append("file", pic)

                await axios({
                    method: "post",
                    url: process.env.CFLARE_ENDPOINT,
                    headers: {
                    Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                    ...data.getHeaders(),
                    },
                    data,
                }).then(response => {
                    picsIDs.push(response.data.result.id)
                    //${process.env.CFLARE_IMG_URL}/${pic_id}/${variant}`
                }).catch(err => {
                    return res.json({status: -1, message: error})
                })
            }
        }
        else if(size(files.images)){
            let pic = fs.createReadStream(files.images.filepath)
            let data = new FormData()
            data.append("file", pic)

            await axios({
                method: "post",
                url: process.env.CFLARE_ENDPOINT,
                headers: {
                Authorization: `Bearer ${process.env.CFLARE_IMG_TOKEN}`,
                ...data.getHeaders(),
                },
                data,
            }).then(response => {
                picsIDs.push(response.data.result.id)
                //${process.env.CFLARE_IMG_URL}/${pic_id}/${variant}`
            }).catch(err => {
                return res.json({status: -1, message: error})
            })
        }

        req.fields  = fields;
        req.picsIDs = picsIDs;
        next();
        
    })

}

exports.image = async(req, res, next) => {

    if(req.image.size > 2000000){
        return res.json({status: -1, error: "Image can't be larger than 2MB"})
    }

    let filepath = req.image.filepath;
    let image = fs.createReadStream(req.image.filepath)
    let data = new FormData()
    data.append("file", image)

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
    }).then(response => {
        req.imageId = response.data.result.id;
    }).catch(error => {
        return res.json({status: -1, message: error.message})
    })

    next()
    
}

exports.Social_create = async(req, res, next) => {

    let {lightModeIcon, darkModeIcon, colorModeIcon} = req.files;

    if(lightModeIcon && lightModeIcon.size > 2000000){
        return res.json({status: -1, error: "Light mode icon can't be larger than 2MB"})
    }
    
    if(lightModeIcon && lightModeIcon.size > 2000000){
        return res.json({status: -1, error: "Light mode icon can't be larger than 2MB"})
    }

    if(darkModeIcon && darkModeIcon.size > 2000000){
        return res.json({status: -1, error: "Dark mode icon can't be larger than 2MB"})
    }

    if(colorModeIcon && colorModeIcon.size > 2000000){
        return res.json({status: -1, error: "Color mode icon can't be larger than 2MB"})
    }

    let image = fs.createReadStream(req.image.filepath)
    let data = new FormData()
    data.append("file", image)

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
    }).then(response => {
        req.imageId = response.data.result.id;
    }).catch(error => {
        return res.json({status: -1, message: error.message})
    })

    next()
    
}

exports.socialIcons = async(req, res, next) => {

    let {lightModeIcon, darkModeIcon, colorModeIcon} = req.files;

    if(lightModeIcon && lightModeIcon.size > 2000000){
        return res.json({status: -1, error: "Light mode icon can't be larger than 2MB"})
    }

    if(darkModeIcon && darkModeIcon.size > 2000000){
        return res.json({status: -1, error: "Dark mode icon can't be larger than 2MB"})
    }

    if(colorModeIcon && colorModeIcon.size > 2000000){
        return res.json({status: -1, error: "Color mode icon can't be larger than 2MB"})
    }

    let image = fs.createReadStream(req.image.filepath)
    let data = new FormData()
    data.append("file", image)

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
    }).then(response => {
        req.imageId = response.data.result.id;
    }).catch(error => {
        return res.json({status: -1, message: error.message})
    })

    next()
    
}

