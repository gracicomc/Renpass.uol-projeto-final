const Joi = require('joi');
const { id } = require('../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const validId = Joi.object({
      id: Joi.string().regex(id).message('Invalid character in ID parameter.').required(),
      accessoriesId: Joi.string().regex(id).message('Invalid character in ID parameter.'),
      rentalId: Joi.string().regex(id).message('Invalid character in ID parameter.')
    });

    const { error } = await validId.validate(req.params, {
      abortEarly: false
    });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({
      invalidId: error.details.map((detail) => ({
        parameter: detail.path.join('.'),
        description: detail.message
      }))
    });
  }
};
