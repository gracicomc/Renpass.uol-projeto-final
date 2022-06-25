const CarController = require('../app/controller/CarController');
const createCar = require('../app/validations/validCar/createCar');
const patchCar = require('../app/validations/validCar/patchCar');
// const authMiddleware = require('../app/middlewares/auth');
const getCar = require('../app/validations/validCar/getCar');
const validId = require('../app/validations/validId');
const validAcessoryId = require('../app/validations/validAcessoryId');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  // routes.use(authMiddleware);
  routes.post('/', createCar, CarController.create);
  routes.get('/', getCar, CarController.list);
  routes.get('/:id', validId, getCar, CarController.getById);
  routes.patch('/:id', validId, patchCar, CarController.updateById);
  routes.patch('/:id/accessories/:accessoriesId', validId, validAcessoryId, CarController.patchAccessories);
  routes.delete('/:id', validId, CarController.deleteById);

  server.use(prefix, routes);
};
