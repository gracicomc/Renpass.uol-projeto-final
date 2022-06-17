const FleetController = require('../app/controller/FleetController');

module.exports = (server, routes, prefix = '/api/v1/fleet') => {
  routes.post('/', FleetController.create);
  routes.get('/', FleetController.list);
  routes.get('/:id', FleetController.getById);
  routes.patch('/:id', FleetController.patchFleet);
  routes.delete('/:id', FleetController.deleteFleet);

  server.use(prefix, routes);
};
