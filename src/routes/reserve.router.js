const ReserveController = require('../app/controller/ReserveController');
const createReserve = require('../app/validations/validReserve/createReserve');
const patchReserve = require('../app/validations/validReserve/patchReserve');
const validId = require('../app/validations/validId');
const validRentalId = require('../app/validations/validRentalId');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:rentalId/reserve/', validRentalId, createReserve, ReserveController.create);
  routes.get('/:rentalId/reserve/', validRentalId, ReserveController.list);
  routes.get('/:rentalId/reserve/:id', validRentalId, validId, ReserveController.getById);
  routes.patch('/:rentalId/reserve/:id', validRentalId, validId, patchReserve, ReserveController.updateById);
  routes.delete('/:rentalId/reserve/:id', validRentalId, validId, ReserveController.deleteById);

  server.use(prefix, routes);
};
