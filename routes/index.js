const express = require('express')
const router = express.Router()
const expressLayouts = require('express-ejs-layouts')

//Middlewares
router.use(expressLayouts)

//render home
router.get('/', (req, res) => {
	res.render('index')
})

module.exports = router
