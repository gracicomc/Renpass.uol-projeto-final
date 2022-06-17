const FleetRepository = require('../repository/FleetRepository');

class FleetService {
  async create(payload) {
    const result = await FleetRepository.create(payload);
    if (!result) throw new Error();
    return result;
  }
}
module.exports = new FleetService();
