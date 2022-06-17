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
}
module.exports = new FleetRepository();
