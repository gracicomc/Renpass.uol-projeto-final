const CarService = require('../service/CarService');

class CarController {

	async create(req, res) {
		try {
			const result = await CarService.create(req.body);
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

module.exports = new CarController ();