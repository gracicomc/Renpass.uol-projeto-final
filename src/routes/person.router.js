const PersonController = require('../app/controller/PersonController');
const createPerson = require('../app/validations/validPerson/createPerson');
const authMiddleware = require('../app/middlewares/auth');

module.exports = (server, routes, prefix = '/api/v1/person') => {
	routes.use(authMiddleware);
	routes.post('/', createPerson, PersonController.create);
	routes.get('/', PersonController.list);
	routes.get('/:id', PersonController.getById);
	routes.patch('/:id', PersonController.patchPerson);
	routes.delete('/:id', PersonController.deletePerson);

	server.use(prefix, routes);
};
