const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

module.exports = sequelize.define('Image', {
	imageUrl: Sequelize.STRING,
	localId: Sequelize.STRING,
})
