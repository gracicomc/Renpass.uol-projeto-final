const Joi = require('joi');
const { id } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schemaPerson = Joi.object({
      id: Joi.string().regex(id)
    });

    const { error } = await schemaPerson.validate(req.params, {
      abortEarly: false
    });

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(404).json({
      invalidFields: error.details.map((detail) => ({
        field: detail.path.join('.'),
        description: detail.message
      }))
    });
  }
};
