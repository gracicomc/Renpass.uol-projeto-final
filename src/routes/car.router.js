const CarController = require('../app/controller/CarController');
const createCar = require('../app/validations/validCar/createCar');
const patchCar = require('../app/validations/validCar/patchCar');
const authMiddleware = require('../app/middlewares/auth');
const getCar = require('../app/validations/validCar/getCar');
const deleteCar = require('../app/validations/validCar/deleteCar');
const validId = require('../app/validations/validId');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.use(authMiddleware);
  routes.post('/', createCar, CarController.create);
  routes.get('/', getCar, CarController.list);
  routes.get('/:id', validId, getCar, CarController.getById);
  routes.patch('/:id', patchCar, CarController.updateById);
  routes.patch(
    '/:id/accessories/:accessoriesId',
    validId,
    CarController.patchAccessories
  );
  routes.delete('/:id', validId, deleteCar, CarController.deleteById);

  server.use(prefix, routes);
};
