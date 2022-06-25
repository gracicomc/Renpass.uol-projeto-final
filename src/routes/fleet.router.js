const FleetController = require('../app/controller/FleetController');
const createFleet = require('../app/validations/validFleet/createFleet');
const getFleet = require('../app/validations/validFleet/getFleet');
const patchFleet = require('../app/validations/validFleet/patchFleet');
const validId = require('../app/validations/validId');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:rentalId/fleet/', createFleet, FleetController.create);
  routes.get('/:rentalId/fleet/', getFleet, FleetController.list);
  routes.get('/:rentalId/fleet/:id', validId, FleetController.getById);
  routes.patch('/:rentalId/fleet/:id', validId, patchFleet, FleetController.updateById);
  routes.delete('/:rentalId/fleet/:id', validId, FleetController.deleteById);

  server.use(prefix, routes);
};
