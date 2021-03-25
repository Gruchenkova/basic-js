const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {
    turns: 0,
    seconds: 0,
  }
  let turns = Math.pow(2, disksNumber) - 1;
  obj.turns = turns;
  let seconds = 3600 * obj.turns / turnsSpeed;
  obj.seconds = Math.floor(seconds);
  return obj
};
