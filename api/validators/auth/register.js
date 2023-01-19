const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const _ = require("lodash")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const isEmail = require("email-validator")
const { isNumber } = require("../../utils/u_Is")


exports.register = async (req, res, next) => {
    if (req.user) {
        next()
    } else {

        let data = { status: 0, errors: {} }
        const { email, password, givenName, familyName, terms } = req.body

        let defaultRole = await db.roles.findFirst({
            where: {
                isDefault: true
            }
        })

        let defaultTheme = await db.themes.findFirst({
            where: {
                isDefault: true
            }
        })

        let defaultLanguage = await db.languages.findFirst({
            where: {
                isDefault: true
            }
        })

        req.defaultRoleId = defaultRole.id
        req.defaultThemeId = defaultTheme.id
        req.defaultLanguageId = defaultLanguage.id

        if (!email || !isEmail.validate(email)) {
            data.errors.email = "enter a valid email address, please!"
        }

        if (!password || password.length < 8) {
            data.errors.password = "enter a password of minimum 8 charachters, please!"
        }

        if (!givenName) {
            data.errors.givenName = "enter your first name, please!"
        }

        if (!familyName) {
            data.errors.familyName = "enter your last name, please!"
        }

        if (!terms) {
            data.errors.terms = "you need to accept our terms of services first"
        }

        else if (terms !== true && terms !== false) {
            data.errors.terms = "the value for terms is not valid"
        }

        if (_.size(data.errors)) {
            return res.json(data)
        }

        let User = await db.users.findFirst({
            where: {
                email
            }
        })

        if (User) {
            if (!User.isLive) {
                return res.json({ status: -1, error: "This account is deleted, do you want to recover it?" })
            }
            let userStatus = await db.userStatus.findMany({
                where: {
                    userId: User.id
                },
                orderBy: {
                    createdAt: 'desc'
                },
                take: 1
            })
            if (userStatus[0] && userStatus[0].status !== 'normal' && userStatus[0].status !== 'approved') {
                return res.json({ status: -1, error: `This account is already exists but ${userStatus[0].status} by the admin!` })
            }
            return res.json({ status: -1, error: "You are already a user, please signin" })
        }

        // req.role = isRole;
        next()
    }


}
