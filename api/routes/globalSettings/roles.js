//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected, needPermit}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/globalSettings/roles')
const Controller   = require('../../controllers/globalSettings/roles')

// Routes
router.get    ("/global-settings/roles/view/all",                 protected, needPermit,                        Validator.all,          Controller.all)
router.get    ("/global-settings/roles/view/one/:id/:skip/:take", protected, needPermit,  Validator.one,        Validator.isViewed,     Controller.one)
router.get    ("/global-settings/roles/view/not-members/:id",     protected, needPermit,  Validator.one,        Controller.notmembers)
router.put    ("/global-settings/roles/edit/add-members/:id",     protected, needPermit,  Validator.one,        Validator.addMembers,   Controller.addMembers)
router.post   ("/global-settings/roles/create",                   protected, needPermit,                        Validator.create,       Controller.create)
router.put    ("/global-settings/roles/edit/:id",                 protected, needPermit,  Validator.one,        Validator.edit,         Controller.edit)
router.put    ("/global-settings/roles/edit/default/:id",         protected, needPermit,  Validator.one,                                Controller.setDefaultRole)
router.delete ("/global-settings/roles/delete/:id",               protected, needPermit,  Validator.one,         Validator.delete,      Controller.delete)

// Role Permissions
router.get  ("/global-settings/roles/view/permissions/:id", protected, needPermit, Validator.one, Validator.viewPermissions,  Controller.viewPermissions)
router.post ("/global-settings/roles/create/permission",    protected, needPermit, Validator.createPermission, Controller.createPermission)

// Export
module.exports = router



