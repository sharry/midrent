const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
//const { users, checkAuth, checkNoAuth, connection } = require('../app')

router.users = []

router.get('/', checkNoAuth, (req, res) => {
	res.render('register')
})

router.post('/', checkNoAuth, async (req, res) => {
	const hashPassword = await bcrypt.hash(req.body.password, 10)
	try {
		const user = {
			id: parseInt(Date.now().toString()),
			email: req.body.email,
			password: hashPassword,
			civility: req.body.civility,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			birthDate: req.body.birthDate,
			phone: req.body.phone,
		}
		connection.query(
			"INSERT INTO `client`(`id`, `email`, `motdepasse`, `civilite`, `prenom`, `nom`, `datenaissance`, `telephone`) VALUES ('" +
				user.id +
				"', '" +
				user.email +
				"', '" +
				user.password +
				"', '" +
				user.civility +
				"', '" +
				user.firstName +
				"', '" +
				user.lastName +
				"', '" +
				user.birthDate +
				"', '" +
				user.phone +
				"')",
			function (err, result) {
				if (err) throw err
				console.log(result)
			}
		)
		router.users.push(user)
		res.redirect('/login')
	} catch (error) {
		res.redirect('/register')
	}
	console.log(router.users)
})

// check the no authenticated user
function checkNoAuth(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/')
	}
	next()
}

module.exports = router
