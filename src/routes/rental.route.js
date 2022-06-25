const RentalController = require('../app/controller/RentalController');
const createRental = require('../app/validations/validRental/createRental');
const patchRental = require('../app/validations/validRental/patchRental');
const getRental = require('../app/validations/validRental/getRental');
const validId = require('../app/validations/validId');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', createRental, RentalController.create);
  routes.get('/', getRental, RentalController.list);
  routes.get('/:id', validId, getRental, RentalController.getById);
  routes.patch('/:id', validId, patchRental, RentalController.updateById);
  routes.delete('/:id', validId, RentalController.deleteById);

  server.use(prefix, routes);
};
