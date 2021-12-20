const express = require('express')
const router = express.Router()
const expressLayouts = require('express-ejs-layouts')

//Middlewares
router.use(expressLayouts)

//render home
router.get('/', (req, res) => {
	console.log(req.session)
	const user = req.user
	if (req.isAuthenticated()) {
		res.render('index-user', { user })
	} else {
		console.log(`No one is logged in`)
		res.render('index')
	}
})

module.exports = router
