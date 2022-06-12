const dotenv = require('dotenv');

dotenv.config({
	path: process.env.NODE_ENV,
});

module.exports = {
	database: {
		host: process.env.DB_HOST,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		collection: process.env.DB_COLLECTION,
	},
};
