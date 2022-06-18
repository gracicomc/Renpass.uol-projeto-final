const ReserveController = require('../app/controller/ReserveController');

module.exports = (
  server,
  routes,
  prefix = '/api/v1/rental/rentalId/reserve'
) => {
  routes.post('/', ReserveController.create);
  routes.get('/', ReserveController.list);
  routes.get('/:id', ReserveController.getById);
  routes.patch('/:id', ReserveController.patchReserve);
  routes.delete('/:id', ReserveController.deleteReserve);

  server.use(prefix, routes);
};
