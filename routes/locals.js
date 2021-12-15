const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.end(`<h1>My locals</h1>`)
})

module.exports = router
