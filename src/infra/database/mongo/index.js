const mongoose = require('mongoose');
const config = require('../../../config/config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(
      process.env.MONGO_URL ||
        `mongodb://${config.database.host}/${config.database.collection}`
    );
  }
}

module.exports = new Database().connect();
