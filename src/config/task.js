const periodicity = {
  onePerDay: '0 0 0 * * *',
  onePerHour: '00 59 * * * *',
  onePerMinute: '* * * * *',
  atTwoAm: '0 0 2 * * *',
  everyTwelve: '0 0 12 * * *',
};

exports.getPeriodicity = () => {
  return periodicity.onePerDay;
};
