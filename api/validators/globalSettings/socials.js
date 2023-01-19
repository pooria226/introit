const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { size } = require("lodash")
const formidable = require("formidable");
const sizeOf = require('image-size')
const {toast} = require("../../utils/u_Toasts")
const {isNumber} = require("../../utils/u_Is")




exports.viewAllSocials = async(req, res, next) => {
    next()
}

exports.viewOneSocial = async(req, res, next) => {

    let id = req.params.id

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Award ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Social Media ID please!"})
    }

    try {
        let SocialById = await db.socials.findUnique({
            where:{
                id: parseInt(id)
            }
        })
        if(!SocialById){
            return res.json({status: -1, title: "Sorry!", error: "Social Media not found!"})
        }
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    next()

}

exports.createSocial = async(req, res, next) => {

    let data = {status: 0, errors: {}}
    const form = formidable({ multiples: true });

    form.parse(req,async function (err, fields, files) {
        let {title, website} = fields;
        let {icon} = files;

        if(!title){
            data.errors.title = "Enter a title for the social media, please!"
        }else{
            let SocialByName = await db.socials.findFirst({
                where:{
                    title
                }
            })
            if(SocialByName){
                data.errors.name = "This social media name is aleady exists!"
            }
        }

        if(!website){
            data.errors.website = "Enter a website address for the social media, please!"
        }else if(website.includes("http")){
            data.errors.website = "Remove http and https from the website address, please!"
        }else if(website.includes("www")){
            data.errors.website = "Remove www from the website address, please!"
        }else if(
            website.startsWith("~") ||
            website.startsWith("`") ||
            website.startsWith(".") ||
            website.startsWith("/") ||
            website.startsWith("+") ||
            website.startsWith("-") ||
            website.startsWith("!") ||
            website.startsWith("@") ||
            website.startsWith("#") ||
            website.startsWith("$") ||
            website.startsWith("%") ||
            website.startsWith("^") ||
            website.startsWith("&") ||
            website.startsWith("*") ||
            website.startsWith(")") ||
            website.startsWith("(") ||
            website.startsWith("_") ||
            website.startsWith("=") ||
            website.startsWith("{") ||
            website.startsWith("}") ||
            website.startsWith("[") ||
            website.startsWith("]") ||
            website.startsWith(":") ||
            website.startsWith("|") ){
                data.errors.website = "Remove special charachters from the begining of the website address, please!"
        }else{
            let SocialByWebsite = await db.socials.findFirst({
                where:{
                    website
                }
            })
            if(SocialByWebsite){
                data.errors.website = "This social media website is aleady exists!"
            }
        }

        if (size(data.errors)) {
            return res.json(data)
        }

        if(!icon){
            data.errors.icon = "Upload an icon for the social media, please!"
            if (size(data.errors)) {
                return res.json(data)
            }
        }

        let ext = files.icon.mimetype.split("/")[1]
        if(ext !== "jpeg" && ext !== "jpg" && ext !== "png" && ext !== "webp"){
            return res.json({status: -1, error: "Supported formats are jpg, jpeg, png"})
        }
        
        req.fields = fields;
        req.files = files;
        next()
    })

}

exports.editSocial = async(req, res, next) => {

    let id = req.params.id
    let data = {status: 0, errors: {}}
    const form = formidable({ multiples: true });

    if(!id){
        return res.json({status: -1, title: "Sorry!", error: "Enter the Award ID please!"})
    }

    if(!isNumber(parseInt(id))){
        return res.json({status: -1, title: "Sorry!", error: "Enter a numeric Social Media ID please!"})
    }

    try {
        let SocialById = await db.socials.findUnique({
            where:{
                id: parseInt(id)
            }
        })
        if(!SocialById){
            return res.json({status: -1, title: "Sorry!", error: "Social Media not found!"})
        }else{
            req.social = SocialById
        }
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

    form.parse(req,async function (err, fields, files) {
        let {title, website} = fields;

        if(!title){
            data.errors.title = "Enter a title for the social media, please!"
        }else{
            let SocialByName = await db.socials.findFirst({
                where:{
                    title,
                    NOT:[
                        {
                            id: parseInt(id)
                        }
                    ]
                }
            })

            if(SocialByName && SocialByName.id !== parseInt(id)){
                data.errors.title = "This social media name is aleady exists!"
            }
        }

        if(!website){
            data.errors.website = "Enter a website address for the social media, please!"
        }else if(website.includes("http")){
            data.errors.website = "Remove http and https from the website address, please!"
        }else if(website.includes("www")){
            data.errors.website = "Remove www from the website address, please!"
        }else if(
            website.startsWith("~") ||
            website.startsWith("`") ||
            website.startsWith(".") ||
            website.startsWith("/") ||
            website.startsWith("+") ||
            website.startsWith("-") ||
            website.startsWith("!") ||
            website.startsWith("@") ||
            website.startsWith("#") ||
            website.startsWith("$") ||
            website.startsWith("%") ||
            website.startsWith("^") ||
            website.startsWith("&") ||
            website.startsWith("*") ||
            website.startsWith(")") ||
            website.startsWith("(") ||
            website.startsWith("_") ||
            website.startsWith("=") ||
            website.startsWith("{") ||
            website.startsWith("}") ||
            website.startsWith("[") ||
            website.startsWith("]") ||
            website.startsWith(":") ||
            website.startsWith("|") ){
                data.errors.website = "Remove special charachters from the begining of the website address, please!"
        }else{
            let SocialByWebsite = await db.socials.findFirst({
                where:{
                    website
                }
            })
            if(SocialByWebsite && SocialByWebsite.id !== parseInt(id)){
                data.errors.website = "This social media website is aleady exists!"
            }
        }

        if (size(data.errors)) {
            return res.json(data)
        }

        if(files.icon){
            let ext = files.icon.mimetype.split("/")[1]
            if(ext !== "jpeg" && ext !== "jpg" && ext !== "png" && ext !== "webp"){
                return res.json({status: -1, error: "Supported formats are jpg, jpeg, png"})
            }
        }

        req.fields = fields;
        req.files = files;
        next()
    })

}

exports.deleteSocial = async(req, res, next) => {

    const {id} = req.params

    if(!id){
        return res.json({status: -1, error: "Enter the id of the social media, please!"})
    }

    let Social = await db.socials.findFirst({
        where:{
            id: parseInt(id)
        }
    })
    if(!Social){
        return res.json({status: -1, error: "This social media doesn't exists!"})
    }else{
        req.social = Social
    }

    next()

}
