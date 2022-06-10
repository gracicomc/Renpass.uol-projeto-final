const RentalService = require('../service/RentalService');

class RentalController {

	async create(req, res) {
		try {
			const result = await RentalService.create(req.body);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json({statusCode: error.statusCode, description: error.description, error: error.message });
		}
	}
}

module.exports = new RentalController();