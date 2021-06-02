/* eslint-env mocha */

'use strict'

const assert = require('assert')
const UtilShard = require('../')

describe('cache', () => {
  it('caches elements', () => {
    const u = new UtilShard()

    u.getStrRingIx('a', 3)
    assert.strictEqual(u.mem.get('s2i-a'), 390611389)

    assert.strictEqual(u.getStrRingIx('a', 3), 1)
  })

  it('limits amount of cached elements', () => {
    const u = new UtilShard({ max: 2 })

    u.getStrRingIx('a', 3)
    u.getStrRingIx('b', 3)
    u.getStrRingIx('c', 3)
    u.getStrRingIx('d', 3)

    assert.strictEqual(u.mem.length, 2)
  })
})
