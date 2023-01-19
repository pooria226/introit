//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/profile/my-profile')
const Controller   = require('../../controllers/profile/my-profile')



// Routes

router.get  ("/profile/my-profile/view/percentage",          protected, needPermit, Controller.percentage)

router.get  ("/profile/my-profile/view/qr",                  protected, needPermit, Validator.qr,         Controller.getQr)
router.put  ("/profile/my-profile/edit/2fa/enable",          protected, needPermit, Validator.enable2fa,  Controller.enable2FA)
router.put  ("/profile/my-profile/edit/2fa/disable",         protected, needPermit, Validator.disable2FA, Controller.disable2FA)

router.get  ("/profile/my-profile/view/otp/send",            protected, needPermit, Validator.sendOtp,    Controller.sendOtp)
router.post ("/profile/my-profile/create/otp/verify",        protected, needPermit, Validator.verifyOtp,  Controller.verifyOtp)

router.get ("/profile/my-profile/view/personal-information", protected, needPermit, Validator.viewPersonalInfo, Controller.viewPersonalInfo)
router.put ("/profile/my-profile/edit/personal-information", protected, needPermit, Validator.editPersonalInfo, Controller.editPersonalInfo)

router.get ("/profile/my-profile/view/other-information",    protected, needPermit, Validator.viewOtherInfo,    Controller.viewOtherInfo)
router.put ("/profile/my-profile/edit/other-information",    protected, needPermit, Validator.editOtherInfo,    Controller.editOtherInfo)

router.get ("/profile/my-profile/view/security-information", protected, needPermit, Validator.viewSecurityInfo, Controller.viewSecurityInfo)
router.put ("/profile/my-profile/edit/security-information", protected, needPermit, Validator.editSecurityInfo, Controller.editSecurityInfo)

router.get ("/profile/my-profile/view/description",          protected, needPermit, Validator.viewDescription, Controller.viewDescription)
router.put ("/profile/my-profile/edit/description",          protected, needPermit, Validator.editDescription, Controller.editDescription)

router.get ("/profile/my-profile/view/avatar",               protected, needPermit, Validator.viewAvatar, Controller.viewAvatar)
router.put ("/profile/my-profile/edit/avatar",               protected, needPermit, Validator.editAvatar, Controller.editAvatar)
router.delete ("/profile/my-profile/delete/avatar",               protected, needPermit, Validator.deleteAvatar, Controller.deleteAvatar)

router.get ("/profile/my-profile/view/banner",               protected, needPermit, Validator.viewBanner, Controller.viewBanner)
router.put ("/profile/my-profile/edit/banner",               protected, needPermit, Validator.editBanner, Controller.editBanner)

router.get ("/profile/my-profile/view/socials",              protected, needPermit, Validator.viewSocials,  Controller.viewSocials)
router.get ("/profile/my-profile/view/social/:id",           protected, needPermit, Validator.viewSocial,   Controller.viewSocial)
router.post("/profile/my-profile/create/social",             protected, needPermit, Validator.createSocial, Controller.createSocial)
router.put ("/profile/my-profile/edit/social/:id",           protected, needPermit, Validator.editSocial,   Controller.editSocial)
router.delete("/profile/my-profile/delete/social/:id",       protected, needPermit, Validator.deleteSocial, Controller.deleteSocial)

router.post ("/profile/my-profile/create/invitation",        protected, needPermit, Validator.createInvitation, Controller.createInvitation)
router.post ("/profile/my-profile/set-password-after-social-login", protected, Validator.setPasswordAfterSocialLogin, Controller.setPasswordAfterSocialLogin)


// Export
module.exports = router