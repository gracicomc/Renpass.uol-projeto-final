const PersonService = require('../service/PersonService');

class PersonController {

	async create(req, res) {
		try {
			const result = await PersonService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json({
				message: 'Bad Request', 
				details: [{ 
					message: error.message 
				}] 
			});
		}
	}
}

module.exports = new PersonController ();