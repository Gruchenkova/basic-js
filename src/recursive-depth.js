const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let array = []
    let result = 1;
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        array.push(this.calculateDepth(elem))
      }
    }
    let max = array.length === 0 ? 0 : Number.MIN_SAFE_INTEGER;

    for (let i = 0;i<array.length;i++){
      if (array[i]> max){
        max = array[i]
      }
    };
    return result + max
  }
};