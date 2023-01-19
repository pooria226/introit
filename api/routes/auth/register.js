//Requirements
const express  = require('express')
const router   = express.Router()
const passport = require("passport")

// Middlewares
const {decoder, protected, needPermit} = require('../../middlewares/authenticate')
const Validator   = require('../../validators/auth/register')
const Controller  = require('../../controllers/auth/register')

// Routes
router.post("/auth/register", Validator.register, Controller.register)
router.get ('/auth/activation/:token', decoder, Controller.activation)

// Export
module.exports = router