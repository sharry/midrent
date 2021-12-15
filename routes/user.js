const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.end(`<h1>User</h1>`)
})
router.get('/:id', (req, res) => {
	res.end(`<h1>User of id ${req.params.id}</h1>`)
})

module.exports = router
