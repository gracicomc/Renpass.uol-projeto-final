const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const mongoosePaginate = require('mongoose-paginate-v2');
const uniqueValidator = require('mongoose-unique-validator');

const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
      unique: true,
    },
    birthDay: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      // select: false,
      required: true,
    },
    canDrive: {
      type: String,
      required: true,
      enum: ['yes', 'no'],
    },
  },
  {
    versionKey: false,
  }
);

PersonSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

PersonSchema.plugin(mongoosePaginate);

PersonSchema.plugin(uniqueValidator, {
  message: 'this {PATH} already exist',
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
