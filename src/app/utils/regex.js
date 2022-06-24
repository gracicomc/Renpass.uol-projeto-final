const regex = {
  cpf: /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/,
  cnpj: /^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2}$/,
  cep: /^([\d]{2})\.?([\d]{3})-?([\d]{3})$/,
  email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  id: /^[a-f\d]{24}$/i,
  plate: /^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/
};

module.exports = regex;
