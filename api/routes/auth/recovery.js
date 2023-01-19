//Requirements
const express  = require('express')
const router   = express.Router()
const passport = require("passport")

// Middlewares
const {decoder, protected, needPermit} = require('../../middlewares/authenticate')
const Validator   = require('../../validators/auth/recovery')
const Controller  = require('../../controllers/auth/recovery')

// Routes

// Recovery
router.post("/auth/password/forgot", Validator.forgotPassword, Controller.forgotPassword)
router.post('/auth/password/reset', Validator.resetPassword, Controller.resetPassword)


// Export
module.exports = router