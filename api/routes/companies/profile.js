//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/companies/profile')
const Controller   = require('../../controllers/companies/profile')

// Routes
router.get   ("/companies/profile/view/all",     protected, needPermit, Validator.all,    Controller.all)
router.get   ("/companies/profile/view/one/:id", protected, needPermit, Validator.one,    Controller.one)
router.post  ("/companies/profile/create",       protected, needPermit, Validator.create, Controller.create)
router.put   ("/companies/profile/edit/:id",     protected, needPermit, Validator.edit,   Controller.edit)
router.delete("/companies/profile/delete/:id",   protected, needPermit, Validator.delete, Controller.delete)



// Export
module.exports = router