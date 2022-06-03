const CarSchema = require('../schema/CarSchema');

class CarRepository {

	async create(payload) {
		return CarSchema.create(payload);
	}

	async list(payload) {
		return CarSchema.find(payload);
	}

	async getById(payload) {
		return CarSchema.findById(payload);
	}

	async updateCar(id, payload) {
		return CarSchema.findByIdAndUpdate(id, payload);
	}

	async deleteCar(payload) {
		return CarSchema.findByIdAndDelete(payload);
	}

}

module.exports = new CarRepository();