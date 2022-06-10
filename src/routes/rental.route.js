
const RentalController = require('../app/controller/RentalController');

module.exports = (server, routes, prefix='/api/v1/rental') => {

	routes.post('/', RentalController.create);
	routes.get('/', RentalController.list);

	server.use(prefix, routes);
};