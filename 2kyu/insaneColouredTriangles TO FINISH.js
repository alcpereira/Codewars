// https://www.codewars.com/kata/5a331ea7ee1aae8f24000175/train/javascript

const chooseColor = (a, b) => {
  if (a === b) { return a }
  if (a === 'B') {
    if (b === 'G') { return 'R' }
    else { return 'G' }
  } else if (a === 'G') {
    if (b === 'B') { return 'R' }
    else { return 'B' }
  } else if (a === 'R') {
    if (b === 'B') { return 'G' }
    else { return 'B' }
  }
} // Other solutions like object is too slow compared to this function


// function triangle(row) {
//   if (row.length === 1) { return row }
//   return triangle(row.split('').reduce((acc, v, i, arr) => i === row.length - 1 ? acc : acc + chooseColor(v, arr[i + 1]), ''))
// } // 5k: mean 916ms

function triangle(row) {
  if (row.length === 1) { return row }
  s = row
  console.log(s.split('').join(' '))
  // s = simplifyString(row)
  // console.log(row, s)
  return triangle(s.split('').reduce((acc, v, i, arr) => i === s.length - 1 ? acc : acc + chooseColor(v, arr[i + 1]), ''))
} // 5k: mean 916ms


let generateString = (l) => {
  out = ''
  letters = ['R', 'G', 'B']
  for (let i = 0; i < l; i++) {
    out += letters[Math.floor(Math.random() * 3)]
  }
  return out
}

let timeIt = (tries, stringLength, f) => {
  let times = []
  const s = generateString(stringLength)
  for (let i = 0; i < tries; i++) {
    let now = Date.now()
    console.log(f(s))
    times.push(Date.now() - now)
  }
  const mean = Math.floor(times.reduce((acc, v) => acc + v, 0) / times.length)
  console.log(`Mean time: ${mean}ms`)
}

let simplifyString = (s) => {
  let out = s[0]
  let last = s[0]
  for (let i = 1; i < s.length - 1; i++) {
    let curr = s[i]
    if (s[i] === last && s[i + 1] === last) { continue }
    last = curr
    out += last
  }
  return out
}

// timeIt(10, 100_000, triangle)

// console.log(triangle('RBRGBRB'), 'should return G')
console.log(triangle('RBRGBRBGGRRRBGBBBGG'), 'should return G')
// console.log(triangle('GBRGRRRGGGBGBBBRBBGGRGBRGGGGBBRRRRGGBRRRBGBRRBBRRBRRRRRRGBBGRBBBGBRBRBGGGGGBRBRBRRGGBRGRRRBRGRGBRGGRBGRRGRGGBGGRBGBRRBBGBGRGRGBRBBBRRRGGGGRGGRBBGGRBGBBBRGBRGGBGGRRBBRGBGGGRGRBBGGGRRRRRBRRBRGGRRBGRBRBGBRGGBRG'), 'should return B')
// console.log(triangle('RGGGBBGRBRGGRBGGGGBBBRRGGGBRRRGRGBGBGBRGBBBRGGGRGBGGRRGBRBGBRBBBBRGGRRGBRRGBGGGRGRBGGBRRRBBBGRRGGBGRRRRBRRBGRGRBBRRBBGRGGRGBBBBGRRRRRGGGRRRRGBRGRGGRBRGRGGBRGBGGGGRRRGGGRRBBGBRRBRRRGRBGRBGRGBBBGGRGBRGRGBRBGRGGGRGRGGGRRBRBBRBRBGBRBGGGRBGGGBBBGRRGGBGGBGGGBGRRGRRBRRRBRGRGGGRGRBRGGGGRRBBRGBRBBRGRRGBGRRRBRRRBGGRRRRRBBBBRGGRBGGBRBGBGBGBBGBBGGRRRBGGBRRGBRGRGBRRRRBRRBRRBBRGGRBBRGGRBRBGRBGRBGBGGBBGBBBRBGRRRRRRGRRBGBGBGGGGGRGRGGBRBRBRBGGBBRBBRGRBRRRGGRRGBBGRBBBBGRRGBRGBRGRBGRGRBRBGRRRGRBRRBGGRGBBBBBBGGBRBBBBBRBRRRRGRRBRBRRGBBGGBBRBRGGRRBGBRRRBRBBBBBGRRRGGGGRGRRRBGRBGRRBRBRGBRBGBRGBBRGRGGGGGBGRBRGGRBRBRBBBBRRRRGRGRRBRGBRBGRBGBBRBBGBBRBBBGRRBBGBGGGGRBRBRBBRRBGGGRRBBRGBGBRGBGRGGGBRBBBBBBRGRBRB'), 'should return G')
// console.log(triangle('RGGGBBGRBRGGRBGGGGBBBRRGGGBRRRGRGBGBGBRGBBBRGGGRGBGGRRGBRBGBRBBBBRGGRRGBRRGBGGGRGRBGGBRRRBBBGRRGGBGRRRRBRRBGRGRBBRRBBGRGGRGBBBBGRRRRRGGGRRRRGBRGRGGRBRGRGGBRGBGGGGRRRGGGRRBBGBRRBRRRGRBGRBGRGBBBGGRGBRGRGBRBGRGGGRGRGGGRRBRBBRBRBGBRBGGGRBGGGBBBGRRGGBGGBGGGBGRRGRRBRRRBRGRGGGRGRBRGGGGRRBBRGBRBBRGRRGBGRRRBRRRBGGRRRRRBBBBRGGRBGGBRBGBGBGBBGBBGGRRRBGGBRRGBRGRGBRRRRBRRBRRBBRGGRBBRGGRBRBGRBGRBGBGGBBGBBBRBGRRRRRRGRRBGBGBGGGGGRGRGGBRBRBRBGGBBRBBRGRBRRRGGRRGBBGRBBBBGRRGBRGBRGRBGRGRBRBGRRRGRBRRBGGRGBBBBBBGGBRBBBBBRBRRRRGRRBRBRRGBBGGBBRBRGGRRBGBRRRBRBBBBBGRRRGGGGRGRRRBGRBGRRBRBRGBRBGBRGBBRGRGGGGGBGRBRGGRBRBRBBBBRRRRGRGRRBRGBRBGRBGBBRBBGBBRBBBGRRBBGBGGGGRBRBRBBRRBGGGRRBBRGBGBRGBGRGGGBRBBBBBBRGRBRB'), 'should return G (modified)')


// RBRGBRB | RBRGBRB
// GGBRGG | GGBRGG -> GBRG
// GRGBG
// BBRR
// BGR
// RB
// G should return G