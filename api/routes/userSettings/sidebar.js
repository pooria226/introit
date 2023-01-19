//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Controller   = require('../../controllers/userSettings/sidebar')

// General
router.get("/user-settings/user/view/sidebar",  protected, Controller.view)
router.put("/user-settings/user/edit/sidebar",  protected, Controller.edit)

// Export
module.exports = router