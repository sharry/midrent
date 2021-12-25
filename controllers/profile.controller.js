const User = require('../Models/User')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')
module.exports = {
	get: (req, res) => {
		if (req.isAuthenticated()) {
			const user = req.user
			res.render('profile', { user })
		} else {
			res.redirect('/')
		}
	},
	post: async (req, res) => {
		//get the form entries
		const {
			email,
			password,
			passwordConfirm,
			sex,
			firstName,
			lastName,
			birthDate,
			phone,
		} = req.body
		let photoUrl = req.file
		if (photoUrl === null) {
			sex === 'm'
				? 'https://i.ibb.co/rZXYkFn/male.png'
				: 'https://i.ibb.co/bWXsqhy/female.png'
		} else {
			photoUrl = photoUrl.path
		}
		//Handel errors
		let errors = []
		//Password must have more than 6 characters

		if (password.length < 6 && password.length != 0)
			errors.push({ msg: 'Le mot de passe est très court' })
		//Password and its confirmation must be the same
		if (password !== passwordConfirm)
			errors.push({
				msg: 'Le mot de passe et sa confirmation ne sont pas identiques',
			})

		//Render back the page with errors
		if (errors.length > 0) {
			return res.render('profile', {
				errors,
				email,
				password,
				passwordConfirm,
				sex,
				firstName,
				lastName,
				birthDate,
				phone,
				photoUrl: photoUrl,
			})
		} else {
			// Add the user to the database
			let hashPassword = await bcrypt.hash(password, 10)
			let fNameArr = firstName.split(' ')
			for (var i = 0; i < fNameArr.length; i++) {
				fNameArr[i] = fNameArr[i].charAt(0).toUpperCase() + fNameArr[i].slice(1)
			}
			let fName = fNameArr.join(' ')
			const user = {
				id: 'u' + Date.now().toString(),
				email: email,
				hashedPassword: hashPassword,
				isMale: sex === 'm',
				firstName: fName,
				lastName: lastName.toUpperCase(),
				birthDate: birthDate,
				phone: phone,
				photoUrl: photoUrl,
			}

			const dbEmail = await User.findOne({ where: { email: email } })
			const dbPhone = await User.findOne({ where: { phone: phone } })
			let queryEmail = ''
			let queryPhone = ''

			//The email is unique problem
			if (dbEmail === null) queryEmail = "`email`= '" + user.email + "',"

			//The phone number is unique problem
			if (dbPhone === null) queryPhone = ", `phone`= '" + user.phone + "'"

			await sequelize
				.query(
					'UPDATE `users` SET ' +
						queryEmail +
						"`hashedPassword`='" +
						user.hashedPassword +
						"',`isMale`='" +
						user.isMale +
						"',`firstName`='" +
						user.firstName +
						"',`lastName`='" +
						user.lastName +
						"',`birthDate`='" +
						user.birthDate +
						"' " +
						queryPhone +
						" ,`photoUrl`='" +
						photoUrl +
						"' WHERE `id`='" +
						req.query.id +
						"'"
				)
				.catch((err) => {
					console.error('Error: ', err)
				})

			res.redirect('/profile')
		}
	},
}
