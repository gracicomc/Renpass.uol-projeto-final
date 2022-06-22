const CarSchema = require('../schema/CarSchema');
const GenericRepository = require('./GenericRepository');

class CarRepository extends GenericRepository {
  constructor() {
    super(CarSchema);
  }

  async list(payload) {
    const { limit = 10, page = 0, ...query } = payload;

    const paginate = {
      totalDocs: 'total',
      docs: 'vehicles',
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

    return CarSchema.paginate(query, options);
  }

  async patchAccessories(id, accessoriesId, payload) {
    const result = await CarSchema.findOneAndUpdate(
      {
        _id: id,
        'accessories._id': accessoriesId,
      },
      {
        $set: {
          'accessories.$.description': payload.description,
        },
      },
      { new: true }
    );
    return result;
  }
}

module.exports = new CarRepository();
