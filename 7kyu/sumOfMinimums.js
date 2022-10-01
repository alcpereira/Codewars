function sumOfMinimums(arr) {
  return arr.reduce((acc, v) => acc + v.reduce((accu, val) => val <= accu ? val : accu , Infinity), 0)
}
