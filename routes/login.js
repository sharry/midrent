const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
	if (req.isAuthenticated()) {
		res.redirect('/')
	} else {
		const failedMessage = "L'email ou mot de passe est incorrect"
		if (req.query.failed === '1') res.render('login', { failedMessage })
		else res.render('login')
	}
})

router.post(
	'/',
	passport.authenticate('local', {
		failureRedirect: '/login?failed=1',
		successRedirect: '/',
	})
)

module.exports = router
