//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/userSettings/general')
const Controller   = require('../../controllers/userSettings/general')

// General
router.put("/user-settings/user/edit/theme",    protected, Validator.changeTheme,    Controller.changeTheme)
router.put("/user-settings/user/edit/timezone", protected, Validator.changeTimezone, Controller.changeTimezone)
router.put("/user-settings/user/edit/currency", protected, Validator.changeCurrency, Controller.changeCurrency)
router.put("/user-settings/user/edit/language", protected, Validator.changeLanguage, Controller.changeLanguage)
router.put("/user-settings/user/edit/gridview", protected, Validator.changeGridview, Controller.changeGridview)

// Export
module.exports = router