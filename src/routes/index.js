const { Router } = require('express');
const people = require('./person.router');
const car = require('./car.router');

module.exports = (server) => {
	server.use((req, res, next) => {
		people(server, new Router());
		car(server, new Router());
		next();
	});
};