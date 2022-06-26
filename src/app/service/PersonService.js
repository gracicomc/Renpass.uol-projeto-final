const moment = require('moment');
const PersonRepository = require('../repository/PersonRepository');
const BadRequest = require('../Errors/BadRequest');
const NotFound = require('../Errors/NotFound');

class PersonService {
  async create(payload) {
    const ageFormated = moment(payload.birthDay, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const age = moment().diff(ageFormated, 'years');

    if (age < 18) throw new BadRequest(`User is under 18 years`);

    const result = await PersonRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await PersonRepository.list(payload);

    return result;
  }

  async getById(id, payload) {
    const result = await PersonRepository.getById(id, payload);
    if (!result) throw new NotFound(`The User ID '${id}' is not registered`);

    return result;
  }

  async updateById(id, payload) {
    const result = await PersonRepository.updateById(id, payload);
    if (!result) throw new NotFound(`The User ID '${id}' is not registered`);

    return result;
  }

  async deleteById(payload) {
    const result = await PersonRepository.deleteById(payload);
    if (!result) throw new NotFound(`The User ID '${payload}' is not registered`);

    return result;
  }
}

module.exports = new PersonService();
