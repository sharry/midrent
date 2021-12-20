const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

module.exports = sequelize.define('Publication', {
	id: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true,
		autoIncrement: false,
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	target: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	hidden: {
		type: Sequelize.STRING,
		defaultValue: false,
	},
	userId: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	localId: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})
