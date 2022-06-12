const Joi = require('joi')
	.extend(require('@joi/date'));
const { cnpj } = require('../../utils/regex');
const validCNPJ = require('../../utils/validCNPJ');

module.exports = async (req, res, next) => {
	try {
		const schemaRental = Joi.object({
			name: Joi.string().min(3).max(50).required()
				.trim(),
			cnpj: Joi.string().required().regex(cnpj).message('Invalid character'),
			activities: Joi.string().required().max(100).trim(),
			address: Joi.array().items({
				zipCode: Joi.string().required().min(8).max(8)
					.trim(),
				street: Joi.string().max(100).trim(),
				complement: Joi.string().max(100).trim(),
				number: Joi.number().required().min(1).max()
					.trim(),
				district: Joi.string().max(100).trim(),
				city: Joi.string().max(100).trim(),
				state: Joi.string().max(3).trim(),
				isFilial: Joi.boolean().required(),
			}),
		});

		const { error } = await schemaRental.validate(req.body, { abortEarl: true });

		if (error) throw error;

		if (!validCNPJ(req.body.cnpj)) throw { message: 'Invalid CNPJ' };

		return next();
	} catch (error) {
		return res.status(400).json({ statusCode: error.statusCode, description: error.description, error: error.message });
	}
};
