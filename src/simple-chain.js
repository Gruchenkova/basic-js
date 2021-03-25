const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  result: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value != undefined) {
      this.chain.push(value)
    }
     else {
      this.chain.push(' ')
    }
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chain.splice(position - 1, 1)
      return this
    }
    throw new CustomError('Not implemented');
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    for (let k = 0; k < this.chain.length; k++) {
      if (k === this.chain.length - 1) {
        this.result += '( ' + this.chain[k] + ' )'
      } else {
        this.result += '( ' + this.chain[k] + ' )' + '~~'
      }
    }
    return this.result
  }
};

module.exports = chainMaker;
