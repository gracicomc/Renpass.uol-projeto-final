const RentalRepository = require('../repository/RentalRepository');
const NotFoundId = require('../utils/Errors/personErrors/NotFoundId');

class RentalService {
	async create(payload) {
		const result = RentalRepository.create(payload);
		return result;
	}

	async list(payload) {
		const result = RentalRepository.list(payload);
		return result;
	}

	async getById(payload) {
		const result = RentalRepository.getById(payload);
		if(!result) throw new NotFoundId(payload);
		return result;
	}
}

module.exports = new RentalService();