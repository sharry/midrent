const express = require('express')
const router = express.Router()
const upload = require('../config/upload')
const controller = require('../controllers/profile.controller')

router.get('/', controller.get)

router.post('/', upload.single('photoUrl'), controller.post)

module.exports = router
