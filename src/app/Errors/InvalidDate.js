class InvalidDate extends Error {
  constructor(validDataStart) {
    super(validDataStart);
    this.statusCode = 400;
    this.description = 'Bad Request';
    this.message = `Invalid input date. Data Start can't be bigger then Data End`;
  }
}
module.exports = InvalidDate;
