const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const { toast } = require('../../utils/u_Toasts');




exports.view = async(req, res) => {

    try {

        let user = await db.users.findFirst({
            where:{
                id: req.user.id
            },
            select:{
                id: true,
                isSidebarMinimized: true
            }
        })

        return res.json({
            status: 1, 
            isMinimized: user.isSidebarMinimized
        })
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}

exports.edit = async(req, res) => {

    try {
        let user = await db.users.update({
            where:{
                id: req.user.id
            },
            data:{
                isSidebarMinimized: !(req.user.isSidebarMinimized)
            }
        })

        return res.json({
            status: 1, 
            message: await toast("Updated", req.user.languageId)
        })
        
    } catch (error) {
        console.log(error.message);
        return res.json({
            status: -1, 
            error: await toast("General error", req.user.languageId)
        })
    }

}
