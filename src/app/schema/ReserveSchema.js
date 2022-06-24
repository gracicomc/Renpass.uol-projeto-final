const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ReserveSchema = new mongoose.Schema({
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true
  },
  date_start: {
    type: String,
    required: true
  },
  date_end: {
    type: String,
    required: true
  },
  id_car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  id_rental: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rental'
  },
  final_value: {
    type: String,
    required: true
  }
});

ReserveSchema.plugin(mongoosePaginate);

const Reserve = mongoose.model('Reserve', ReserveSchema);
module.exports = Reserve;
