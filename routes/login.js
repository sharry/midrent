const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/login.controller')

router.get('/', controller.get)

router.post(
	'/',
	passport.authenticate('local', {
		failureRedirect: '/login?failed=1',
		successRedirect: '/',
	})
)

module.exports = router
