const PersonSchema = require('../schema/Personschema');

class PersonRepository {
	create(payload) {
		return PersonSchema.create(payload);
	}

	list(payload) {
		return PersonSchema.find(payload);
	}

	updatePerson(payload) {
		return PersonSchema.findByIdAndUpdate(payload);
	}
}

module.exports = new PersonRepository();