const periodicity = {
  onePerDay: '0 0 0 * * *',
  onePerHour: '00 59 * * * *',
  onePerMinute: '* * * * *',
  atTwoAm: '0 0 2 * * *',
  everyTwelve: '0 0 12 * * *',
};

exports.getPeriodicity = () => {
  const perHour = process.env.TASK_PER_HOUR || false;
  if (perHour) return periodicity.onePerHour;
  return periodicity.onePerDay;
};
