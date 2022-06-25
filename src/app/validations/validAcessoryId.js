const Joi = require('joi');
const { id } = require('../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const validAccessoryId = Joi.object({
      accessoriesId: Joi.string().regex(id).message('Invalid character in ID parameter.').required()
    });

    const { error } = await validAccessoryId.validate(req.params, {
      abortEarly: false
    });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({
      invalidAccessoryId: error.details.map((detail) => ({
        parameter: detail.path.join('.'),
        description: detail.message
      }))
    });
  }
};
