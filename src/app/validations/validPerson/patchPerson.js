const Joi = require('joi')
	.extend(require('@joi/date'));
const { cpf } = require('../../utils/regex');
const validCPF = require('../../utils/validCPF');

module.exports = async (req, res, next) => {
	try {
		const schemaPerson = Joi.object({
			name: Joi.string().min(3).max(30).trim(),
			cpf: Joi.string().regex(cpf).message('Invalid character'),
			birthDay: Joi.date().format('DD/MM/YYYY').min('01/01/2004'),
			email: Joi.string().min(10).email().lowercase().trim(),
			password: Joi.string().min(6),
			canDrive: Joi.string().valid('yes', 'no')
            
		});

		const { error } = await schemaPerson.validate(req.body, { abortEarl: true });

		if (error) throw error;

		if(!validCPF(req.body.cpf)) throw {message: 'Invalid CPF'};

		return next();
	} catch (error) {
		return res.status(400).json({Error: error.message});
	}
};