const FleetSchema = require('../schema/FleetSchema');
const GenericRepository = require('./GenericRepository');

class FleetRepository extends GenericRepository {
  constructor() {
    super(FleetSchema);
  }

  async list(payload) {
    return FleetSchema.find(payload);
  }
}
module.exports = new FleetRepository();
