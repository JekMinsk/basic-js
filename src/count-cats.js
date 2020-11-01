const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof(date) == 'undefined')
    return 'Unable to determine the time of year!'
  if(!(Object.prototype.toString.call(date) === "[object Date]") )
    throw new Error()
  let month = date.getMonth();

  return month == 11 || month < 2 ? 'winter' : month < 5 ? 'spring' : month < 8 ? 'summer' : 'fall'
};
