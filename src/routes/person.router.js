const PersonController = require('');

module.exports = (server, routes, prefix='/api/v1/person') => {
	routes.post('/', PersonController.create);
	routes.get('/', PersonController.list);
	routes.get('/:id', PersonController.getById);
	routes.put('/:id', PersonController.update);
	routes.delete('/:id', PersonController.deleteById);

	server.use(prefix, routes);
};