const express = require('express')
const controller = require('../controllers/publication.controller')
const router = express.Router()

router.get('/', controller.get)

module.exports = router
