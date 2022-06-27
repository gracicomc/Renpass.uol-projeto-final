const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const mongoosePaginate = require('mongoose-paginate-v2');
const { yesOrNo } = require('../utils/enums');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 40,
    required: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  birthDay: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    minlength: 10,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  canDrive: {
    type: String,
    required: true,
    enum: [...yesOrNo]
  }
});

PersonSchema.pre('save', async function encrypt(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

PersonSchema.plugin(mongoosePaginate);

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
