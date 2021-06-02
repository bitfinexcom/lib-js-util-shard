# lib-js-util-shard

A library to determine shard indexes, uses a LRU cache for caching calculated values

```js
const nodeCount = 3

const u = new UtilShard({
  // max: 5000,
  // maxAge: maxAgeInMilliseconds
})
// get the numeric shard index for 'BTCUSD'
const shardIndex = u.getStrRingIx('BTCUSD', nodeCount)
```

## API

### getStrVal(str)

Retrieves the CRC value of a string

### getRingIx(a, b)

Applies a modulo operation between `a` and `b`

### getStrRingIx(str, b)

Takes a string, and returns the corresponding node index for it. Second argument is the amount of nodes that are available
