const CarRepository = require('../repository/CarRepository');
const NotFoundId = require('../utils/Errors/carErrors/NotFoundId');

class CarService {
	//Create Car
	async create(payload) {
		const result = await CarRepository.create(payload);
		if(!result) throw new Error;
		return result;
	}

	//List Cars
	async list(payload) {
		const result = await CarRepository.list(payload);
		if(!result) throw new Error;
		return result;
	}

	//List an especific car by ID
	async getById(payload) {
		const result = await CarRepository.getById(payload);
		if(!result) throw new NotFoundId(payload);
		return result;
	}

	//Update some car by ID
	async patchCar(id, payload) {
		const result = await CarRepository.patchCar(id, payload);
		if(!result) throw new NotFoundId(id);
		return result;
	}

	// Delete car by ID
	async deleteCar(payload) {
		const result = await CarRepository.deleteCar(payload);
		if(!result) throw new NotFoundId;
		return result;
	}
}

module.exports = new CarService();