if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


//Modules


const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mysql = require('mysql')
const passport = require('passport')
const initializePassport = require('./passportConfig')
const flash = require('express-flash')
const override = require('method-override')
const session = require('express-session')
const reg = require('./routes/register')
const db = require('./bd')
require('dotenv').config()				

const app = express()


//Middlewares
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/img', express.static(path.join(__dirname, 'public/img')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
		allowedHeaders:
			'Content-Type, Authorization, Origin, X-Requested-With, Accept',
	})
)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(flash())
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
)
app.use(passport.initialize())
app.use(passport.session())
app.use(override('_method'))


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
app.listen(port, () => console.log(`Listening on port ${port}`))

