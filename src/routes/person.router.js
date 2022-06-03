const PersonController = require('../app/controller/PersonController');

module.exports = (server, routes, prefix='/api/v1/person') => {
	routes.post('/', PersonController.create);
	routes.get('/', PersonController.list);
	routes.get('/:id', PersonController.getById);
	routes.patch('/:id', PersonController.patchPerson);
	routes.delete('/:id', PersonController.deletePerson);

	server.use(prefix, routes);
};