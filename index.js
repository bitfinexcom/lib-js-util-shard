'use strict'

const CRC = require('crc-32')
const LRU = require('lru')

class UtilShard {
  constructor (opts = {}) {
    this.mem = new LRU(opts)
  }

  getRingIx (v, n) {
    return v && n ? v % n : 0
  }

  getStrRingIx (s, n) {
    return this.getRingIx(this.getStrVal(s), n)
  }

  getStrVal (s) {
    const k = `s2i-${s}`

    let v = this.mem.get(k)

    if (v !== undefined) {
      return v
    }

    v = Math.abs(CRC.str(s))
    this.mem.set(k, v)

    return v
  }
}

module.exports = UtilShard
