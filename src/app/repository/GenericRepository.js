class GenericRepository {
  constructor(schema) {
    this.schema = schema;
  }

  async create(payload) {
    return this.schema.create(payload);
  }

  async getById(payload) {
    return this.schema.findById(payload);
  }

  async updateById(payload, body) {
    return this.schema.findByIdAndUpdate(payload, body, {
      new: true
    });
  }

  async deleteById(payload) {
    return this.schema.findByIdAndDelete(payload);
  }
}

module.exports = GenericRepository;
