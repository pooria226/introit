const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
const slugify = require("slugify")

exports.toast = async(title, languageId) => {
    try {
        let toast = await db.toasts.findFirst({
            where:{
                slug: slugify(title.toLowerCase(), "-")
            },
            select: {
                id: true,
                title: true,
                message: true,
                translations: {
                    where: {
                        languageId
                    }
                }
            }
        })
        if(toast.translations.length){
            return toast.translations[0].message
        }
        return toast.message
    } catch (error) {
        console.log(error.message);
        return error.message
    }
}


