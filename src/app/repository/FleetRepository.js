const FleetSchema = require('../schema/FleetSchema');

class FleetRepository {
  async create(payload) {
    return FleetSchema.create(payload);
  }

  async list(payload) {
    const { limit = 10, page = 0, ...query } = payload;

    const paginate = {
      totalDocs: 'total',
      docs: 'fleets',
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

    return FleetSchema.paginate(query, options);
  }

  async getById(payload) {
    return FleetSchema.findById(payload);
  }

  async patchFleet(id, payload) {
    return FleetSchema.findByIdAndUpdate(id, payload, {
      new: true,
    });
  }

  async deleteFleet(payload) {
    return FleetSchema.findByIdAndDelete(payload);
  }
}
module.exports = new FleetRepository();
