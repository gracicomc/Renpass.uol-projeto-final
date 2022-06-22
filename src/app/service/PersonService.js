const moment = require('moment');
const PersonRepository = require('../repository/PersonRepository');
const InvalidAge = require('../utils/Errors/personErrors/InvalidAge');
const NotFoundId = require('../utils/Errors/NotFoundId');
const validCPF = require('../utils/validCPF');

class PersonService {
  async create(payload) {
    // moment.suppressDeprecationWarnings = true;
    const ageFormated = moment(payload.birthDay, 'DD/MM/YYYY').format(
      'YYYY-MM-DD'
    );
    const age = moment().diff(ageFormated, 'years');
    // const validAge = moment().diff(payload.birthDay, 'years');
    if (age < 18) throw new InvalidAge(payload.age);

    if (!validCPF(payload.cpf))
      throw {
        message: `This CPF doesn't exist. Try a valid CPF`,
      };

    const result = await PersonRepository.create(payload);
    // result.password = undefined;
    return result;
  }

  async list(payload) {
    const result = await PersonRepository.list(payload);

    return result;
  }

  async getById(id, payload) {
    const result = await PersonRepository.getById(id, payload);
    if (!result) throw new NotFoundId(id);

    return result;
  }

  async updateById(id, payload) {
    const result = await PersonRepository.updateById(id, payload);

    if (payload.cpf) {
      if (!validCPF(payload.cpf))
        throw {
          message: `This CPF doesn't exist. Try a valid CPF`,
        };
    }

    if (!result) throw new NotFoundId(id);

    return result;
  }

  async deleteById(payload) {
    const result = await PersonRepository.deleteById(payload);
    if (!result) throw new NotFoundId(payload);

    return result;
  }
}

module.exports = new PersonService();
