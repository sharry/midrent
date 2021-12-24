const User = require('../Models/User')
const bcrypt = require('bcrypt')

module.exports = {
	get: (req, res) => {
		if (req.isAuthenticated()) res.redirect('/')
		else res.render('register')
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

		//Handel errors
		let errors = []
		//Password must have more than 6 characters
		if (
			!email ||
			!password ||
			!passwordConfirm ||
			!sex ||
			!firstName ||
			!lastName ||
			!birthDate ||
			!phone
		)
			errors.push({ msg: 'Tous les champs sont obligatoires' })
		if (password.length < 6 && password.length != 0)
			errors.push({ msg: 'Le mot de passe est très court' })
		//Password and its confirmation must be the same
		if (password !== passwordConfirm)
			errors.push({
				msg: 'Le mot de passe et sa confirmation ne sont pas identiques',
			})
		//The email is unique
		const dbEmail = await User.findOne({ where: { email: email } })
		if (dbEmail !== null) {
			errors.push({
				msg: 'Ce email existe déjà.',
			})
		}
		//The phone number is unique
		const dbPhone = await User.findOne({ where: { phone: phone } })
		if (dbPhone !== null) {
			errors.push({
				msg: 'Ce numéro de téléphone existe déjà.',
			})
		}
		//Render back the page with errors
		if (errors.length > 0) {
			return res.render('register', {
				errors,
				email,
				password,
				passwordConfirm,
				sex,
				firstName,
				lastName,
				birthDate,
				phone,
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
				photoUrl:
					sex === 'm'
						? 'https://i.ibb.co/rZXYkFn/male.png'
						: 'https://i.ibb.co/bWXsqhy/female.png',
			}
			await User.create(user).catch((err) => {
				console.error('Error: ', err)
			})
			res.redirect('/login')
		}
	},
}
