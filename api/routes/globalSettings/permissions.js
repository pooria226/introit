//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/globalSettings/permissions')
const Controller   = require('../../controllers/globalSettings/permissions')

// Routes
router.get    ("/global-settings/permissions/view/all",      protected, needPermit, Validator.all,    Controller.all)
router.get    ("/global-settings/permissions/view/one/:id",  protected, needPermit, Validator.one,    Controller.one)
router.delete ("/global-settings/permissions/delete/:id",    protected, needPermit, Validator.delete, Controller.delete)

// Export
module.exports = router

