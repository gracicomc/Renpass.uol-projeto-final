/* eslint-disable no-undef */
const mongoose = require('mongoose');
const config = require('../../../config/config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(config.database.mongoUrl);
  }

  disconnect() {
    return mongoose.connection.close();
  }
}

module.exports = new Database().connect();
