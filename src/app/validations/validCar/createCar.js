const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schemaCar = Joi.object({
      model: Joi.string().trim().min(3).required(),
      type: Joi.string().trim().min(3).required(),
      brand: Joi.string().trim().min(2).required(),
      color: Joi.string().trim().min(2).required(),
      year: Joi.number().min(1950).max(2022).required(),
      accessories: Joi.array()
        .min(1)
        .unique()
        .items(
          Joi.object({
            description: Joi.string().trim().min(1).required(),
          })
        ),
      passengersQtd: Joi.number().min(1).required(),
    });
    const { error } = schemaCar.validate(req.body, {
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
