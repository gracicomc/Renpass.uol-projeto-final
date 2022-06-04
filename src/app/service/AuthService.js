const bcrypt = require('bcrypt');
const PersonRepository = require('../repository/PersonRepository');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

class AuthService {
	async authenticate(email, password) {
		const person = await PersonRepository.authenticate(email);

		if (!person) throw new Error('person not found');

		if (!await bcrypt.compare(password, person.password))
			throw new Error('invalid password');

		const token = jwt.sign({ id: person.id}, 
			authConfig.secret, {
				expiresIn: 86400,
			});
		const result = await PersonRepository.authenticate(email, password);
		return {result, token}; 
	}
}

module.exports = new AuthService();