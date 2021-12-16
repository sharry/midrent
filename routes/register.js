const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const db = require('../bd')

//const { users, checkAuth, checkNoAuth, connection } = require('../app')

router.users = []

router.get('/', checkNoAuth, (req, res) => {
	res.render('register')
})

router.post('/', async (req, res) => {
	const hashPassword = await bcrypt.hash(req.body.password, 10)
	
	try {
		const user = {
			id:Date.now().toString(),
			email: req.body.email,
			password: hashPassword,
			civility: req.body.civility,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			birthDate: req.body.birthDate,
			phone: req.body.phone,
		}
		
		
			db.query(
			// "INSERT INTO `utilisateur`(`id_u`, `email`, `motdepasse`, `civilite`, `prenom`, `nom`, `datenaissance`, `telephone`, `photo`, `admin`, `dateinscription`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]')"
			"INSERT INTO `utilisateur`( `email`, `motdepasse`, `civilite`, `prenom`, `nom`, `datenaissance`, `telephone`) VALUES ( '" 
				// +
				// user.id +
				// "', '"
				+
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
				"')"
				,
			function (err, result) {
				if (err) throw err
				console.log(result)
			}
		)
		console.log(user)
		router.users.push(user)
		res.redirect('/login')
	} catch (error) {
		console.log(error)
		res.redirect('/register')
	}
	
})

// check the no authenticated user
function checkNoAuth(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/')
	}
	next()
}

module.exports = router
