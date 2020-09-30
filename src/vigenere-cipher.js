const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    if (direct !== false) {
      this.direct = true
    } else {
      this.direct = false
    }

    this.alpabet = []
    for (let i = 0; i < 26; i++) {
      this.alpabet.push(String.fromCharCode(i + 65))
    }
  }

  encrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error()
    }

    let mes = message.split('').map((el) => el.toUpperCase())
    let k = key.split('').map((el) => el.toUpperCase())
    let code = []

    for (let i = 0, j = 0; i < mes.length; i++, j++) {
      if (this.alpabet.includes(mes[i])) {
        let position = this.alpabet.indexOf(mes[i]) + this.alpabet.indexOf(k[j])
        code.push(this.alpabet[position % this.alpabet.length])
      } else {
        code.push(mes[i])
        j--
      }

      if (j === k.length - 1) {
        j = -1
      }
    }

    return this.direct ? code.join('') : code.reverse().join('')
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') {
      throw new Error()
    }

    let enc = encryptedMessage.split('')
    let k = key.split('')
    enc = enc.map((el) => el.toUpperCase())
    k = k.map((el) => el.toUpperCase())
    let message = []

    for (let i = 0, j = 0; i < enc.length; i++, j++) {
      if (this.alpabet.includes(enc[i])) {
        let position =
          this.alpabet.indexOf(enc[i]) +
          this.alpabet.length -
          this.alpabet.indexOf(k[j])
        message.push(this.alpabet[position % this.alpabet.length])
      } else {
        message.push(enc[i])
        j--
      }

      if (j === k.length - 1) {
        j = -1
      }
    }

    return this.direct ? message.join('') : message.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine
