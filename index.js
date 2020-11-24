'use strict'

const CRC = require('crc-32')

class UtilShard {
  constructor () {
    this.mem = {}
  }

  getRingIx (v, n) {
    return v && n ? v % n : 0
  }

  getStrRingIx (s, n) {
    return this.getRingIx(this.getStrVal(s), n)
  }

  getStrVal (s) {
    const k = `s2i-${s}`
    let v = this.mem[k]
    if (v !== undefined) {
      return v
    }

    v = this.mem[k] = Math.abs(CRC.str(s))
    return v
  }
}

module.exports = UtilShard