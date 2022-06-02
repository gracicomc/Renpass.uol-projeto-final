const CarSchema = require('../schema/Carschema');

class CarRepository {
	create(payload) {
		return CarSchema.create(payload);
	}
}

module.exports = new CarRepository();