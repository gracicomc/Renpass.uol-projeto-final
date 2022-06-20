const mongoose = require('mongoose');
const config = require('../../../config/config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(
      `mongodb+srv://deploy:KeXZptG4gKsgul7r@renpass.vebld.mongodb.net/?retryWrites=true&w=majority`
    );
  }
}

module.exports = new Database().connect();
