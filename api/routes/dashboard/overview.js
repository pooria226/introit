//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/dashboard/overview')
const Controller   = require('../../controllers/dashboard/overview')

// Routes
router.get  ("/dashboard/overview/view", protected, needPermit, Validator.view, Controller.view)

// Export
module.exports = router