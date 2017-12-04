const base = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"

function between(a, b) {
  a = a || first()
  b = b || last()

  if (a === b) {
    throw new Error('The numbers must be different')
  }

  if (a > b) {
    throw new Error('The numbers are not in the correct order')
  }

  let result = ''
  let position = 0
  let carry = 0
  let count = 0

  while (true) {
    let aindex = toNumber(a[position])
    let bindex = toNumber(b[position])

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

function random(a, b) {
  const start = a
  const distance = b - a

  return Math.round(start + distance * Math.random())
}

function toNumber(x) {
  return base.indexOf(x || base[0])
}

function before(x) {
  return between(undefined, x)
}

function after(x) {
  return between(x, undefined)
}

function toString(x) {
  return base[x]
}

function first() {
  return base[0]
}

function last(count = 64) {
  return base[base.length - 1].repeat(count)
}

module.exports = { between, before, after, first, last }
