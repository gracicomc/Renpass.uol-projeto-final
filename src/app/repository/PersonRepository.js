const PersonSchema = require('../schema/Personschema');

class PersonRepository {
	create(payload) {
		return PersonSchema.create(payload);
	}
}

module.exports = new PersonRepository();