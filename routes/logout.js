const express = require('express')
const router = express.Router()

router.delete('/', (req, res) => {
	req.logout()
    res.redirect('/login')
})

module.exports = router