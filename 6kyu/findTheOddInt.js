function findOdd(A) {
  return A.filter((val, index, array) => array.filter(e => e === val).length % 2 === 1)[0]
}
