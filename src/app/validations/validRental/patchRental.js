const Joi = require('joi')
	.extend(require('@joi/date'));
const { cnpj } = require('../../utils/regex');
const validCNPJ = require('../../utils/validCNPJ');

module.exports = async (req, res, next) => {
	try {
		const schemaRental = Joi.object({
			name: Joi.string().min(3).max(50)
				.trim(),
			cnpj: Joi.string().regex(cnpj).message('Invalid character in CNPJ field. Try something like: 00.000.000/0000-00'),
			activities: Joi.string().max(100).trim(),
			address: Joi.array().items(Joi.object({
				zipCode: Joi.string().trim(),
				number: Joi.string().trim(),
				isFilial: Joi.boolean(),
			})),
		});

		const { error } = await schemaRental.validate(req.body, { abortEarly: true });

		if (error) throw error;

		if (!validCNPJ(req.body.cnpj)) throw { message: 'Invalid CNPJ' };

		return next();
	} catch (error) {
		return res.status(400).json({
			statusCode: error.statusCode,
			description: error.description,
			error: error.message,
		});
	}
};
