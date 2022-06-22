const FleetController = require('../app/controller/FleetController');
const createFleet = require('../app/validations/validFleet/createFleet');
const patchFleet = require('../app/validations/validFleet/patchFleet');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:rentalId/fleet/', createFleet, FleetController.create);
  routes.get('/:rentalId/fleet/', FleetController.list);
  routes.get('/:rentalId/fleet/:id', FleetController.getById);
  routes.patch('/:rentalId/fleet/:id', patchFleet, FleetController.updateById);
  routes.delete('/:rentalId/fleet/:id', FleetController.deleteById);

  server.use(prefix, routes);
};
