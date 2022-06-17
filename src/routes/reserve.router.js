const ReserveController = require('../app/controller/ReserveController');

module.exports = (server, routes, prefix = '/api/v1/reserve') => {
  routes.post('/', ReserveController.create);
  routes.get('/', ReserveController.list);
  routes.get('/:id', ReserveController.getById);

  server.use(prefix, routes);
};
