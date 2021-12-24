const express = require('express')
const router = express.Router()
const expressLayouts = require('express-ejs-layouts')
const controller = require('../controllers/index.controller')

//Middlewares
router.use(expressLayouts)

//render home
router.get('/', controller.get)

module.exports = router
