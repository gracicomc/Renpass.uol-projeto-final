const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { status } = require('../utils/enums');

const FleetSchema = new mongoose.Schema({
  id_car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  id_rental: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rental'
  },
  status: {
    type: String,
    enum: [...status],
    required: true
  },
  daily_value: {
    type: Number,
    required: true
  },
  plate: {
    type: String,
    unique: true,
    required: true
  }
});

FleetSchema.plugin(mongoosePaginate);

const Fleet = mongoose.model('Fleet', FleetSchema);
module.exports = Fleet;
