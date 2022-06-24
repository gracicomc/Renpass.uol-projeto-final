/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
const axios = require('axios').default;
const RentalRepository = require('../repository/RentalRepository');
const BadRequest = require('../Errors/BadRequest');
const NotFound = require('../Errors/NotFound');
const validCNPJ = require('../utils/validCNPJ');

class RentalService {
  async create(payload) {
    for (let index = 0; index < payload.address.length; index++) {
      const { cep, logradouro, complemento, bairro, localidade, uf } = (
        await axios.get(`https://viacep.com.br/ws/${payload.address[index].zipCode}/json`)
      ).data;
      payload.address[index].zipCode = cep;
      payload.address[index].street = logradouro;
      payload.address[index].complement = complemento;
      payload.address[index].district = bairro;
      payload.address[index].city = localidade;
      payload.address[index].state = uf;
    }

    if (!validCNPJ(payload.cnpj)) throw await new BadRequest(`This CNPJ doesn't exist. Try a valid CNPJ`);
    const result = await RentalRepository.create(payload);
    return result;
  }

  async list(payload) {
    const result = await RentalRepository.list(payload);

    return result;
  }

  async getById(id, payload) {
    const result = await RentalRepository.getById(id, payload);
    if (!result) throw new NotFound(`The Rental ID '${id}' is not registered`);

    return result;
  }

  async updateById(id, payload) {
    if (payload.cnpj) {
      if (!validCNPJ(payload.cnpj)) throw await new BadRequest(payload.cnpj);
    }
    const result = await RentalRepository.updateById(id, payload);
    if (!result) throw new NotFound(`The Rental ID '${id}' is not registered`);

    return result;
  }

  async deleteById(payload) {
    const result = await RentalRepository.deleteById(payload);
    if (!result) throw new NotFound(payload);

    return result;
  }
}

module.exports = new RentalService();
