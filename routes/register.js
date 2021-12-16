const express = require('express')
const router = express.Router()
const db = require('../bd')


router.users = []

// Routes
router.get('/', checkNoAuth, (req, res) => {
	res.render('register')
})
router.post('/', async (req, res) => {
	
	try {
		
		db.query("SELECT id_u FROM `utilisateur` ORDER by id_u desc LIMIT 0,1",function (err, result) {
			if (err) throw err
			const user = {
			id: result + 1,
			email: req.body.email,
			password: req.body.password,
			civility: req.body.civility,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			birthDate: req.body.birthDate,
			phone: req.body.phone,
		}
		db.query(
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
				
				router.users.push(user)
				
				res.redirect('/login')
			}
		)
		})
			
		
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
