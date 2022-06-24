class InvalidAge extends Error {
  constructor(age) {
    super(age);
    this.statusCode = 400;
    this.description = 'Bad Request';
    this.message = 'age is under 18';
  }
}
module.exports = InvalidAge;
