const Joi = require('joi');
const { email } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const auth = Joi.object({
      email: Joi.string().trim().email(email).lowercase().required(),

      password: Joi.string().trim().min(6).required(),
    });

    const { error } = auth.validate(req.body, { abortEarly: false });

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json({
      Error: error.message,
    });
  }
};
