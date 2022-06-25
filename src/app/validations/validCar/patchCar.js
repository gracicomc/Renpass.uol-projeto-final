const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schemaCar = Joi.object({
      model: Joi.string().trim().min(3),
      type: Joi.string().trim().min(3),
      brand: Joi.string().trim().min(2),
      color: Joi.string().trim().min(2),
      year: Joi.number().min(1950).max(2022),
      accessories: Joi.array()
        .min(1)
        .unique()
        .items(
          Joi.object({
            description: Joi.string().trim().min(1)
          })
        ),
      passengersQtd: Joi.number().min(1)
    });
    const { error } = schemaCar.validate(req.body, {
      abortEarly: false
    });

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(error.statusCode || 400).json({
      invalidFields: error.details.map((detail) => ({
        field: detail.path.join('.'),
        description: detail.message
      }))
    });
  }
};
