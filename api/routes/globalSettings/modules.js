//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/globalSettings/modules')
const Controller   = require('../../controllers/globalSettings/modules')

// Routes
router.get    ("/global-settings/modules/view/all",        protected, needPermit, Validator.all,    Controller.all)
router.get    ("/global-settings/modules/view/one/:id",    protected, needPermit, Validator.one,    Controller.one)
router.post   ("/global-settings/modules/create",     protected, needPermit, Validator.create, Controller.create)
router.put    ("/global-settings/modules/edit/:id",   protected, needPermit, Validator.edit,   Controller.edit)
router.delete ("/global-settings/modules/delete/:id", protected, needPermit, Validator.delete, Controller.delete)

// Export
module.exports = router



