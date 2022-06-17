const ReserveSchema = require('../schema/ReserveSchema');

class ReserveRepository {
  async create(id, rentalId, payload) {
    return ReserveSchema.create({
      _id: id,
      id_rental: rentalId,
      payload,
    });
  }

  async list(payload) {
    return ReserveSchema.find(payload);
  }

  async getById(payload) {
    return ReserveSchema.findById(payload);
  }

  async patchReserve(id, payload) {
    return ReserveSchema.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
  }

  async deleteReserve(id) {
    return ReserveSchema.findByIdAndDelete(id);
  }
}
module.exports = new ReserveRepository();
