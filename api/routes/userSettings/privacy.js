//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/userSettings/privacy')
const Controller   = require('../../controllers/userSettings/privacy')

// Privacy
router.get("/user-settings/user/view/privacy/all",   protected, Controller.viewAllPrivacy)
router.put("/user-settings/user/edit/privacy",       protected, Validator.editUserPrivacy, Controller.editUserPrivacy)

// Export
module.exports = router