const PersonController = require('../app/controller/PersonController');
const createPerson = require('../app/validations/validPerson/createPerson');
const authMiddleware = require('../app/middlewares/auth');

module.exports = (server, routes, prefix = '/api/v1/person') => {
	routes.post('/', createPerson, PersonController.create);
	routes.get('/', authMiddleware, PersonController.list);
	routes.get('/:id', authMiddleware, PersonController.getById);
	routes.patch('/:id', authMiddleware, PersonController.patchPerson);
	routes.delete('/:id', authMiddleware, PersonController.deletePerson);

	server.use(prefix, routes);
};
