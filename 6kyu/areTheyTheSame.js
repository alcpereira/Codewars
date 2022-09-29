function comp(a, b){
  console.log(a, b)
  if (a == undefined || b == undefined) { return false }
  for (let i = 0; i < a.length; i++) {
    j = b.findIndex(e => e === Math.pow(a[i], 2))
    b = [...b.slice(0, j), ...b.slice(j + 1, b.length)]
  }
  return b.length === 0
}
