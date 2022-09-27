var uniqueInOrder=function(iterable){
  out = []
  let current
  for (const item of iterable) {
    if (item !== current) { out.push(item); current = item}
  }
  return out
}
