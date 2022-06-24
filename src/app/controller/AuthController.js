const AuthService = require('../service/AuthService');

class AuthController {
  async authenticate(req, res) {
    try {
      const { email, password } = req.body;
      const result = AuthService.authenticate(email, password);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(401).json({
        statusCode: error.statusCode,
        description: error.description,
        error: error.message,
      });
    }
  }
}
module.exports = new AuthController();
