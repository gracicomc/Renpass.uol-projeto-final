const CarController = require('../app/controller/CarController');
const createCar = require('../app/validations/validCar/createCar');
const patchCar = require('../app/validations/validCar/patchCar');

module.exports = (server, routes, prefix='/api/v1/car') => {
	routes.post('/', createCar, CarController.create);
	routes.get('/', CarController.list);
	routes.get('/:id', CarController.getById);
	routes.patch('/:id', patchCar, CarController.patchCar);
	routes.patch('/:id', CarController.patchAccessories);
	routes.delete('/:id', CarController.deleteCar);

	server.use(prefix, routes);
};