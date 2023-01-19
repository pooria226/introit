//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/globalSettings/menus')
const Controller   = require('../../controllers/globalSettings/menus')

// Routes
router.get    ("/global-settings/menus/view/all",     protected, needPermit, Validator.all,    Controller.all)
router.get    ("/global-settings/menus/view/one/:id", protected, needPermit, Validator.one,    Controller.one)
router.post   ("/global-settings/menus/create",       protected, needPermit, Validator.create, Controller.create)
router.put    ("/global-settings/menus/edit/:id",     protected, needPermit, Validator.edit,   Controller.edit)
router.delete ("/global-settings/menus/delete/:id",   protected, needPermit, Validator.delete, Controller.delete)

// Export
module.exports = router

