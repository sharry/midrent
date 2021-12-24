const multer = require('multer')
const { dirname } = require('path')

const appDir = dirname(require.main.filename)

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, appDir + '/uploads')
	},
	filename: (req, file, callback) => {
		callback(
			null,
			Date.now() + '-' + file.originalname.toString().replace(/\s+/g, '')
		)
	},
})
const upload = multer({
	storage: fileStorageEngine,
})

module.exports = upload
