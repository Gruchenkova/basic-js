const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr)
  let result = [];
  if (!Array.isArray(arr) ) {
    throw new CustomError('Not implemented');
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next' && arr[i + 1] != undefined) {
        i++;
      } else if (arr[i] === '--discard-next' && arr[i + 1] === undefined) {
        continue
      }
      else if (arr[i] === '--discard-prev' && arr[i - 1] != undefined && result.indexOf(arr[i - 1]) != -1) {
        result.pop();

      }
      else if (arr[i] === '--discard-prev' && arr[i - 1] != undefined && result.indexOf(arr[i - 1]) === -1) {
        continue
      }
      else if (arr[i] === '--discard-prev' && arr[i - 1] === undefined) {
        continue
      }
      else if (arr[i] === '--double-next' && arr[i + 1] != undefined) {
        result.push(arr[i + 1])
      }
      else if (arr[i] === '--double-next' && arr[i + 1] === undefined) {
        continue
      }
      else if (arr[i] === '--double-prev' && arr[i - 1] != undefined && result.indexOf(arr[i - 1]) === -1) {
        continue
      }
      else if (arr[i] === '--double-prev' && arr[i - 1] != undefined && result.indexOf(arr[i - 1]) != -1) {
        result.push(arr[i - 1])
      }
      else if (arr[i] === '--double-prev' && arr[i - 1] === undefined) {
        continue
      }
      else {
        result.push(arr[i])
      }
    }
    return result
  }
};
