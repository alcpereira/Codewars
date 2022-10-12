// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n) {
  n = String(n).split('')
  for (let i = n.length - 1; i > 0; i--) {
    if (n[i] > n[i - 1]) {
      tmp = n[i]
      n[i] = n[i - 1]
      n[i - 1] = tmp
      return Number(n.join(''))
    }
  }
  return -1
}

console.log(nextBigger(1234567890), 1234567908)
