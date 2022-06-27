const Joi = require('joi');
const { cnpj, cep } = require('../../utils/regex');
const validCNPJ = require('../../utils/validCNPJ');

module.exports = async (req, res, next) => {
  try {
    const method = (value, helper) => {
      if (!validCNPJ(value)) {
        return helper.message(`This CNPJ is not valid. Try a valid one`);
      }
      return req.body;
    };
    const schemaRental = Joi.object({
      name: Joi.string().trim().min(3).max(50).required(),
      cnpj: Joi.string()
        .regex(cnpj)
        .message('Invalid character in CNPJ field. Try something like: 00.000.000/0000-00')
        .custom(method, 'custom validation')
        .required(),
      activities: Joi.string().trim().max(100).required(),
      address: Joi.array().items(
        Joi.object({
          zipCode: Joi.string().trim().regex(cep).message('Invalid CEP').required(),
          number: Joi.string().trim().required(),
          isFilial: Joi.boolean().required()
        })
      )
    });

    const { error } = await schemaRental.validate(req.body, {
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
