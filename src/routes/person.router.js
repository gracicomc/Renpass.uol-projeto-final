const PersonController = require('../app/controller/PersonController');

module.exports = (server, routes, prefix='/api/v1/person') => {
	routes.post('/', PersonController.create);
	routes.get('/', PersonController.list);
	routes.get('/:id', PersonController.getById);
	routes.put('/:id', PersonController.updatePerson);
	routes.delete('/:id', PersonController.deletePerson);

	server.use(prefix, routes);
};