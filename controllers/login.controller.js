module.exports = {
	get: (req, res) => {
		if (req.isAuthenticated()) {
			res.redirect('/')
		} else {
			const failedMessage = "L'email ou mot de passe est incorrect"
			if (req.query.failed === '1') res.render('login', { failedMessage })
			else res.render('login')
		}
	},
}
