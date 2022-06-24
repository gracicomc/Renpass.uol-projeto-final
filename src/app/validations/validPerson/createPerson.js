const Joi = require('joi').extend(require('@joi/date'));
const { cpf } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schemaPerson = Joi.object({
      name: Joi.string().trim().min(3).max(30).required(),
      cpf: Joi.string()
        .regex(cpf)
        .message(
          'Invalid character in CPF field. Try something like: 000.000.000-00'
        )
        .required(),
      birthDay: Joi.date().required().format('DD/MM/YYYY'),
      email: Joi.string().trim().min(10).email().lowercase().required(),
      password: Joi.string().min(6).required(),
      canDrive: Joi.string().valid('yes', 'no').required(),
    });

    const { error } = await schemaPerson.validate(req.body, {
      abortEarly: false,
    });

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json({
      invalidFields: error.details.map((detail) => ({
        field: detail.path.join('.'),
        description: detail.message,
      })),
    });
  }
};
