const ReserveController = require('../app/controller/ReserveController');
const createReserve = require('../app/validations/validReserve/createReserve');
const patchReserve = require('../app/validations/validReserve/patchReserve');
const validId = require('../app/validations/validId');
const getReserve = require('../app/validations/validReserve/getReserve');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:rentalId/reserve/', createReserve, ReserveController.create);
  routes.get('/:rentalId/reserve/', ReserveController.list);
  routes.get('/:rentalId/reserve/:id', getReserve, validId, ReserveController.getById);
  routes.patch('/:rentalId/reserve/:id', validId, patchReserve, ReserveController.updateById);
  routes.delete('/:rentalId/reserve/:id', validId, ReserveController.deleteById);

  server.use(prefix, routes);
};
