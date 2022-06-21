/* eslint-disable no-undef */
const mongoose = require('mongoose');
const config = require('../../../config/config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(
      `mongodb+srv://admin:PDrk684TOHcAW7Wf@renpass.vebld.mongodb.net/?retryWrites=true&w=majority`,
      {
        dbName: 'test',
      }
    );
  }

  disconnect() {
    return mongoose.connection.close();
  }
}

module.exports = new Database().connect();
