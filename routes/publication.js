const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.end(`<h1>Pub</h1>`)
})

module.exports = router
