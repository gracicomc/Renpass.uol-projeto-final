const RentalController = require('../app/controller/RentalController');
const createRental = require('../app/validations/validRental/createRental');
const patchRental = require('../app/validations/validRental/patchRental');
const authMiddleware = require('../app/middlewares/auth');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
	routes.use(authMiddleware);
	routes.post('/', createRental, RentalController.create);
	routes.get('/', RentalController.list);
	routes.get('/:id', RentalController.getById);
	routes.patch('/:id', patchRental, RentalController.patchRental);
	routes.delete('/:id', RentalController.deleteRental);

	server.use(prefix, routes);
};
