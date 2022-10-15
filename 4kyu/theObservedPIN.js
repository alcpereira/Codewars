const edges = {
  1: [1, 2, 4],
  2: [1, 2, 3, 5],
  3: [2, 3, 6],
  4: [1, 4, 5, 7],
  5: [2, 4, 5, 6, 8],
  6: [3, 5, 6, 9],
  7: [4, 7, 8],
  8: [5, 7, 8, 9, 0],
  9: [6, 8, 9],
  0: [0, 8]
}

const getPINs = observed => {
  q = [['', observed]] // [currentString, leftToVisit]
  out = []
  while (q.length > 0) {
    let [s, pin] = q.shift()
    if (pin === '') {
      out.push(s)
      continue
    }
    let [currentNumber, ...restOfString] = String(pin).split('')
    restOfString = restOfString.join('')
    for (const addedPin of edges[currentNumber]) {
      q.push([s + String(addedPin), restOfString])
    }
  }
  return out
}
