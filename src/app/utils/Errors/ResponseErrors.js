class ResponseErrors extends Error {
  constructor(response) {
    super(response);
    this.statusCode = Error.statuscode;
    this.description = Error.description;
    this.message = Error.message;
  }
}
module.exports = ResponseErrors;
