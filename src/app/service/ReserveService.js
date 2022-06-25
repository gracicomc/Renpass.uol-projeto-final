const moment = require('moment');
const RentalRepository = require('../repository/RentalRepository');
const ReserveRepository = require('../repository/ReserveRepository');
const PersonRepository = require('../repository/PersonRepository');
const FleetRepository = require('../repository/FleetRepository');
const NotFound = require('../Errors/NotFound');
const BadRequest = require('../Errors/BadRequest');

class ReserveService {
  async create(rentalId, payload) {
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new NotFound(`This Rental ID '${rentalId}' is not registered`);
    payload.id_rental = rentalId;

    const { date_start, date_end, id_car } = payload;

    const searchBookedCar = await ReserveRepository.list({
      date_start,
      date_end,
      id_car
    });
    if (searchBookedCar.length > 0) {
      throw new BadRequest(`This Car is already booked. It was booked on ${date_start} - ${date_end}`);
    }

    const validDataStart = moment(date_start, 'DD/MM/YYYY').isSameOrBefore(moment(date_end, 'DD/MM/YYYY'), 'days');
    const validDataEnd = moment(date_end, 'DD/MM/YYYY').isSameOrAfter(moment(date_start, 'DD/MM/YYYY'), 'days');
    if (!validDataStart && !validDataEnd)
      throw new BadRequest(`Invalid input date. Data Start can't be bigger then Data End`);

    const getFleet = await FleetRepository.list({ id_car });
    const getDailyValue = getFleet[0].daily_value;
    const bookedDays = moment(date_end, 'DD/MM/YYYY').diff(moment(date_start, 'DD/MM/YYYY'), 'days');

    payload.final_value = getDailyValue * bookedDays;

    const { id_user } = payload;
    const user = await PersonRepository.getById(id_user);
    if (!user) throw new NotFound(`The User ID '${id_user}' is not registered`);

    if (user.canDrive === 'no') throw new BadRequest(`The user must have a driver's license`);

    const result = await ReserveRepository.create(payload);
    if (!result) throw new BadRequest();
    return result;
  }

  async list(payload) {
    const result = await ReserveRepository.list(payload);
    if (!result) throw new BadRequest();
    return result;
  }

  async getById(payload) {
    const result = await ReserveRepository.getById(payload);
    if (!result) throw new NotFound(`The Reserve ID ${payload} is not registered`);
    return result;
  }

  async updateById(id, payload) {
    const result = await ReserveRepository.updateById(id, payload);
    if (!result) throw new NotFound(`The Reserve ID ${payload} is not registered`);
    return result;
  }

  async deleteById(payload) {
    const result = await ReserveRepository.deleteById(payload);
    if (!result) throw new NotFound(`The Reserve ID ${payload} is not registered`);
    return result;
  }
}

module.exports = new ReserveService();
