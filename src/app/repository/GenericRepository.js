/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable no-unused-vars */
class GenericRepository {
  constructor(schema) {
    this.schema = schema;
  }

  async create(payload) {
    return this.schema.create(payload);
  }

  async list(payload) {
    const { limit = 10, page = 0, ...query } = payload;

    const paginate = {
      totalDocs: 'total',
      docs: 'docs',
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

    return this.schema.paginate(query, options);
  }

  async getById(payload) {
    return this.schema.findById(payload);
  }

  async updateById(payload, body) {
    return this.schema.findByIdAndUpdate(payload, body, {
      new: true,
    });
  }

  async deleteById(payload) {
    return this.schema.findByIdAndDelete(payload);
  }
}

module.exports = GenericRepository;
