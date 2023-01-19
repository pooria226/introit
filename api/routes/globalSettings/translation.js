//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/globalSettings/translation')
const Controller   = require('../../controllers/globalSettings/translation')

// Routes
router.put   ("/global-settings/translation/edit/language/add/:id",  protected, needPermit, Validator.one, Controller.addLanguage)
router.put   ("/global-settings/translation/edit/language/del/:id",  protected, needPermit, Validator.one, Controller.delLanguage)
router.put   ("/global-settings/translation/edit/language/live/:id", protected, needPermit, Validator.one, Controller.liveLanguage)
router.get   ("/global-settings/translation/view/languages/all",     protected, Validator.viewAllLanguages, Controller.viewAllLanguages)

router.get   ("/global-settings/translation/view/sections/:domain",  protected, needPermit, Validator.viewAllSections, Controller.viewAllSections)
router.get   ("/global-settings/translation/view/section/:LID/:SID", protected, needPermit, Validator.viewOneSection, Controller.viewOneSection)
router.put   ("/global-settings/translation/edit",                   protected, needPermit, Validator.translate, Controller.translate)

// Export
module.exports = router