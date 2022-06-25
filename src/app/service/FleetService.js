const FleetRepository = require('../repository/FleetRepository');
const RentalRepository = require('../repository/RentalRepository');
const CarRepository = require('../repository/CarRepository');
const NotFound = require('../Errors/NotFound');
const BadRequest = require('../Errors/BadRequest');

class FleetService {
  async create(rentalId, payload) {
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new NotFound(`The Rental ID '${rentalId}' is not registered`);
    payload.id_rental = rentalId;

    const { id_car } = payload;
    const car = await CarRepository.getById(id_car);
    if (!car) throw new NotFound(`The Car ID ${id_car} is not registered.`);

    const result = await FleetRepository.create(payload);
    if (!result) throw new BadRequest(`Unable to create a Fleet`);
    return result;
  }

  async list(payload) {
    const result = await FleetRepository.list(payload);
    if (!result) throw new BadRequest(`Unable to list a Fleet`);
    return result;
  }

  async getById(payload) {
    const result = await FleetRepository.getById(payload);
    if (!result) throw new NotFound(`The Fleet ID '${payload}' is not registered`);
    return result;
  }

  async updateById(rentalId, id, payload) {
    payload.id_rental = rentalId;
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new NotFound(`The Rental ID '${rentalId}' is not registered`);

    if (payload.id_car) {
      const { id_car } = payload;
      const car = await CarRepository.getById(id_car);
      if (!car) throw new NotFound(`The Car ID '${id_car}' is not registered`);
    }

    const result = await FleetRepository.updateById(id, payload);
    if (!result) throw new NotFound(`The Fleet ID '${payload}' is not registered`);
    return result;
  }

  async deleteById(payload) {
    const result = await FleetRepository.deleteById(payload);
    if (!result) throw new NotFound(`The Fleet ID '${payload}' is not registered`);
    return result;
  }
}
module.exports = new FleetService();
