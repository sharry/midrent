const express = require('express')
const router = express.Router()
const upload = require('../config/upload')
const controller = require('../controllers/locals.controller')

router.get('/', controller.get)
router.post('/', upload.array('images', 10), controller.post)
router.post('/delete', controller.delete)
router.post('/update', controller.update)

module.exports = router
