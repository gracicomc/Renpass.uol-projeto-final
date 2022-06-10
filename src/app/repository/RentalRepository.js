const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
	create(payload) {
		return RentalSchema.create(payload);
	}
}

module.exports = new RentalRepository();