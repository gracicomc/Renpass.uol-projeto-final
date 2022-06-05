const Joi = require('joi')
	.extend(require('@joi/date'));
const validCPF = require('../../utils/validCPF');
const email = require('../../utils/regex');

module.exports = async (req, res, next) => {
	try {
		const schemaPerson = Joi.object({
			name: Joi.string().min(3).max(30).required().trim(),
			cpf: Joi.string().required(),
			birthDay: Joi.date().required().format('DD/MM/YYYY').max('01/01/2004'),
			email: Joi.string().min(10).required().email(),
			password: Joi.string().min(6).required(),
			canDrive: Joi.string().required().valid('yes', 'no')
            
		});

		const { error } = await schemaPerson.validate(req.body, { abortEarl: true });

		if (error) throw error;
		if (!validCPF(req.body.cpf)) throw error;
		if(!email(req.body.email)) throw error;
		return next();
	} catch (error) {
		return res.status(400).json({Error: error.message});
	}
};