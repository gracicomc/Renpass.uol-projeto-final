const CarController = require('../app/controller/CarController');

module.exports = (server, routes, prefix='/api/v1/car') => {
	routes.post('/', CarController.create);
	routes.get('/', CarController.list);
	routes.get('/:id', CarController.getById);
	routes.patch('/:id', CarController.patchCar);
	routes.delete('/:id', CarController.deleteCar);

	server.use(prefix, routes);
};