const Joi = require('joi');
const { id } = require('../../utils/regex');
const { plate } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schemaFleet = Joi.object({
      id_car: Joi.string().regex(id).message('Invalid character in id_car field').required(),
      id_rental: Joi.string().regex(id).message('Invalid character in id_rental field'),
      status: Joi.string().valid('available', 'unavailable', 'rented').required(),
      daily_value: Joi.number().min(1).required(),
      plate: Joi.string().regex(plate).message(`This plate doesn't exist`).required()
    });

    const { error } = await schemaFleet.validate(req.body, req.params, {
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
