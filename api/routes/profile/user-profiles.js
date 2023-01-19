//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/profile/user-profiles')
const Controller   = require('../../controllers/profile/user-profiles')

// suspend, disabled, approved

// Routes
router.get ("/profile/user-profiles/view/all/:skip/:take",      protected, needPermit, Validator.all, Controller.all)
router.post("/profile/user-profiles/view/search/:skip/:take",   protected, needPermit, Validator.search, Controller.search)
router.get ("/profile/user-profiles/view/one/:id",              protected, needPermit, Validator.one, Validator.isViewd, Controller.one)

router.get ("/profile/user-profiles/view/personal-information/:id", protected, needPermit, Validator.viewPersonalInfo, Controller.viewPersonalInfo)
router.put ("/profile/user-profiles/edit/personal-information/:id", protected, needPermit, Validator.editPersonalInfo, Controller.editPersonalInfo)

router.get ("/profile/user-profiles/view/other-information/:id",    protected, needPermit, Validator.viewOtherInfo,    Controller.viewOtherInfo)
router.put ("/profile/user-profiles/edit/other-information/:id",    protected, needPermit, Validator.editOtherInfo,    Controller.editOtherInfo)

router.get ("/profile/user-profiles/view/security-information/:id", protected, needPermit, Validator.viewSecurityInfo, Controller.viewSecurityInfo)
router.put ("/profile/user-profiles/edit/security-information/:id", protected, needPermit, Validator.editSecurityInfo, Controller.editSecurityInfo)

router.put ("/profile/user-profiles/edit/change-status/:id",    protected, needPermit, Validator.one, Validator.isViewd, Validator.changeStatus, Controller.changeStatus)

router.put ("/profile/user-profiles/edit/like/:id",             protected, needPermit, Validator.one, Controller.like)

router.put ("/profile/user-profiles/edit/role",                 protected, needPermit, Validator.changeRole, Controller.changeRole)

// User Settings
router.get("/profile/user-profiles/view/access/:id",            protected, needPermit, Validator.viewAccess, Controller.viewAccess)
router.post("/profile/user-profiles/create/access",             protected, needPermit, Validator.createAccess, Controller.createAccess)


// Export
module.exports = router