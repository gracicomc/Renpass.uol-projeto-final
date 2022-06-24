const CarRepository = require('../repository/CarRepository');
const NotFound = require('../Errors/NotFound');

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
    if (!result) throw new NotFound(`The Car ID '${payload}' is not registered`);
    return result;
  }

  // Update some car by ID
  async updateById(id, payload) {
    const result = await CarRepository.updateById(id, payload);
    if (!result) throw new NotFound(`The Car ID '${id}' is not registered`);
    return result;
  }

  async patchAccessories(id, accessoriesId, payload) {
    if (payload.id) {
      const car = CarRepository.list({ id });
      if (!car) throw new NotFound(`The Car ID '${id}' is not registered`);
    }
    const result = await CarRepository.patchAccessories(id, accessoriesId, payload);
    if (!result) throw new NotFound(`The Accessory ID '${accessoriesId}' is not registered`);
    return result;
  }

  // Delete car by ID
  async deleteById(payload) {
    const result = await CarRepository.deleteById(payload);
    if (!result) throw new NotFound(`The Car ID '${payload}' is not registered`);
    return result;
  }
}

module.exports = new CarService();
