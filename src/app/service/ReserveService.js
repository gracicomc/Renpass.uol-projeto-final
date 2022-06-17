const ReserveRepository = require('../repository/ReserveRepository');

class ReserveService {
  async create(payload) {
    const result = await ReserveRepository.create(payload);
    if (!result) throw new Error();
    return result;
  }

  async list(payload) {
    const result = await ReserveRepository.list(payload);
    if (!result) throw new Error();
    return result;
  }

  async getById(payload) {
    const result = await ReserveRepository.getById(payload);
    if (!result) throw new Error();
    return result;
  }

  async patchReserve(id, payload) {
    const result = await ReserveRepository.patchReserve(id, payload);
    if (!result) throw new Error();
    return result;
  }

  async deleteReserve(payload) {
    const result = await ReserveRepository.deleteReserve(payload);
    if (!result) throw new Error();
    return result;
  }
}

module.exports = new ReserveService();
