const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'tests' ? '.env.test' : '.env'
});

module.exports = {
  database: {
    mongoUrl: process.env.MONGO_URL,
    dbName: process.env.DB_COLLECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  secret: process.env.SECRET
};
