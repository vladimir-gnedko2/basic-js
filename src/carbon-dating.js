const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(sampleActivity) {
  const checkValidation = (s) =>
    typeof s === 'string' && /^\d*\.?\d+/.test(sampleActivity)
  return checkValidation(sampleActivity) &&
    sampleActivity.match(/\d*\.?\d+/)[0] > 0 &&
    sampleActivity.match(/\d*\.?\d+/)[0] < 15
    ? Math.ceil(
        Math.log(MODERN_ACTIVITY / sampleActivity.match(/\d*\.?\d+/)[0]) /
          (0.693 / HALF_LIFE_PERIOD)
      )
    : false
}
