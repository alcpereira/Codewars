function dataReverse(data) {
  out = []
  for (let i = 0; i < (data.length / 8); i++) {
    out.push(data.slice(i*8, (i+1)*8))
  } 
  return [].concat(...out.reverse())
}
