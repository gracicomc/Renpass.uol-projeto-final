const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
	create(payload) {
		return RentalSchema.create(payload);
	}

	list(payload) {
		const {page, perPage} = payload;

		const paginate = {
			totalDocs: 'total',
			docs: 'rentals',
			page: 'offset',
			totalPages: 'offsets',
			nextPage: false,
			prevPage: false,
			pagingCounter: false,
			meta: false,
			hasPrevPage: false,
			hasNextPage: false
		};
		const options = {
			page: parseInt(page, 10) || 5,
			limit: parseInt(perPage, 10) || 10,
			offset: 1,
			customLabels: paginate 
		};
		return RentalSchema.paginate(payload, options, {});
	}

	getById(payload) {
		return RentalSchema.findById(payload);
	}

	patchRental(id, payload) {
		return RentalSchema.findByIdAndUpdate(id, payload);
	}

	deleteRental(payload) {
		return RentalSchema.findByIdAndDelete(payload);
	}
	
}

module.exports = new RentalRepository();