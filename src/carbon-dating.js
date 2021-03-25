const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string' || + sampleActivity <=0) {
    return false
  } else {
    let res = null;
    let numb = +sampleActivity;
    if (!Number(numb)|| numb=== 0) {
      return false
    } else {
      res = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
    }
    if (res > 0){
      return Math.ceil(res)
    }else {
      return false
    }
  }
};
