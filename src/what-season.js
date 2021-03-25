const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (!(date instanceof Date)) {
    throw new CustomError()
  }
  let yy = date.getFullYear();
  if (date <= new Date(yy, 5, 0, 23, 59, 59) && date > new Date(yy, 2, 0, 23, 59, 59)) {
    return 'spring'
  } else if (date > new Date(yy, 5, 0, 23, 59, 59) && new Date(yy, 8, 0, 23, 59, 59) >= date) {
    return 'summer'
  } else if (date > new Date(yy, 8, 0, 23, 59, 59) && date <= new Date(yy, 11, 0, 23, 59, 59)) {
    return 'autumn'
  } else if (date < new Date(yy, 2, 0, 23, 59, 59)) {
    return 'winter';
  } else if (date > new Date(yy, 11, 0, 23, 59, 59)) {
    return 'winter';
  } else return 'FAIL'
};


