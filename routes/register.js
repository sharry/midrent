const express = require('express')
const controller = require('../controllers/register.controller')
const router = express.Router()

//GET the /register
router.get('/', controller.get)
//Insert a new user
router.post('/', controller.post)

module.exports = router
