const express = require('express')
const router = express.Router()
const expressLayouts = require('express-ejs-layouts')


//Middlewares
router.use(expressLayouts)


//render home
router.get('/', checkAuth, (req, res) => {
	const name = req.user.firstName
	res.render('index', {
		flash : req.user.admin === 1 ? 
		"Welcom "+ name +" you are login like ADMIN":
		name + " is a user" 
	} )
})


// check the authenticated user 
function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

module.exports = router
