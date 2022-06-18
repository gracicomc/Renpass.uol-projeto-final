/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable no-shadow */
const { query } = require('express');
const CarSchema = require('../schema/CarSchema');

class CarRepository {
  async create(payload) {
    return CarSchema.create(payload);
  }

  async list(payload) {
    const { limit = 10, offset = 1, ...query } = payload;

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
      offset: Number(offset),
      limit: Number(limit),
      customLabels: paginate,
    };
    return CarSchema.paginate(query, options);
  }

  async getById(payload) {
    return CarSchema.findById(payload);
  }

  async patchCar(id, payload) {
    return CarSchema.findByIdAndUpdate(id, payload, {
      new: true,
    });
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

  async deleteCar(payload) {
    return CarSchema.findByIdAndDelete(payload);
  }
}

module.exports = new CarRepository();
