const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const bcrypt = require("bcrypt")
const speakeasy = require("speakeasy")
const passport = require("passport")
const GoogleAuth = require("passport-google-oauth20").Strategy
const LocalAuth = require("passport-local").Strategy
const FacebookAuth = require("passport-facebook").Strategy
const LinkedInAuth = require("passport-linkedin-oauth2").Strategy

const { APIURL } = require("./api")
const { copyPermissions } = require('../utils/u_CopyUserPermissions')


//////////////////////////////////////////////////////////////////////////////// Local
passport.use(new LocalAuth(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async (email, password, done) => {
        try {
            let User = await db.users.findFirst({
                where: {
                    email
                },
            })
            if (!User) {
                return done(null, false)
            }
            updUser = await db.users.update({
                where: {
                    email: User.email,
                },
                data: {
                    // avatar: profile.photos[0].value,
                    loginMethod: "local"
                },
            })
            return done(null, User)
        } catch (error) {
            done(error)
        }
    }
))

//////////////////////////////////////////////////////////////////////////////// Google
passport.use(new GoogleAuth(
    {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: `${APIURL}/auth/google/callback`,
        scope: ["profile", "email"],
        proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
        let User = await db.users.findFirst({
            where: {
                email: profile.emails[0].value,
            },
        })
        if (User) {
            let updUser;
            if (User.avatar === null) {
                updUser = await db.users.update({
                    where: {
                        email: User.email,
                    },
                    data: {
                        avatar: profile.photos[0].value,
                        loginMethod: "google"
                    },
                })
            } else {
                updUser = await db.users.update({
                    where: {
                        email: User.email,
                    },
                    data: {
                        loginMethod: "google"
                    },
                })
            }
            done(null, updUser)
        } else {
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
            let newUser = await db.users.create({
                data: {
                    email: profile.emails[0].value,
                    provider: "google",
                    providerId: profile.id,
                    givenName: profile.name.givenName,
                    familyName: profile.name.familyName,
                    avatar: profile.photos[0].value,
                    isVerified: true,
                    loginMethod: "google",

                    roleId: defaultRole.id,
                    themeId: defaultTheme.id,
                    isAcceptedTerms: false,
                    languageId: defaultLanguage.id

                    // password: HPassword,
                },
            })
            await copyPermissions(newUser.id, newUser.roleId)
            done(null, newUser)
        }
    }
))

//////////////////////////////////////////////////////////////////////////////// Facebook
passport.use(new FacebookAuth(
    {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: `${APIURL}/auth/facebook/callback`,
        scope: ["email", "public_profile"],
        profileFields: ['id', 'displayName', 'name', 'photos', 'emails'],
    },
    async (accessToken, refreshToken, profile, done) => {
        let User = await db.users.findFirst({
            where: {
                email: profile.emails[0].value,
            },
        })
        if (User) {
            let updUser;
            if (User.avatar === null) {
                updUser = await db.users.update({
                    where: {
                        email: User.email,
                    },
                    data: {
                        avatar: profile.photos[0].value,
                        loginMethod: "facebook"
                    },
                })
            } else {
                updUser = await db.users.update({
                    where: {
                        email: User.email,
                    },
                    data: {
                        loginMethod: "facebook"
                    },
                })
            }
            done(null, updUser)
        } else {
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
            let newUser = await db.users.create({
                data: {
                    email: profile.emails[0].value,
                    provider: "facebook",
                    providerId: profile.id,
                    givenName: profile.name.givenName,
                    familyName: profile.name.familyName,
                    avatar: profile.photos[0].value,
                    isVerified: true,
                    loginMethod: "facebook",

                    roleId: defaultRole.id,
                    themeId: defaultTheme.id,
                    isAcceptedTerms: false,
                    languageId: defaultLanguage.id

                    // password: HPassword,
                },
            })
            await copyPermissions(newUser.id, newUser.roleId)
            done(null, newUser)
        }
    }
))

//////////////////////////////////////////////////////////////////////////////// LinkedIn
passport.use(new LinkedInAuth(
    {
        clientID: process.env.LINKEDIN_ID,
        clientSecret: process.env.LINKEDIN_SECRET,
        callbackURL: `${APIURL}/auth/linkedin/callback`,
        scope: ['r_emailaddress', 'r_liteprofile'],
        proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
        let User = await db.users.findFirst({
            where: {
                email: profile.emails[0].value,
            },
        })
        if (User) {
            let updUser;
            if (User.avatar === null) {
                updUser = await db.users.update({
                    where: {
                        email: User.email,
                    },
                    data: {
                        avatar: profile.photos[0].value,
                        loginMethod: "linkedin"
                    },
                })
            } else {
                updUser = await db.users.update({
                    where: {
                        email: User.email,
                    },
                    data: {
                        loginMethod: "linkedin"
                    },
                })
            }
            done(null, updUser)
        } else {
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
            let newUser = await db.users.create({
                data: {
                    email: profile.emails[0].value,
                    provider: "linkedin",
                    providerId: profile.id,
                    givenName: profile.name.givenName,
                    familyName: profile.name.familyName,
                    avatar: profile.photos[0].value,
                    isVerified: true,
                    loginMethod: "linkedin",

                    roleId: defaultRole.id,
                    themeId: defaultTheme.id,
                    isAcceptedTerms: false,
                    languageId: defaultLanguage.id

                    // password: HPassword,
                },
            })
            await copyPermissions(newUser.id, newUser.roleId)
            done(null, newUser)
        }
    }
))

//////////////////////////////////////////////////////////////////////////////// Serialize
passport.serializeUser((user, done) => {
    done(null, user.email)
})

//////////////////////////////////////////////////////////////////////////////// Deserialize
passport.deserializeUser(async (email, done) => {
    let User = await db.users.findUnique({
        where: {
            email
        }
    })
    if (User) {
        done(null, User)
    }
})
