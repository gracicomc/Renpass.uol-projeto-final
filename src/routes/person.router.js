const PersonController = require('../app/controller/PersonController');

module.exports = (server, routes, prefix='/api/v1/person') => {
	routes.post('/', PersonController.create);
	routes.get('/', PersonController.list);
	
	routes.put('/:id', PersonController.updatePerson);

	server.use(prefix, routes);
};