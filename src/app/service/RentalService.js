const RentalRepository = require('../repository/RentalRepository');

class RentalService {
	async create(payload) {
		const result = RentalRepository.create(payload);
		return result;
	}

	async list(payload) {
		const result = RentalRepository.list(payload);
		return result;
	}
}

module.exports = new RentalService();