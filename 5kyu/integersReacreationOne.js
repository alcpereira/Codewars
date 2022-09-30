// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

let findDivisors = (n) => {
  out = []
  s = Math.sqrt(n)
  let max
  if (s % 1 === 0) { max = s }
  else { max = Math.ceil(s) }
  for (let i = 1; i <= max; i++) {
    if (n % i === 0) {
      out.push(i, n / i)
    }
  }
  return [...new Set([...out])]
}

function listSquared(m, n) {
  // console.log(m, n)
  let out = []
  for (let i = m; i < n; i++) {
    // let divisors = [...Array(i + 1).keys()].slice(1).map((e, j) => i % e === 0 ? j + 1 : undefined).filter(e => e)
    // let sum = divisors.reduce((acc, v) => Math.pow(v, 2) + acc, 0)

    // let sum = [...Array(i + 1).keys()].slice(1).reduce((acc, v) => i % v === 0 ? Math.pow(v, 2) + acc : acc, 0)
    divisors = findDivisors(i)
    let sum = divisors.reduce((acc, v) => Math.pow(v, 2) + acc, 0)
    if (Math.sqrt(sum) % 1 === 0) { out.push([i, sum]) }
  }
  return out
}

