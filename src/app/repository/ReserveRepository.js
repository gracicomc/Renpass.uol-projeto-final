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
}
module.exports = new ReserveRepository();
