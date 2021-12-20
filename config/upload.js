const multer = require('multer')
const { join } = require('path')
const fileStorageEngine = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'uploads/')
	},
	filename: (req, file, callback) => {
		callback(null, Date.now() + '-' + file.originalname)
	},
})
const upload = multer({ storage: fileStorageEngine })

module.exports = upload
