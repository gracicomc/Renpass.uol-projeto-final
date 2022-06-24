class NotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.description = 'Not Found';
  }
}
module.exports = NotFound;
