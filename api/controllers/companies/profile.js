const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const formidable = require("formidable");
const { isNumber } = require('../../utils/u_Is')
const fs = require('fs');
const axios = require("axios");
const FormData = require("form-data");
const { nanoid } = require('nanoid')



exports.all = async(req, res) => {
    try {
        let companies = await db.userCompanies.findMany({
            where:{ 
                userId: req.user.id
            },
            select:{
                id: true,
                name: true,
                address: true,
                members:{
                    select:{
                        id: true
                    }
                },
                country: {
                    select:{
                        name: true
                    }
                },
                logoId: true
            }
        })
        companies.forEach(company => {
            let count = company.members.length
            company.members = count;
            company.logo = `${process.env.CFLARE_IMG_URL}/${company.logoId}/avatar`
        })
        companies.forEach(company => {
            company.logoId = undefined;
        })
        return res.json({status: 1, companies})
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }
}

exports.one = async(req, res) => {

    const {id} = req.params

    try {
        let company = await db.userCompanies.findFirst({
            where:{
                id: parseInt(id),
                userId: req.user.id
            },
            select:{
                id: true,
                name: true,
                industryId: true,
                phone: true,
                email: true,
                address: true,
                taxId: true,
                website: true,
                companySize: true,
                specialities: true,
                countryId: true,
                logoId: true,
                bannerId: true,
                about: true,
                socials: {
                    select:{
                        id: true,
                        username: true,
                        social: true
                    }
                }
            }
        })

        company.logo   = `${process.env.CFLARE_IMG_URL}/${company.logoId}/avatar`
        company.banner = `${process.env.CFLARE_IMG_URL}/${company.bannerId}/banner`
        company.logoId = undefined;
        company.bannerId = undefined;

        let socialLinks = []
        company.socials.forEach(social => {
            let iconId = req.user.themeId === 1 ? social.social.light_mode_icon_id : social.social.dark_mode_icon_id
            socialLinks.push({
                id: social.id,
                name: social.social.name,
                icon: `${process.env.CFLARE_IMG_URL}/${social.social.iconId}/icon`,
                link: `https://${social.social.website}/${social.username}`
            })
        })

        company.socials = socialLinks;
        
        return res.json({status: 1, companies: [company]})

    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

}

exports.create = async(req, res) => {

    const {name, industryId, phone, email, address, website, companySize, specialities} = req.body

    try {
        let Company = await db.userCompanies.create({
            data:{
                name: name.toLowerCase(), 
                industryId: parseInt(industryId),
                phone, email, address, website, 
                companySize: parseInt(companySize), 
                specialities,
                createdBy: req.user.id,
                userId: req.user.id,
            }
        })
        return res.json({status: 1, message: "The new Company has been created, successfully!"})
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }
    
}

exports.edit = async(req, res) => {

    const {id} = req.params
    const {name, industryId, phone, email, address, website, companySize, specialities} = req.body

    try {
        let Company = await db.userCompanies.update({
            where:{
                id: parseInt(id)
            },
            data:{
                name: name.toLowerCase(), 
                industryId: parseInt(industryId),
                phone, email, address, website, 
                companySize: parseInt(companySize), 
                specialities,
                updatedBy: req.user.id,
            }
        })
        return res.json({status: 1, message: "The new Company has been created, successfully!"})
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }
    
}

exports.delete = async(req, res) => {

    const {id} = req.params

    try {
        let delCompany = await db.userCompanies.delete({
            where:{
                id: parseInt(id)
            },
        })
        return res.json({status: 1, message: "Your Company has been deleted successfully"})
    } catch (error) {
        console.log(error.message);
        return res.json({status: -1, title: "Sorry!", error: "The operation encountered an error, try again later please!"})
    }

}