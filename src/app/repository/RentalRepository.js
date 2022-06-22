/* eslint-disable node/no-unsupported-features/es-syntax */
const RentalSchema = require('../schema/RentalSchema');
const GenericRepository = require('./GenericRepository');

class RentalRepository extends GenericRepository {
  constructor() {
    super(RentalSchema);
  }

  async list(payload) {
    const { limit = 10, page = 0, ...query } = payload;

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
      page: Number(page),
      limit: Number(limit),
      customLabels: paginate,
    };

    return RentalSchema.paginate(query, options);
  }
}
module.exports = new RentalRepository();
