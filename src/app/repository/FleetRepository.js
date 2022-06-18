const FleetSchema = require('../schema/FleetSchema');

class FleetRepository {
  async create(payload) {
    return FleetSchema.create(payload);
  }

  async list(payload) {
    return FleetSchema.find(payload);
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
