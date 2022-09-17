function longest(s1, s2) {
  return [...s1, ...s2].filter((a,i, arr) => arr.indexOf(a) === i).sort().join('')
}
// Optimization: Could have use new Set(s1 + s2) !
