const FleetController = require('../app/controller/FleetController');
const createFleet = require('../app/validations/validFleet/createFleet');
const patchFleet = require('../app/validations/validFleet/patchFleet');
const validId = require('../app/validations/validId');
const validRentalId = require('../app/validations/validRentalId');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:rentalId/fleet/', validRentalId, createFleet, FleetController.create);
  routes.get('/:rentalId/fleet/', validRentalId, FleetController.list);
  routes.get('/:rentalId/fleet/:id', validRentalId, validId, FleetController.getById);
  routes.patch('/:rentalId/fleet/:id', validRentalId, validId, patchFleet, FleetController.updateById);
  routes.delete('/:rentalId/fleet/:id', validRentalId, validId, FleetController.deleteById);

  server.use(prefix, routes);
};
