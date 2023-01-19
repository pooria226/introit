//Requirements
const express  = require('express')
const router   = express.Router()

// Middlewares
const Controller  = require('../../controllers/anit/init')

// Routes
router.get("/init", Controller.init)

// Export
module.exports = router