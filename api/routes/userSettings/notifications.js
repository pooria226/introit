//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/userSettings/notifications')
const Controller   = require('../../controllers/userSettings/notifications')

// Notifications
router.get("/user-settings/user/view/notifications/all",   protected, Controller.viewAllNotifications)
router.put("/user-settings/user/edit/notifications",       protected, Validator.editUserNotifications, Controller.editUserNotifications)

// Export
module.exports = router