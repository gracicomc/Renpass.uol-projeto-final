class NotFound extends Error {
  constructor(notFound) {
    super(notFound);
    this.statusCode = 404;
    this.description = 'Not Found';
  }
}
module.exports = NotFound;
