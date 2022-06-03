const PersonRepository = require('../repository/PersonRepository');

class PersonService {

	async create(payload) {
		const result = await PersonRepository.create(payload);

		return result;
	}

	async list(payload) {
		const result = await PersonRepository.list(payload);

		return result;
	}

	async getById(payload) {
		const result = await PersonRepository.getById(payload);

		return result;
	}

	async updatePerson(payload) {
		const result = await PersonRepository.updatePerson(payload);
		
		return result;
	}

	async deletePerson(payload) {
		const result = await PersonRepository.deletePerson(payload);

		return result;
	}
} 

module.exports = new PersonService();