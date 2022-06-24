const Joi = require('joi');
const { id } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schemaRental = Joi.object({
      id: Joi.string().regex(id).required
    });

    const { error } = await schemaRental.validate(req.params, {
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
