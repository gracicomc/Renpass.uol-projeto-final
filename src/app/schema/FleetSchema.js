const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const uniqueValidator = require('mongoose-unique-validator');

const FleetSchema = new mongoose.Schema(
  {
    id_car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: true,
    },
    id_rental: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rental',
    },
    status: {
      type: String,
      enum: ['available', 'unavailable', 'rented'],
      required: true,
    },
    daily_value: {
      type: Number,
      required: true,
    },
    plate: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { versionKey: false }
);

FleetSchema.plugin(mongoosePaginate);

FleetSchema.plugin(uniqueValidator, {
  message: 'this {PATH} already exist',
});

const Fleet = mongoose.model('Fleet', FleetSchema);
module.exports = Fleet;
