const Joi = require('joi');
const { id } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schemaReserve = Joi.object({
      id_user: Joi.string().regex(id).message('Invalid character in id_user field'),
      date_start: Joi.date().format('DD/MM/YYYY'),
      date_end: Joi.date().format('DD/MM/YYYY'),
      id_car: Joi.string().regex(id).message('Invalid character in id_car field'),
      id_rental: Joi.string().regex(id).message('Invalid character in id_rental field'),
      final_value: Joi.number().min(1)
    });

    const { error } = await schemaReserve.validate(req.query, {
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
