const FleetController = require('../app/controller/FleetController');
const createFleet = require('../app/validations/validFleet/createFleet');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:rentalId/fleet/', createFleet, FleetController.create);
  routes.get('/:rentalId/fleet/', FleetController.list);
  routes.get('/:rentalId/fleet/:id', FleetController.getById);
  routes.patch('/:rentalId/fleet/:id', FleetController.patchFleet);
  routes.delete('/:rentalId/fleet/:id', FleetController.deleteFleet);

  server.use(prefix, routes);
};
