const sequelize = require('../config/connection')
const { QueryTypes } = require('sequelize')
const Publication = require('../models/Publication')
module.exports = {
	get: async (req, res) => {
		const user = req.user
		const publications = await sequelize.query(
			`SELECT p.*, u.firstName, u.photoUrl, l.address, l.cost, l.size, l.furnitureIncluded, l.billsIncluded, l.gasIncluded, l.wifiIncluded, l.localType, d.name, d.city FROM publications p INNER JOIN users u ON p.userId = u.id INNER JOIN locals l ON p.localId = l.id INNER JOIN districts d ON l.districtId = d.id WHERE p.hidden = 0;`,
			{ type: QueryTypes.SELECT }
		)
		const images = await sequelize.query(
			`SELECT i.imageUrl, i.localId FROM images i`,
			{ type: QueryTypes.SELECT }
		)
		if (req.isAuthenticated()) {
			const saves = await sequelize.query(
				`SELECT s.publicationId FROM saves s WHERE userId = '${user.id}'`,
				{ type: QueryTypes.SELECT }
			)
			res.render('index-user', { user, publications, images, saves })
		} else {
			res.render('index', { publications, images })
		}
	},
}
