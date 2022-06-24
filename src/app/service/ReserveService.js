const moment = require('moment');
const RentalRepository = require('../repository/RentalRepository');
const ReserveRepository = require('../repository/ReserveRepository');
const PersonRepository = require('../repository/PersonRepository');
const FleetRepository = require('../repository/FleetRepository');
const CantDrive = require('../Errors/CantDrive');
const NotFoundId = require('../Errors/NotFoundId');
const InvalidDate = require('../Errors/InvalidDate');

class ReserveService {
  async create(rentalId, payload) {
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new NotFoundId(rentalId);
    payload.id_rental = rentalId;

    const { date_start, date_end, id_car } = payload;

    const searchBookedCar = await ReserveRepository.list({
      date_start,
      date_end,
      id_car,
    });
    if (searchBookedCar.length > 0)
      throw new Error(
        `This Car is already booked. It was booked on ${date_start} - ${date_end}`
      );

    const validDataStart = moment(date_start, 'DD/MM/YYYY').isSameOrBefore(
      moment(date_end, 'DD/MM/YYYY'),
      'days'
    );
    const validDataEnd = moment(date_end, 'DD/MM/YYYY').isSameOrAfter(
      moment(date_start, 'DD/MM/YYYY'),
      'days'
    );
    if (!validDataStart && !validDataEnd) throw new InvalidDate(date_start);

    const getFleet = await FleetRepository.list({ id_car });
    const getDailyValue = getFleet[0].daily_value;
    const bookedDays = moment(date_end, 'DD/MM/YYYY').diff(
      moment(date_start, 'DD/MM/YYYY'),
      'days'
    );

    payload.final_value = getDailyValue * bookedDays;

    const { id_user } = payload;
    const user = await PersonRepository.getById(id_user);
    if (!user) throw new NotFoundId(id_user);

    if (user.canDrive === 'no') throw new CantDrive(user);

    const result = await ReserveRepository.create(payload);
    if (!result) throw new Error();
    return result;
  }

  async list(payload) {
    const result = await ReserveRepository.list(payload);
    if (!result) throw new Error();
    return result;
  }

  async getById(payload) {
    const result = await ReserveRepository.getById(payload);
    if (!result) throw new Error();
    return result;
  }

  async updateById(id, payload) {
    const result = await ReserveRepository.updateById(id, payload);
    if (!result) throw new Error();
    return result;
  }

  async deleteById(payload) {
    const result = await ReserveRepository.deleteById(payload);
    if (!result) throw new Error();
    return result;
  }
}

module.exports = new ReserveService();
