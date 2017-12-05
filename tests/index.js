const RandomPosition = require('../src/index')
const assert = require('chai').assert

describe('RandomPosition', function () {

  it('works for manual values', function () {
    const pairs = [
      ['1', '9'],
      ['2', '3'],
      ['48', '52'],
      ['49', '5'],
      ['49', '50'],
      ['512', '517'],
      ['47', '57'],
      ['3567567', '5734234'],
      ['599998', '600002'],
      ['600001', '600002'],
      ['99', RandomPosition.last()],
      [RandomPosition.first(), '!'],
      [RandomPosition.first(), '   x'],
    ]

    pairs.forEach(([a, b]) => {
      const result = RandomPosition.between(a, b)
      assert(result > a, result + ' is not greater than ' + a)
      assert(result < b, result + ' is not less than ' + b)
    })
  })

  it('works when using only the after() method', function () {
    let current = RandomPosition.first()
    let result = null

    for (let i = 0; i < 100; i++) {
      result = RandomPosition.after(current)
      assert(result > current, result + ' is not greater than ' + current)
      current = result
    }

    // console.log(current)
  })

  it('works when using only the before() method', function () {
    let current = RandomPosition.last()
    let result = null

    for (let i = 0; i < 100; i++) {
      result = RandomPosition.before(current)
      assert(result < current, result + ' is not less than ' + current)
      current = result
    }

    // console.log(current)
  })

  it('works when using random positions', function () {
    let positions = [RandomPosition.first(), RandomPosition.last()]
    let random = null
    let result = null
    let a = null, b = null

    for (let i = 0; i < 100; i++) {
      random = Math.round(1 + (positions.length - 2) * Math.random())
      a = positions[random - 1]
      b = positions[random]
      result = RandomPosition.between(a, b)
      positions.splice(random, 0, result)

      assert(result > a, result + ' is not greater than ' + a)
      assert(result < b, result + ' is not less than ' + b)
    }

    // console.log(positions)
  })

})
