const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

module.exports = sequelize.define('Local', {
	id: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true,
		autoIncrement: false,
	},
	address: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	cost: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	size: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	furnitureIncluded: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
	},
	billsIncluded: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
	},
	wifiIncluded: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
	},
	gasIncluded: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
	},
	districtId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	localType: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	userId: {
		type: Sequelize.STRING,
		allowNull: false,
	},
})
