/* eslint-disable node/no-unsupported-features/es-syntax */
const RentalSchema = require('../schema/RentalSchema');
const GenericRepository = require('./GenericRepository');

class RentalRepository extends GenericRepository {
  constructor() {
    super(RentalSchema);
  }
}
module.exports = new RentalRepository();
