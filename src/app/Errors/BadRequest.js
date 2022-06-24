class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.description = 'Bad Request';
  }
}
module.exports = BadRequest;
