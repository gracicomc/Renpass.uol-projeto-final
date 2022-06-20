const PersonController = require('../app/controller/PersonController');
const createPerson = require('../app/validations/validPerson/createPerson');
const patchPerson = require('../app/validations/validPerson/patchPerson');
const getPerson = require('../app/validations/validPerson/getPerson');
const deletePerson = require('../app/validations/validPerson/deletePerson');
const validId = require('../app/validations/validId');

module.exports = (server, routes, prefix = '/api/v1/person') => {
  routes.post('/', createPerson, PersonController.create);
  routes.get('/', getPerson, PersonController.list);
  routes.get('/:id', validId, getPerson, PersonController.getById);
  routes.patch('/:id', validId, patchPerson, PersonController.updateById);
  routes.delete('/:id', validId, deletePerson, PersonController.deleteById);

  server.use(prefix, routes);
};
