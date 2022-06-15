const Joi = require('joi').extend(require('@joi/date'));
const { cpf } = require('../../utils/regex');
const validCPF = require('../../utils/validCPF');

module.exports = async (req, res, next) => {
  try {
    const schemaPerson = Joi.object({
      name: Joi.string().min(3).max(30).required().trim(),
      cpf: Joi.string()
        .required()
        .regex(cpf)
        .message(
          'Invalid character in CPF field. Try something like: 000.000.000-00'
        ),
      birthDay: Joi.date().required().format('DD/MM/YYYY'),
      email: Joi.string().min(10).required().email().lowercase().trim(),
      password: Joi.string().min(6).required(),
      canDrive: Joi.string().required().valid('yes', 'no'),
    });

    const { error } = await schemaPerson.validate(req.body, {
      abortEarly: true,
    });

    if (error) throw error;

    if (!validCPF(req.body.cpf))
      throw {
        message: 'Invalid CPF',
      };

    return next();
  } catch (error) {
    return res.status(400).json({
      Error: error.message,
    });
  }
};
