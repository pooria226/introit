//Requirements
const express  = require('express')
const router   = express.Router()
const passport = require("passport")

// Middlewares
const {decoder, protected, needPermit} = require('../../middlewares/authenticate')
const Controller  = require('../../controllers/auth/session')

// Routes

// Current
router.get("/auth/current", Controller.current)

// Logout
router.get("/auth/logout", Controller.logout)


// Export
module.exports = router