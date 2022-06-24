const Joi = require('joi').extend(require('@joi/date'));
const { id } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schemaReserve = Joi.object({
      id_user: Joi.string()
        .regex(id)
        .message('Invalid character in id_user field')
        .required(),
      date_start: Joi.date().format('DD/MM/YYYY').required(),
      date_end: Joi.date().format('DD/MM/YYYY').required(),
      id_car: Joi.string()
        .regex(id)
        .message('Invalid character in id_car field')
        .required(),
      id_rental: Joi.string()
        .regex(id)
        .message('Invalid character in id_rental field'),
      final_value: Joi.number().min(1),
    });

    const { error } = await schemaReserve.validate(req.body, req.params, {
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
