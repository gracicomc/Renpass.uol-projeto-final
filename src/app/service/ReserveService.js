const ReserveRepository = require('../repository/ReserveRepository');

class ReserveService {
  async create(payload) {
    const result = await ReserveRepository.create(payload);
    if (!result) throw new Error();
    return result;
  }
}

module.exports = new ReserveService();
