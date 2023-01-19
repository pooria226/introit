//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/globalSettings/socials')
const Controller   = require('../../controllers/globalSettings/socials')

// Routes
router.get   ("/global-settings/social-media/view/all",     protected, needPermit, Validator.viewAllSocials, Controller.viewAllSocials)
router.get   ("/global-settings/social-media/view/one/:id", protected, needPermit, Validator.viewOneSocial,  Controller.viewOneSocial)
router.post  ("/global-settings/social-media/create",       protected, needPermit, Validator.createSocial,   Controller.createSocial)
router.put   ("/global-settings/social-media/edit/:id",     protected, needPermit, Validator.editSocial,     Controller.editSocial)
router.delete("/global-settings/social-media/delete/:id",   protected, needPermit, Validator.deleteSocial,   Controller.deleteSocial)

// Export
module.exports = router