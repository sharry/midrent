const passport = require('passport')
// const passportJwt = require('passport-jwt')
// const User = require('../Models/User')

// const ExtractJwt = passportJwt.ExtractJwt
// const JwtStrategy = passportJwt.Strategy
// passport.use(
// 	new JwtStrategy(
// 		{
// 			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// 			secretOrKey: process.env.JWT_SECRET,
// 		},
// 		(payload, done) => {
// 			return User.findOne({ where: { id: payload.id } })
// 				.then((user) => {
// 					return done(null, user)
// 				})
// 				.catch((err) => {
// 					return done(err)
// 				})
// 		}
// 	)
// )
const LocalStrategy = require('passport-local')
const User = require('../Models/User')
const bcrypt = require('bcrypt')

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		(email, password, done) => {
			User.findOne({ where: { email: email } })
				.then((user) => {
					if (!user) return done(null, false)
					bcrypt.compare(password, user.hashedPassword, (error, result) => {
						if (error) console.log(error)
						if (result) {
							return done(null, user)
						} else {
							return done(null, false)
						}
					})
				})
				.catch((err) => {
					return done(err)
				})
		}
	)
)

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((userId, done) => {
	User.findOne({ where: { id: userId } })
		.then((user) => {
			done(null, user)
		})
		.catch((err) => {
			done(err)
		})
})
