const Sequelize = require('sequelize')

//Connection with the database
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: process.env.DB_HOST,
		dialect: 'mysql',
		operatorsAliases: 0,
		storage: './session.mysql',
	}
)

//Test connection
sequelize
	.authenticate()
	.then(() =>
		console.log('\n\nConnection has been established successfully.\n\n')
	)
	.catch((err) =>
		console.error('\n\nUnable to connect to the database:\n\n', err)
	)

module.exports = sequelize
// global.sequelize = sequelize
