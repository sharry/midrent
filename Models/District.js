const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

module.exports = sequelize.define('District', {
	name: Sequelize.STRING,
	city: Sequelize.STRING,
})
