const Joi = require('joi').extend(require('@joi/date'));
const { id } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schemaReserve = Joi.object({
      id_user: Joi.string()
        .regex(id)
        .message('Invalid character in id_user field')
        .required(),
      date_start: Joi.date().required().format('DD/MM/YYYY'),
      date_end: Joi.date().required().format('DD/MM/YYYY'),
      id_car: Joi.string()
        .regex(id)
        .message('Invalid character in id_user field')
        .required(),
      final_value: Joi.string()
        .regex()
        .message('Invalid character in final_value field, try only numbers')
        .required(),
    });

    const { error } = await schemaReserve.validate(req.body, {
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
