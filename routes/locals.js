const express = require('express')
const router = express.Router()
const sequelize = require('../config/connection')
const { QueryTypes } = require('sequelize')
const Local = require('../Models/Local')
const Image = require('../Models/Image')
const upload = require('../config/upload')
const { join } = require('path')

router.get('/', async (req, res) => {
	const user = req.user
	if (req.isAuthenticated()) {
		const cities = await sequelize.query(
			'SELECT DISTINCT city FROM `districts`',
			{
				type: QueryTypes.SELECT,
			}
		)
		const districts = await sequelize.query(
			"SELECT id, name FROM `districts` WHERE city = '" +
				cities[0].city +
				"' ORDER BY name",
			{
				type: QueryTypes.SELECT,
			}
		)
		const locals = await sequelize.query(
			"SELECT L.*, D.name AS districtName FROM locals AS L INNER JOIN districts AS D ON L.districtId = D.id WHERE userId = '" +
				req.user.id +
				"'",
			{
				type: QueryTypes.SELECT,
			}
		)
		const images = await sequelize.query(
			"SELECT I.* FROM images AS I INNER JOIN locals AS L ON I.localId = L.id WHERE L.userId = '" +
				user.id +
				"'",
			{
				type: QueryTypes.SELECT,
			}
		)

		res.render('locals', { user, cities, districts, locals, images })
	} else res.redirect('/')
})

router.post('/', upload.array('images', 10), async (req, res) => {
	const {
		districtId,
		address,
		cost,
		localType,
		size,
		furnitureIncluded,
		billsIncluded,
		wifiIncluded,
		gasIncluded,
	} = req.body

	const local = {
		id: 'l' + Date.now().toString(),
		address: address,
		cost: cost,
		size: size,
		furnitureIncluded: typeof furnitureIncluded !== 'undefined',
		billsIncluded: typeof billsIncluded !== 'undefined',
		wifiIncluded: typeof wifiIncluded !== 'undefined',
		gasIncluded: typeof gasIncluded !== 'undefined',
		districtId: districtId,
		localType: localType,
		userId: req.user.id,
	}
	await Local.create(local).catch((err) => {
		console.error('Error: ', err)
	})

	const images = req.files

	for (image of images) {
		const entry = {
			imageUrl: 'uploads/' + image.filename,
			localId: local.id,
		}
		await Image.create(entry).catch((err) => {
			console.log('Error', err)
		})
	}
	res.redirect('/locals')
})

router.post('/delete', async (req, res) => {
	if (req.isAuthenticated) {
		const { localId } = req.body
		await Local.destroy({
			where: {
				id: localId,
			},
		})
		res.redirect('/locals')
	} else {
		res.redirect('/locals')
	}
})

router.post('/update', async (req, res) => {
	if (req.isAuthenticated) {
		const {
			localId,
			district,
			address,
			cost,
			localType,
			size,
			furnitureIncluded,
			billsIncluded,
			wifiIncluded,
			gasIncluded,
		} = req.body
		await Local.update(
			{
				address: address,
				cost: cost,
				size: size,
				furnitureIncluded: furnitureIncluded === 'on',
				billsIncluded: billsIncluded === 'on',
				wifiIncluded: wifiIncluded === 'on',
				gasIncluded: gasIncluded === 'on',
				districtId: district,
				localType: localType,
			},
			{ where: { id: localId } }
		)

		res.redirect('/locals')
	} else {
		res.redirect('/locals')
	}
})

module.exports = router
