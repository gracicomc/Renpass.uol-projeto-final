/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
const moment = require('moment');
const FleetRepository = require('../repository/FleetRepository');
const RentalRepository = require('../repository/RentalRepository');
const CarRepository = require('../repository/CarRepository');
const NotFoundId = require('../utils/Errors/NotFoundId');

class FleetService {
  async create(rentalId, payload) {
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new NotFoundId(rentalId);
    payload.id_rental = rentalId;

    const { id_car } = payload;
    const car = await CarRepository.getById(id_car);
    if (!car) throw new NotFoundId(id_car);

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
    if (!result) throw new NotFoundId(payload);
    return result;
  }

  async updateById(rentalId, id, payload) {
    payload.id_rental = rentalId;
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new NotFoundId(rentalId);

    if (payload.id_car) {
      const { id_car } = payload;
      const car = await CarRepository.getById(id_car);
      if (!car) throw new NotFoundId(id_car);
    }

    const result = await FleetRepository.updateById(id, payload);
    console.log(id);
    // if (!result) throw new NotFoundId(id);
    console.log(result);
    return result;
  }

  async deleteById(payload) {
    const result = await FleetRepository.deleteById(payload);
    if (!result) throw new NotFoundId(payload);
    return result;
  }
}
module.exports = new FleetService();
