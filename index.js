var base = '0123456789'
// var base = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"

function random(a, b) {
  var start = a
  var distance = b - a

  return Math.round(start + distance * Math.random())
}

function toNumber(x) {
  return base.indexOf(x || base[0])
}

function toString(x) {
  return base[x]
}

function between(a, b) {
  if (a === b) {
    throw new Error('The numbers must be different')
  }

  if (a > b) {
    throw new Error('The numbers are not in the correct order')
  }

  var result = ''
  var position = 0
  var carry = 0
  var count = 0

  while (true) {
    var aindex = toNumber(a[position])
    var bindex = toNumber(b[position])

    if (carry) bindex += base.length

    if (aindex === bindex) {
      result += a[position]
    }

    if (bindex - aindex === 1) {
      if (carry === 0) {
        carry = aindex
      } else {
        count++
      }
    }

    if (bindex - aindex > 1) {
      var last = random(aindex + 1, bindex - 1)

      if (carry) {
        result += last < base.length
          ? toString(carry) + toString(base.length - 1).repeat(count)
          : toString(carry + 1) + toString(0).repeat(count)
      }

      result += toString(last % base.length)

      break
    }

    position++
  }

  return result
}

function before(x) {
  return between(base[0], x)
}

function after(x) {
  return between(x, base[base.length - 1].repeat(64))
}

module.exports = {
  between: between,
  before: before,
  after: after,
}
