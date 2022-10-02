let isEureka = num => {
  return String(num).split('').reduce((acc, v, i) => acc + Math.pow(v, i+1), 0) === num
}

function sumDigPow(a, b) {
  return Array(b - a).fill(a).map((e, i) => e + i).filter(isEureka)
}

