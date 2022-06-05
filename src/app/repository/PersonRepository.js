const PersonSchema = require('../schema/Personschema');

class PersonRepository {
	create(payload) {
		return PersonSchema.create(payload);
	}

	list(payload) {
		const paginate = {
			totalDocs: 'total',
			docs: 'people',
			page: 'offset',
			totalPages: 'offsets',
			nextPage: false,
			prevPage: false,
			pagingCounter: false,
			meta: false,
			hasPrevPage: false,
			hasNextPage: false
		};
		const options = {
			offset: 1,
			limit:100,
			customLabels: paginate 
		};
		return PersonSchema.paginate(payload, options, {});
	}

	getById(payload) {
		return PersonSchema.findById(payload);
	}

	patchPerson(id, payload) {
		return PersonSchema.findByIdAndUpdate(id, payload);
	}

	deletePerson(payload) {
		return PersonSchema.findByIdAndDelete(payload);
	}

	authenticate(email) {
		return PersonSchema.findOne({ email });
	}
}

module.exports = new PersonRepository();