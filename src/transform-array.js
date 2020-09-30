const CustomError = require("../extensions/custom-error");

module.exports =module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error()
  }

  let newArr = []
  let wasDeleted = false
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      switch (arr[i]) {
        case '--discard-next':
          i++
          wasDeleted = true
          break
        case '--discard-prev':
          if (!wasDeleted) {
            newArr.pop()
          }
          break
        case '--double-next':
          if (i === arr.length - 1) {
            continue
          }
          newArr.push(arr[i + 1])
          wasDeleted = false
          break
        case '--double-prev':
          if (i === 0) {
            continue
          }
          if (!wasDeleted) {
            newArr.push(arr[i - 1])
            wasDeleted = false
          }
          break
        default:
          newArr.push(arr[i])
          wasDeleted = false
      }
    } else {
      newArr.push(arr[i])
      wasDeleted = false
    }
  }

  return newArr
}
  // function transform (param) {
  //   let n = '--double-next';
   
  //  return param
      
  //    .map((item,index, array) => item === n ? array[++index] : item);
    
    
  // }
