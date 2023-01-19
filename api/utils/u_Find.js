const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

exports.Provider = async(input) => {
    try {
        let Provider = await db.providers.findFirst({
            where: input
        })
        if(!Provider){
            return 0
        }
        return Provider
    } catch (error) {
        return -1
    }
}

exports.Post = async(input) => {
    try {
        let Post = await db.posts.findFirst({
            where: input
        })
        if(!Post){
            return 0
        }
        return Post
    } catch (error) {
        return -1
    }
}

exports.Category = async(input) => {
    try {
        let Category = await db.categories.findFirst({
            where: input
        })
        if(!Category){
            return 0
        }
        return Category
    } catch (error) {
        return -1
    }
}

exports.Plan = async(input) => {
    try {
        let Plan = await db.plans.findFirst({
            where: input
        })
        if(!Plan){
            return 0
        }
        return Plan
    } catch (error) {
        return -1
    }
}

exports.City = async(input) => {
    try {
        let City = await db.cities.findFirst({
            where: input
        })
        if(!City){
            return 0
        }
        return City
    } catch (error) {
        return -1
    }
}

exports.Type = async(input) => {
    try {
        let Type = await db.types.findFirst({
            where: input
        })
        if(!Type){
            return 0
        }
        return Type
    } catch (error) {
        return -1
    }
}

