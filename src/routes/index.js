const { Router } = require('express');
const people = require('./person.router');
const car = require('./car.router');
const authenticate = require('./auth.router'); 
const apiDocs = require('./api-docs.router');

module.exports = (server) => {
	server.use((req, res, next) => {
		people(server, new Router());
		car(server, new Router());
		authenticate(server, new Router());
		apiDocs(server, new Router());
		next();
	});
};