const Joi = require('joi');

module.exports = async (req, res, next) => {
	try {
		const schemaCar = Joi.object({
			model: Joi.string().min(3).trim(),
			type: Joi.string().min(3).trim(),
			brand: Joi.string().min(2).trim(),
			color: Joi.string().min(2).trim(),
			year: Joi.number().min(1950).max(2022),
			accessories: Joi.array().min(1).unique()
				.items(Joi.object({
					description: Joi
						.string()
						.min(1)
						.required()
						.trim() })),
			passengersQtd: Joi.number().min(1),
		});
		const { error } = schemaCar.validate(req.body, { abortEarly: false });

		if (error) throw error;

		return next();
	} catch (error) {
		return res.status(400).json({
			Error: error.message
		});
	}
};
