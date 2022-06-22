class InvalidCNPJ extends Error {
  constructor(validCNPJ) {
    super(validCNPJ);
    this.statusCode = 400;
    this.description = 'Bad Request';
    this.message = `This CNPJ doesn't exist`;
  }
}
module.exports = InvalidCNPJ;
