/* eslint-disable no-param-reassign */
const FleetRepository = require('../repository/FleetRepository');
const RentalRepository = require('../repository/RentalRepository');

class FleetService {
  async create(rentalId, payload) {
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new Error(`This Rental ID doesn't exist`);
    payload.id_rental = rentalId;

    const result = await FleetRepository.create(payload);
    if (!result) throw new Error();
    return result;
  }

  async list(payload) {
    const result = await FleetRepository.list(payload);
    if (!result) throw new Error();
    return result;
  }

  async getById(payload) {
    const result = await FleetRepository.getById(payload);
    if (!result) throw new Error();
    return result;
  }

  async patchFleet(id, payload) {
    const result = await FleetRepository.patchFleet(id, payload);
    if (!result) throw new Error();
    return result;
  }

  async deleteFleet(payload) {
    const result = await FleetRepository.deleteFleet(payload);
    if (!result) throw new Error();
    return result;
  }
}
module.exports = new FleetService();
