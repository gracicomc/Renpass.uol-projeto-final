
const RentalController = require('../app/controller/RentalController');

module.exports = (server, routes, prefix='/api/v1/rental') => {

	routes.post('/', RentalController.create);
	routes.get('/', RentalController.list);
	routes.get('/:id', RentalController.getById);
	routes.patch('/:id', RentalController.patchRental);

	server.use(prefix, routes);
};