const CarRepository = require('../repository/CarRepository');
const NotFoundId = require('../utils/Errors/NotFoundId');

class CarService {
  // Create Car
  async create(payload) {
    const result = await CarRepository.create(payload);
    if (!result) throw new Error();
    return result;
  }

  // List Cars
  async list(payload) {
    const result = await CarRepository.list(payload);
    if (!result) throw new Error();
    return result;
  }

  // List an especific car by ID
  async getById(payload) {
    const result = await CarRepository.getById(payload);
    if (!result) throw new NotFoundId(payload);
    return result;
  }

  // Update some car by ID
  async updateById(id, payload) {
    const result = await CarRepository.updateById(id, payload);
    if (!result) throw new NotFoundId(id);
    return result;
  }

  async patchAccessories(id, accessoriesId, payload) {
    const result = await CarRepository.patchAccessories(
      id,
      accessoriesId,
      payload
    );
    if (!result) throw new NotFoundId(id);
    return result;
  }

  // Delete car by ID
  async deleteById(payload) {
    const result = await CarRepository.deleteById(payload);
    if (!result) throw new NotFoundId(payload);
    return result;
  }
}

module.exports = new CarService();
