module.exports = {
	get: (req, res) => {
		console.log(req.session)
		const user = req.user
		if (req.isAuthenticated()) {
			res.render('index-user', { user })
		} else {
			console.log(`No one is logged in`)
			res.render('index')
		}
	},
}
