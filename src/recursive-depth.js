const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1
    let subDepth = 1
    let maxSubDepth = 0

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        subDepth = this.calculateDepth(arr[i])
        if (maxSubDepth < subDepth) {
          maxSubDepth = subDepth
        }
      }
    }

    return depth + maxSubDepth
  }
}