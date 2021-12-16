const express = require('express')
const router = express.Router()
const expressLayouts = require('express-ejs-layouts')

//Middlewares
router.use(expressLayouts)

//render home
router.get('/', checkAuth, (req, res) => {
	res.render('index')
})

// check the authenticated user 
function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}

module.exports = router
