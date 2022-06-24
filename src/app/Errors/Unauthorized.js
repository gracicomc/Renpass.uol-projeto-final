class Unauthorized extends Error {
  constructor(unauthorized) {
    super(unauthorized);
    this.statusCode = 401;
    this.description = 'Unauthorized';
  }
}
module.exports = Unauthorized;
