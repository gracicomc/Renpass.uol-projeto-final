const PersonSchema = require('../schema/Personschema');

class PersonRepository {
	create(payload) {
		return PersonSchema.create(payload);
	}

	list(payload) {
		return PersonSchema.find(payload);
	}

	getById(payload) {
		return PersonSchema.findById(payload);
	}

	updatePerson(payload) {
		return PersonSchema.findByIdAndUpdate(payload);
	}

	deletePerson(payload) {
		return PersonSchema.findByIdAndDelete(payload);
	}
}

module.exports = new PersonRepository();