const ReserveController = require('../app/controller/ReserveController');
const createReserve = require('../app/validations/validReserve/createReserve');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:rentalId/reserve/', createReserve, ReserveController.create);
  routes.get('/:rentalId/reserve/', ReserveController.list);
  routes.get('/:rentalId/reserve/:id', ReserveController.getById);
  routes.patch('/:rentalId/reserve/:id', ReserveController.patchReserve);
  routes.delete('/:rentalId/reserve:id', ReserveController.deleteReserve);

  server.use(prefix, routes);
};
