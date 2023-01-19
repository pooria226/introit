//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/support/contact-us')
const Controller   = require('../../controllers/support/contact-us')

// Routes
router.post  ("/support/contact_us/create", Validator.create, Controller.create)

router.get   ("/support/contact-us/view/all",     protected, Validator.all,    Controller.all)
router.get   ("/support/contact-us/view/one/:id", protected, Validator.one,    Controller.one)
router.put   ("/support/contact-us/edit/:id",     protected, Validator.update, Controller.update)
router.delete("/support/contact-us/delete/:id",   protected, Validator.delete, Controller.delete)

// Export
module.exports = router