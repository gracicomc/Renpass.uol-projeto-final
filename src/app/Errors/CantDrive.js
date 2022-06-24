class CantDrive extends Error {
  constructor(canDrive) {
    super(canDrive);
    this.statusCode = 400;
    this.description = 'Bad Request';
    this.message = `The user must have a driver's license`;
  }
}
module.exports = CantDrive;
