/* eslint-disable node/no-unsupported-features/es-syntax */
const PersonSchema = require('../schema/PersonSchema');
const GenericRepository = require('./GenericRepository');

class PersonRepository extends GenericRepository {
  constructor() {
    super(PersonSchema);
  }

  authenticate(email) {
    return PersonSchema.findOne({ email });
  }
}

module.exports = new PersonRepository();
