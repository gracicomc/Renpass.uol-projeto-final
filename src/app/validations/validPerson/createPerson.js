const Joi = require('joi').extend(require('@joi/date'));
const { cpf } = require('../../utils/regex');
const { yesOrNo } = require('../../utils/enums');
const validCPF = require('../../utils/validCPF');

module.exports = async (req, res, next) => {
  try {
    const method = (value, helper) => {
      if (!validCPF(value)) {
        return helper.message(`This CPF is not valid. Try a valid one`);
      }
      return req.body;
    };
    const schemaPerson = Joi.object({
      name: Joi.string().trim().min(3).max(40).required(),
      cpf: Joi.string()
        .regex(cpf)
        .message('Invalid character in CPF field. Try something like: 000.000.000-00')
        .custom(method, 'custom validation')
        .required(),
      birthDay: Joi.date().required().format('DD/MM/YYYY'),
      email: Joi.string().trim().min(10).email().lowercase().required(),
      password: Joi.string().min(6).required(),
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
