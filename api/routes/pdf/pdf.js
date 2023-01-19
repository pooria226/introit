//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const {protected}  = require('../../middlewares/authenticate')
const Validator    = require('../../validators/pdf/pdf')
const Controller   = require('../../controllers/pdf/pdf')

// Routes
router.get   ("/pdf/html",     protected, Validator.download,    Controller.html)
router.get   ("/pdf/download",     protected, Validator.download,    Controller.download)
router.post   ("/pdf/download",     protected, Validator.download,    Controller.download)

// Export
module.exports = router