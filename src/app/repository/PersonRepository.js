/* eslint-disable node/no-unsupported-features/es-syntax */
const PersonSchema = require('../schema/PersonSchema');

class PersonRepository {
  create(payload) {
    return PersonSchema.create(payload);
  }

  list(payload) {
    const { limit = 10, offset = 1, ...query } = payload;

    const paginate = {
      totalDocs: 'total',
      docs: 'users',
      offset: 'offset',
      totalPages: 'offsets',
      nextPage: false,
      prevPage: false,
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false,
    };
    const options = {
      offset: Number(offset),
      limit: Number(limit),
      customLabels: paginate,
    };

    return PersonSchema.paginate(query, options);
  }

  getById(payload) {
    return PersonSchema.findById(payload);
  }

  patchPerson(id, payload) {
    return PersonSchema.findByIdAndUpdate(id, payload, {
      new: true,
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
