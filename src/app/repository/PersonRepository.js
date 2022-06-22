const PersonSchema = require('../schema/PersonSchema');
const GenericRepository = require('./GenericRepository');

class PersonRepository extends GenericRepository {
  constructor() {
    super(PersonSchema);
  }

  async list(payload) {
    const { limit = 10, page = 0, ...query } = payload;

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
      page: Number(page),
      limit: Number(limit),
      customLabels: paginate,
    };

    return PersonSchema.paginate(query, options);
  }

  authenticate(email) {
    return PersonSchema.findOne({ email });
  }
}

module.exports = new PersonRepository();
