var RandomPosition = require('../dist/index')

var tests = [
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
  ['99', '9999999999999'],
]

tests.forEach(([a, b]) => {
  var result = RandomPosition.between(a, b)

  console.log([
    a, b, result,
    result > a && result < b
  ])
})

console.log(RandomPosition.before('!'))
console.log(RandomPosition.before('   x'))
