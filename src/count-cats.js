const CustomError = require("../extensions/custom-error");

module.exports = countCats = (matrix) => matrix.join().split(',').filter(item => item === '^^' ? item : 0).length;
