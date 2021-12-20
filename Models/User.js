const Sequelize = require('sequelize')
const sequelize = require('../config/connection')

module.exports = sequelize.define('User', {
	id: {
		type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true,
		autoIncrement: false,
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
		validate: { isEmail: true },
	},
	hashedPassword: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	isMale: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	birthDate: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	photoUrl: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	isAdmin: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	},
})
