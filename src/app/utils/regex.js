/* eslint-disable no-useless-escape */
const regex = {
	cpf: /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/,
	cnpj: /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2}/,
	cep: /^([\d]{2})\.?([\d]{3})-?([\d]{3})/,
	email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
};

module.exports = regex;
