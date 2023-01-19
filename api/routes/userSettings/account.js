//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/userSettings/account')
const Controller   = require('../../controllers/userSettings/account')

// Account Management
router.put("/user-settings/user/edit/account/deactivation",  protected, Controller.accountDeactivation)
router.put("/user-settings/user/edit/account/delete",        protected, Controller.accountDelete)

// Export
module.exports = router