const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PersonRepository = require('../repository/PersonRepository');
const authConfig = require('../config/auth.json');
const Unauthorized = require('../Errors/Unauthorized');

class AuthService {
  async authenticate(email, password) {
    const person = await PersonRepository.authenticate(email);

    if (!person) throw new Unauthorized(`The email '${email}' it's not registered. Try a valid one`);

    if (!(await bcrypt.compare(password, person.password))) {
      throw new Unauthorized('Incorrect password');
    }

    person.password = undefined;

    const token = jwt.sign({ id: person.id }, authConfig.secret, {
      expiresIn: 86400
    });

    return {
      email: person.email,
      canDrive: person.canDrive,
      token
    };
  }
}

module.exports = new AuthService();
