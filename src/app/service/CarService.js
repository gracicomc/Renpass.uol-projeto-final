const CarRepository = require('../repository/CarRepository');
// const Car = require('../schema/Carschema');

class CarService {

	async create(payload) {
		const result = await CarRepository.create(payload);
		return result;
	}

	async list(payload) {
		const result = await CarRepository.list(payload);
		return result;
	}
}

module.exports = new CarService();