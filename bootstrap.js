module.exports = async () => {
	const User = require('./Models/User')
	const Local = require('./Models/Local')
	const Publication = require('./Models/Publication')
	const Image = require('./Models/Image')
	const Save = require('./Models/Save')
	const District = require('./Models/District')
	const ReportType = require('./Models/ReportType')
	const Report = require('./Models/Report')

	User.hasMany(Local, { as: 'Locals', foreignKey: 'userId' })
	User.hasMany(Publication, { as: 'Publications', foreignKey: 'userId' })
	Local.hasMany(Publication, { as: 'Publications', foreignKey: 'localId' })
	Local.hasMany(Image, { as: 'Images', foreignKey: 'localId' })
	User.hasMany(Save, { as: 'Saves', foreignKey: 'userId' })
	Publication.hasMany(Save, { as: 'Saves', foreignKey: 'publicationId' })
	District.hasMany(Local, { as: 'Locals', foreignKey: 'districtId' })
	User.hasMany(Report, { as: 'Reports', foreignKey: 'userId' })
	Publication.hasMany(Report, { as: 'Reports', foreignKey: 'publicationId' })
	ReportType.hasMany(Report, { as: 'Reports', foreignKey: 'reportTypeId' })

	Image.belongsTo(Local, { as: 'Local', foreignKey: 'localId' })
	Local.belongsTo(User, { as: 'User', foreignKey: 'userId' })
	Publication.belongsTo(User, { as: 'User', foreignKey: 'userId' })
	Publication.belongsTo(Local, { as: 'Local', foreignKey: 'localId' })
	Save.belongsTo(User, { as: 'User', foreignKey: 'userId' })
	Save.belongsTo(Publication, {
		as: 'Publication',
		foreignKey: 'publicationId',
	})
	Local.belongsTo(District, { as: 'District', foreignKey: 'districtId' })
	Report.belongsTo(User, { as: 'User', foreignKey: 'userId' })
	Report.belongsTo(Publication, {
		as: 'Publication',
		foreignKey: 'publicationId',
	})
	Report.belongsTo(ReportType, { as: 'ReportType', foreignKey: 'reportTypeId' })

	const errHandler = (err) => {
		console.error('Error: ', err)
	}
}
