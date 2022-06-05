const AuthService = require('../service/AuthService');

class AuthController {
	async authenticate(req, res) {
		try {
			const { email, password } = await req.body;
			const result = await AuthService.authenticate(email, password);
			

			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json({description: error.description, Error: error.message});
		}
	}
}
module.exports = new AuthController();