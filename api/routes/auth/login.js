//Requirements
const express  = require('express')
const router   = express.Router()
const passport = require("passport")

// Middlewares
const {decoder, protected, needPermit} = require('../../middlewares/authenticate')
const Validator   = require('../../validators/auth/login')
const Controller  = require('../../controllers/auth/login')



// Local
router.post("/auth/login/local", Validator.login, passport.authenticate('local'), Controller.login)

// Google
router.get("/auth/login/google", passport.authenticate('google'))
router.get("/auth/google/callback", passport.authenticate('google'), Controller.login)

// Facebook
router.get("/auth/login/facebook", passport.authenticate('facebook'))
router.get("/auth/facebook/callback", passport.authenticate('facebook'), Controller.login)

// LinkedIn
router.get("/auth/login/linkedin", passport.authenticate('linkedin'))
router.get("/auth/linkedin/callback", passport.authenticate('linkedin'), Controller.login)

// 2FA
router.post("/auth/login/2fa",  Validator.login2FA, passport.authenticate('local'), Controller.login2FA)


// Export
module.exports = router