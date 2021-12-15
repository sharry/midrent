const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', checkNoAuth, (req, res) => {
	res.render('login')
})

router.post(
	'/',
	checkNoAuth,
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true,
	})
)

// check the no authenticated user
function checkNoAuth(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/')
	}
	next()
}

module.exports = router
