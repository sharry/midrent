if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

//Modules
const express = require('express')
const path = require('path')
const logger = require('morgan')
const passport = require('passport')
const app = express()

// Setup relations
require('./bootstrap')()

//Init
const sequelize = require('./config/connection')
const session = require('express-session')

// Models
const User = require('./Models/User')
const Publication = require('./Models/Publication')
const Image = require('./Models/Image')
const Local = require('./Models/Local')
const Save = require('./Models/Save')
const District = require('./Models/District')
const ReportType = require('./Models/ReportType')
const Report = require('./Models/Report')

//Store session in table session in the db
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sessionStore = new SequelizeStore({
	db: sequelize,
	collection: 'session',
})

//Use the session middleware
app.use(
	session({
		secret: process.env.JWT_SECRET,
		store: sessionStore,
		resave: false,
		saveUninitialized: true,
		cookie: {},
	})
)

//Sync tables with the database
sessionStore.sync()
User.sync()
ReportType.sync()
District.sync()
Local.sync()
Image.sync()
Publication.sync()
Save.sync()
Report.sync()

//Middlewares
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Auth
require('./auth/passport')
app.use(passport.initialize())
app.use(passport.session())
// app.use((req, res, next) => {
// 	console.log(`\n\n${req.session}\n\n`)
// 	console.log(`\n\n${res.user}\n\n`)
// 	next()
// })

//Routes
app.use('/', require('./routes/index'))
app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))
app.use('/user', require('./routes/user'))
app.use('/pub', require('./routes/pub'))
app.use('/locals', require('./routes/locals'))
app.use('/dashboard', require('./routes/dashboard'))
app.use('/logout', require('./routes/logout'))

//View engine
app.set('view engine', 'ejs')

//Listener
const port = process.env.PORT
app.listen(port, () => console.log(`\n\nListening on port ${port}\n\n`))
