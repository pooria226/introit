const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const formidable = require("formidable");


exports.view = async(req, res) => {

    return res.json({status: 1, message: "Dashboard Overview!"})

}

