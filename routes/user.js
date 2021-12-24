const express = require('express')
const controller = require('../controllers/user.controller')
const router = express.Router()

router.get('/', controller.get)
router.get('/:id', controller.getById)

module.exports = router
