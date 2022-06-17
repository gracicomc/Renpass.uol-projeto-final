const ReserveSchema = require('../schema/ReserveSchema');

class ReserveRepository {
  async create(payload) {
    return ReserveSchema.create(payload);
  }

  async list(payload) {
    return ReserveSchema.find(payload);
  }

  async getById(payload) {
    return ReserveSchema.findById(payload);
  }

  async patchReserve(id, payload) {
    return ReserveSchema.findByIdAndUpdate(id, payload);
  }

  async deleteReserve(id) {
    return ReserveSchema.findByIdAndDelete(id);
  }
}
module.exports = new ReserveRepository();
