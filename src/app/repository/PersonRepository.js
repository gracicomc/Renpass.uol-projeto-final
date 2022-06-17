const PersonSchema = require('../schema/PersonSchema');

class PersonRepository {
  create(payload) {
    return PersonSchema.create(payload);
  }

  list(payload) {
    const { page, perPage } = payload;

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
      hasNextPage: false,
    };
    const options = {
      page: parseInt(page, 10) || 5,
      limit: parseInt(perPage, 10) || 10,
      offset: 1,
      customLabels: paginate,
    };

    return PersonSchema.paginate(payload, options, {});
  }

  getById(payload) {
    return PersonSchema.findById(payload);
  }

  patchPerson(id, payload) {
    return PersonSchema.findByIdAndUpdate(id, payload, {
      returnOriginal: false,
    });
  }

  deletePerson(payload) {
    return PersonSchema.findByIdAndDelete(payload);
  }

  authenticate(email) {
    return PersonSchema.findOne({ email });
  }
}

module.exports = new PersonRepository();
