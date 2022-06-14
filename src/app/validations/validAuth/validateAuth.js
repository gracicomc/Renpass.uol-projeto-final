const Joi = require('joi');

module.exports = async (req, res, next) => {
	try {
		const auth = Joi.object({
			email: Joi.string().email().lowercase().trim().required(),

			password: Joi.string().min(6).trim().required(),
		});

		const { error } = auth.validate(req.body, { abortEarly: false });

		if (error) throw error;

		return next();
	} catch (error) {
		return res.status(400).json({ 
			Error: error.message 
		});
	}
};
