const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === '^^') {
        res += 1
      }
    }
  }
  return res
};
