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
		if (!result) throw new NotFoundId(payload);
		return result;
	}

	async patchRental(id, payload) {
		const result = RentalRepository.patchRental(id, payload);
		if (!result) throw new NotFoundId(id);
		return result;
	}

	async deleteRental(id) {
		const result = RentalRepository.deleteRental(id);
		if (!result) throw new NotFoundId(id);
		return result;
	}
}

module.exports = new RentalService();
