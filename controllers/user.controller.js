module.exports = {
	get: (req, res) => {
		res.end(`<h1>User</h1>`)
	},
	getById: (req, res) => {
		res.end(`<h1>User of id ${req.params.id}</h1>`)
	},
}
