const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const formidable = require("formidable");
const { toast } = require('../../utils/u_Toasts');


exports.all = async(req, res) => {

    try {
        let all = await db.contact_Us.findMany({
            where:{
                userId: parseInt(req.user.id)
            },
        })
        if(job){
            return res.json({status: -1, error: "You used this one before, enter a new job id please!"})
        }else{
            return res.json({status: 1, message: "Job id is available"})
        }
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.one = async(req, res) => {

}

exports.create = async(req, res) => {

}

exports.update = async(req, res) => {

}

exports.delete = async(req, res) => {

}