const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = ''
  if (members === null || members=== undefined){
    throw new CustomError
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      var matches = members[i].match(/\b(\w)/g)
      res += matches[0]
    }
  }
  return res.toUpperCase().split('').sort().join('')
};
