const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

module.exports = sequelize.define('Report', {
	description: Sequelize.TEXT,
	publicationId: Sequelize.STRING,
	userId: Sequelize.STRING,
	reportTypeId: Sequelize.INTEGER,
})
