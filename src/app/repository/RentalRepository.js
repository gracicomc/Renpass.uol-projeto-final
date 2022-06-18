/* eslint-disable node/no-unsupported-features/es-syntax */
const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
  create(payload) {
    return RentalSchema.create(payload);
  }

  list(payload) {
    const { limit = 10, offset = 1, ...query } = payload;

    const paginate = {
      totalDocs: 'total',
      docs: 'rentals',
      offset: 'offset',
      totalPages: 'offsets',
      nextPage: false,
      prevPage: false,
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false,
    };
    const options = {
      offset: Number(offset),
      limit: Number(limit),
      customLabels: paginate,
    };

    return RentalSchema.paginate(query, options);
  }

  getById(payload) {
    return RentalSchema.findById(payload);
  }

  patchRental(id, payload) {
    return RentalSchema.findByIdAndUpdate(id, payload, {
      new: true,
    });
  }

  deleteRental(payload) {
    return RentalSchema.findByIdAndDelete(payload);
  }
}

module.exports = new RentalRepository();
