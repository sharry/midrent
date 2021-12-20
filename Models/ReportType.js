const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

module.exports = sequelize.define('ReportType', {
	type: Sequelize.STRING,
})
