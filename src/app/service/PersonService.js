const moment = require('moment');
const PersonRepository = require('../repository/PersonRepository');
const InvalidAge = require('../utils/Errors/personErrors/InvalidAge');
const NotFoundId = require('../utils/Errors/personErrors/NotFoundId');

class PersonService {
	async create(payload) {
		moment.suppressDeprecationWarnings = true;
		// const ageFormated = moment(payload.birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
		// const age = moment().diff(ageFormated, 'years');
		const validAge = moment().diff(payload.birthDay, 'years');
		if (validAge < 18) throw new InvalidAge(payload.age);

		const result = await PersonRepository.create(payload);
		return result;
	}

	async list(payload) {
		const result = await PersonRepository.list(payload);

		return result;
	}

	async getById(payload) {
		const result = await PersonRepository.getById(payload);
		if (!result) throw new NotFoundId(payload);

		return result;
	}

	async patchPerson(id, payload) {
		const result = await PersonRepository.patchPerson(id, payload);
		if (!result) throw new NotFoundId(id);

		return result;
	}

	async deletePerson(payload) {
		const result = await PersonRepository.deletePerson(payload);
		if (!result) throw new NotFoundId();

		return result;
	}
}

module.exports = new PersonService();
