const ReserveSchema = require('../schema/ReserveSchema');

class ReserveRepository {
  async create(payload) {
    return ReserveSchema.create(payload);
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

  async getById(payload) {
    return ReserveSchema.findById(payload);
  }

  async patchReserve(id, payload) {
    return ReserveSchema.findByIdAndUpdate(id, payload, {
      new: true,
    });
  }

  async deleteReserve(id) {
    return ReserveSchema.findByIdAndDelete(id);
  }
}
module.exports = new ReserveRepository();
