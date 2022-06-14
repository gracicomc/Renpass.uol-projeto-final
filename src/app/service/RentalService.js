const axios = require('axios').default;
const RentalRepository = require('../repository/RentalRepository');
const NotFoundId = require('../utils/Errors/personErrors/NotFoundId');

class RentalService {
	async create(payload) {
		for (let index = 0; index < payload.address.length; index++) {
			const {
				cep, logradouro, complemento, bairro, localidade, uf,
			} = (await axios
				.get(`https://viacep.com.br/ws/${payload.address[index].zipCode}/json`)).data;
			payload.address[index].zipCode = cep;
			payload.address[index].street = logradouro;
			payload.address[index].complement = complemento;
			payload.address[index].district = bairro;
			payload.address[index].city = localidade;
			payload.address[index].state = uf;
		}

		const result = await RentalRepository.create(payload);
		return result;
	}

	async list(payload) {
		const result = RentalRepository.list(payload);
		return result;
	}

	async getById(payload) {
		const result = RentalRepository.getById(payload);
		if (!result) throw new NotFoundId(payload);
		return result;
	}

	async patchRental(id, payload) {
		const result = RentalRepository.patchRental(id, payload);
		if (!result) throw new NotFoundId(id);
		return result;
	}

	async deleteRental(id) {
		const result = RentalRepository.deleteRental(id);
		if (!result) throw new NotFoundId(id);
		return result;
	}
}

module.exports = new RentalService();
