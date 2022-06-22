const ReserveSchema = require('../schema/ReserveSchema');
const GenericRepository = require('./GenericRepository');

class ReserveRepository extends GenericRepository {
  constructor() {
    super(ReserveSchema);
  }

  async list(payload) {
    const { limit = 10, page = 0, ...query } = payload;

    const paginate = {
      totalDocs: 'total',
      docs: 'reserves',
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

    return ReserveSchema.paginate(query, options);
  }
}
module.exports = new ReserveRepository();
