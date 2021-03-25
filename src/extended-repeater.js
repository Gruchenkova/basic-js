const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  let separator = options['separator'];
  let addition = options['addition'];
  let additionSeparator = options['additionSeparator'];
  let string = str;
  let repeatTimes = options["repeatTimes"];
  let additionRepeatTimes = options["additionRepeatTimes"]
  if (typeof(string) != 'string') {
    string = string + '';
  }
  if (options === undefined) {
    separator = '+';
    addition = '';
    additionSeparator = '|';
    additionRepeatTimes = 0;
    repeatTimes = 0;
  }
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1
  }
  if (repeatTimes === undefined) {
    repeatTimes = 1
  }
  if (separator === undefined) {
    separator = '+'
  }
  if (addition === undefined) {
    addition = ''
  }
  if (additionSeparator === undefined) {
    additionSeparator = '|'
  }
  if (typeof(separator) != 'string' || typeof(addition) != 'string' || typeof(additionSeparator) != 'string') {
    separator += '';
    addition += '';
    additionSeparator += '';
  }
  for (let i = 0; i < repeatTimes; i++) {
    result += string;
    for (let k = 0; k < additionRepeatTimes; k++) {
      if (k === additionRepeatTimes - 1) {
        result += addition
      } else {
        result += addition + additionSeparator
      }
    }
    if (i != repeatTimes - 1) {
      result += separator
    }
  }
  return result
};