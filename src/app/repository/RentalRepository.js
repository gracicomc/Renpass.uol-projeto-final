const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
	create(payload) {
		return RentalSchema.create(payload);
	}

	list(payload) {
		return RentalSchema.find(payload);
	}
}

module.exports = new RentalRepository();