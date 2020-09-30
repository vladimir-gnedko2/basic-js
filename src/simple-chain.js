const CustomError = require("../extensions/custom-error");
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value == undefined
      ? this.chain.push("( null )")
      : this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != "number" ||
      position < 0 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error();
    }
    this.chain = this.chain
      .slice(0, position - 1)
      .concat(this.chain.slice(position));
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
}

module.exports = chainMaker;
