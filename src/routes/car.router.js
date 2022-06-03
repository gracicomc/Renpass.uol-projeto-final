const CarController = require('../app/controller/CarController');

module.exports = (server, routes, prefix='/api/v1/car') => {
	routes.post('/', CarController.create);
	routes.get('/', CarController.list);
	routes.get('/:id', CarController.getById);
	routes.put('/:id', CarController.updateCar);
	routes.delete('/:id', CarController.deleteCar);

	server.use(prefix, routes);
};