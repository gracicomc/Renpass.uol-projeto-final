/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable no-shadow */
const CarSchema = require('../schema/CarSchema');
const GenericRepository = require('./GenericRepository');

class CarRepository extends GenericRepository {
  constructor() {
    super(CarSchema);
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
