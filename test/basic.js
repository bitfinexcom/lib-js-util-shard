/* eslint-env mocha */

'use strict'

const assert = require('assert')
const UtilShard = require('../')

describe('basic', () => {
  it('distributes', () => {
    const u = new UtilShard()

    assert.strictEqual(u.getStrRingIx('a', 3), 1)
    assert.strictEqual(u.getStrRingIx('b', 3), 2)
    assert.strictEqual(u.getStrRingIx('c', 3), 0)
    assert.strictEqual(u.getStrRingIx('d', 3), 1)
  })
})
