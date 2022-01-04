const Publication = require('../models/Publication')
module.exports = {
	get: (req, res) => {
		res.end(`<h1>Pub</h1>`)
	},
	post: async (req, res) => {
		const { title, description, target, localId } = req.body
		const pub = {
			id: 'p' + Date.now().toString(),
			title: title,
			description: description,
			target: target,
			hidden: false,
			userId: req.user.id,
			localId: localId,
		}
		await Publication.create(pub).catch((err) => {
			console.error('Error: ', err)
		})
		res.redirect(req.originalUrl.substring(0, req.originalUrl.lastIndexOf('/')))
	},
}
