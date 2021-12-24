module.exports = {
	get: (req, res) => {
		if (req.isAuthenticated()) {
			const user = req.user
			if (req.user.isAdmin) {
				res.render('dashboard', { user })
			} else {
				res.redirect('/')
			}
		} else {
			res.redirect('/')
		}
	},
}
