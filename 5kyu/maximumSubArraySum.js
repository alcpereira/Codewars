var maxSequence = function(arr){
  let maxSum = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      curr = arr.slice(i, i + j + 1)
      sum = curr.reduce((acc, v) => acc + v, 0)
      if (sum > maxSum) {
        maxSum = sum
      }
    }
  }
  return maxSum
}
