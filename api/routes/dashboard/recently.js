//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/dashboard/recently')
const Controller   = require('../../controllers/dashboard/recently')

// Routes
router.get  ("/dashboard/recently/view", protected, needPermit, Validator.view, Controller.view)

// Export
module.exports = router