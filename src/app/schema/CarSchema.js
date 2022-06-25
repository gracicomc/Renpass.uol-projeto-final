const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarSchema = new mongoose.Schema({
  model: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },

  type: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },

  brand: {
    type: String,
    trim: true,
    minlength: 2,
    required: true
  },

  color: {
    type: String,
    trim: true,
    minlength: 2,
    required: true
  },

  year: {
    type: Number,
    required: true
  },

  accessories: [
    {
      description: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
      }
    }
  ],

  passengersQtd: {
    type: Number,
    min: 1,
    required: true
  }
});

CarSchema.plugin(mongoosePaginate);

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;
