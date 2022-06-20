/* eslint-disable no-param-reassign */
const moment = require('moment');
const RentalRepository = require('../repository/RentalRepository');
const ReserveRepository = require('../repository/ReserveRepository');

class ReserveService {
  async create(rentalId, payload) {
    payload.date_start = moment(payload.date_start, 'DD/MM/YYYY').format(
      'YYYY-MM-DD'
    );
    payload.date_end = moment(payload.date_end, 'DD/MM/YYYY').format(
      'YYYY-MM-DD'
    );

    const rental = await RentalRepository.getById(rentalId);
    if (!rental) throw new Error(`This Rental ID doesn't exist`);
    payload.id_rental = rentalId;
    // const numberWithCommas = payload.final_value;
    // numberWithCommas.toLocaleString('pt-BR', { minimumFractionDigits: 1 });

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
