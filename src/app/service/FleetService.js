/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
const moment = require('moment');
const FleetRepository = require('../repository/FleetRepository');
const RentalRepository = require('../repository/RentalRepository');
const CarRepository = require('../repository/CarRepository');

class FleetService {
  async create(rentalId, payload) {
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new Error(`This Rental ID doesn't exist`);
    payload.id_rental = rentalId;

    const { id_car } = payload;
    const car = await CarRepository.getById(id_car);
    if (!car) throw new Error(`This Car Id doesn't exist`);

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
