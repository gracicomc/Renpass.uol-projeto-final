const moment = require('moment');

const finalValueCalc = (date_start, date_end, daily_value) => {
  const bookedDays = moment(date_end, 'DD/MM/YYYY').diff(
    moment(date_start, 'DD/MM/YYYY'),
    'days'
  );
  return daily_value * bookedDays;
};

module.exports = finalValueCalc;
