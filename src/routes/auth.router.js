const AuthController = require('../app/controller/AuthController');
const validateAuth = require('../app/validations/validAuth/validateAuth');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', validateAuth, AuthController.authenticate);

  server.use(prefix, routes);
};
