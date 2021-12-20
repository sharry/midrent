const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

module.exports = sequelize.define('Save', {
	userId: Sequelize.STRING,
	publicationId: Sequelize.STRING,
})
