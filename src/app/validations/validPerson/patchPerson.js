const Joi = require('joi').extend(require('@joi/date'));
const { cpf } = require('../../utils/regex');
const { yesOrNo } = require('../../utils/enums');

module.exports = async (req, res, next) => {
  try {
    const schemaPerson = Joi.object({
      name: Joi.string().trim().min(3).max(40),
      cpf: Joi.string().regex(cpf).message('Invalid character in CPF field. Try something like: 000.000.000-00'),
      birthDay: Joi.date().format('DD/MM/YYYY'),
      email: Joi.string().trim().min(10).email().lowercase(),
      password: Joi.string().min(6),
      canDrive: Joi.string().valid(...yesOrNo)
    });

    const { error } = await schemaPerson.validate(req.body, {
      abortEarly: false
    });

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json({
      invalidFields: error.details.map((detail) => ({
        field: detail.path.join('.'),
        description: detail.message
      }))
    });
  }
};
