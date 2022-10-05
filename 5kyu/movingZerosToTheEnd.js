function moveZeros(arr) {
  return arr.reduceRight((acc, v) => v === 0 ? [...acc, v] : [v, ...acc],[])
}
