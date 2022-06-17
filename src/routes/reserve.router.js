const ReserveController = require('../app/controller/ReserveController');

module.exports = (server, routes, prefix = '/api/v1/reserve') => {
  routes.post('/', ReserveController.create);

  server.use(prefix, routes);
};
