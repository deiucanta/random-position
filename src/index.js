const base = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"

function between(a, b) {
  if (a === undefined) return before(b)
  if (b === undefined) return after(a)

  if (a === b) {
    throw new Error('The numbers must be different')
  }

  if (a > b) {
    throw new Error('The numbers are not in the correct order')
  }

  let result = ''
  let position = 0
  let carry = null
  let count = 0

  while (true) {
    let aindex = toNumber(a[position])
    let bindex = toNumber(b[position])

    if (carry !== null) bindex += base.length

    if (aindex === bindex) {
      result += toString(aindex)
    }

    if (bindex - aindex === 1) {
      if (carry === null) {
        carry = aindex
      } else {
        count++
      }
    }

    if (bindex - aindex > 1) {
      const final = random(aindex + 1, bindex - 1)

      if (carry !== null) {
        result += final < base.length
          ? toString(carry) + toString(base.length - 1).repeat(count)
          : toString(carry + 1) + toString(0).repeat(count)
      }

      result += toString(final % base.length)

      break
    }

    position++
  }

  return result
}

function before(x) {
  let result = ''
  let position = 0

  while (true) {
    let xindex = toNumber(x[position])

    if (xindex === 0) {
      result += toString(xindex)
    }

    if (xindex === 1) {
      result += toString(0) + toString(base.length - 1)
      break
    }

    if (xindex > 1) {
      result += toString(xindex - 1)
      break
    }

    position++
  }

  return result
}

function after(x) {
  let result = ''
  let position = 0

  while (true) {
    let xindex = toNumber(x[position])

    if (xindex === base.length - 1) {
      result += toString(xindex)
    } else {
      result += toString(xindex + 1)
      break
    }

    position++
  }

  return result
}

/**
 * Utilities
 */

function random(a, b) {
  const start = a
  const distance = b - a

  return Math.round(start + distance * Math.random())
}

function toNumber(x) {
  return base.indexOf(x || base[0])
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

/**
 * Exports
 */

module.exports = { between, before, after, first, last }
