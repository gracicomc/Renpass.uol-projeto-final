const PeopleController = require('');

module.exports = (server, routes, prefix='/api/v1/people') => {
	routes.post('/', PeopleController.create);
	routes.get('/', PeopleController.list);
	routes.get('/:id', PeopleController.getById);
	routes.put('/:id', PeopleController.update);
	routes.delete('/:id', PeopleController.deleteById);

	server.use(prefix, routes);
};