const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1
  let turnsPerSecond = turnsSpeed / 3600
  let result = {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.floor(turns / turnsPerSecond),
  }
  return result
}