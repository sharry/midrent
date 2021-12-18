const express = require('express')
const router = express.Router()
const passport = require('passport')
const initializePassport = require('../passportConfig')
const db = require('../bd')
const reg = require('./register')


// Initialization pasport
initializePassport(
	passport,
	(email) =>
		reg.users.find((user) => {
			return user.email === email
		}),
	(id) => reg.users.find((user) => user.id === id)
)


// Select the users from the db
db.query("SELECT `id_u`, `email`, `motdepasse`, `civilite`, `prenom`, `nom`, `datenaissance`, `telephone`, `photo`, `admin`, `dateinscription` FROM `utilisateur` WHERE 1", function (err, result) {
	if (err) throw err;
	result.map(u => {
		const user = {
			id: u.id_u,
			email: u.email,
			password: u.motdepasse,
			civility: u.civilite,
			firstName: u.prenom,
			lastName: u.nom,
			birthDate: u.datenaissance,
			phone: u.telephone,
			admin: u.admin
		}
		reg.users.push(user)
		
	})
	
});


// Routes
router.get('/', checkNoAuth, (req, res) => {
	res.render('login')
})
router.post(
	'/',checkNoAuth,
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
