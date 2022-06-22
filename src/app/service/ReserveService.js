const moment = require('moment');
const RentalRepository = require('../repository/RentalRepository');
const ReserveRepository = require('../repository/ReserveRepository');
const PersonRepository = require('../repository/PersonRepository');
const FleetRepository = require('../repository/FleetRepository');
const CantDrive = require('../utils/Errors/CantDrive');

class ReserveService {
  async create(rentalId, payload) {
    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new Error(`This Rental ID doesn't exist`);
    payload.id_rental = rentalId;

    // await validReserveDate(payload.data_start, payload.data_end);

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
    if (!validDataStart && !validDataEnd) throw new Error('invalid date');

    const getFleet = await FleetRepository.list({ id_car });
    const getDailyValue = getFleet[0].daily_value;
    const bookedDays = moment(date_end, 'DD/MM/YYYY').diff(
      moment(date_start, 'DD/MM/YYYY'),
      'days'
    );

    payload.final_value = getDailyValue * bookedDays;

    const { id_user } = payload;
    const user = await PersonRepository.getById(id_user);
    if (!user) throw new Error(`This User ID doesn't exist`);

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

  async patchReserve(id, payload) {
    const result = await ReserveRepository.patchReserve(id, payload);
    if (!result) throw new Error();
    return result;
  }

  async deleteReserve(payload) {
    const result = await ReserveRepository.deleteReserve(payload);
    if (!result) throw new Error();
    return result;
  }
}

module.exports = new ReserveService();
