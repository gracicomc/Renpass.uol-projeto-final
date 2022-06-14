const CarSchema = require('../schema/CarSchema');

class CarRepository {
	async create(payload) {
		return CarSchema.create(payload);
	}

	async list(payload) {
		const { page, perPage } = payload;

		const paginate = {
			totalDocs: 'total',
			docs: 'vehicles',
			page: 'offset',
			totalPages: 'offsets',
			nextPage: false,
			prevPage: false,
			pagingCounter: false,
			meta: false,
			hasPrevPage: false,
			hasNextPage: false,
		};
		const options = {
			page: parseInt(page, 10) || 5,
			limit: parseInt(perPage, 10) || 10,
			offset: 1,
			customLabels: paginate,
		};
		return CarSchema.paginate(payload, options, {});
	}

	async getById(payload) {
		return CarSchema.findById(payload);
	}

	async patchCar(id, payload) {
		return CarSchema.findByIdAndUpdate(id, payload);
	}

	async patchAccessories(accessoriesId, update) {
		return CarSchema.findOneAndUpdate(
			{ 'accessories._id': accessoriesId },
			{
				$set: {
					'accessories.$.description': update.description,
				},
			},
		);
	}

	async deleteCar(payload) {
		return CarSchema.findByIdAndDelete(payload);
	}
}

module.exports = new CarRepository();
