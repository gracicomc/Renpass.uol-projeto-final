const CarRepository = require('../repository/CarRepository');
// const Car = require('../schema/Carschema');

class CarService {

	//Create Car
	async create(payload) {
		const result = await CarRepository.create(payload);
		return result;
	}

	//List Cars
	async list(payload) {
		const result = await CarRepository.list(payload);
		return result;
	}

	//List an especific car by ID
	async getById(payload) {
		const result = await CarRepository.getById(payload);
		return result;
	}

	//Update some car by ID
	async updateCar(payload) {
		const result = await CarRepository.updateCar(payload);
		return result;
	}

	// Delete car by ID
	async deleteCar(payload) {
		const result = await CarRepository.deleteCar(payload);
		return result;
	}
}

module.exports = new CarService();