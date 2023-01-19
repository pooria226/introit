//Requirements
const express  = require('express')
const router   = express.Router()


// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/globalSettings/percentage')
const Controller   = require('../../controllers/globalSettings/percentage')

// Routes
router.get  ("/global-settings/percentage/view/all", protected, needPermit, Validator.view, Controller.view)
router.post ("/global-settings/percentage/edit",     protected, needPermit, Validator.edit, Controller.edit)

// Export
module.exports = router