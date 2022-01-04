const express = require('express')
const router = express.Router()
const upload = require('../config/upload')
const controller = require('../controllers/locals.controller')
const pubController = require('../controllers/publication.controller')

router.get('/', controller.get)
router.post('/', upload.array('images', 10), controller.post)
router.post('/delete', controller.delete)
router.post('/update', controller.update)
router.post('/publish', pubController.post)

module.exports = router
