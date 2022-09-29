function diamond(n){
  if (n % 2 === 0 || n < 0) { return null}
  let mid = Math.floor(n/2)
  out = []
  for (let i = 0; i < n; i++) {
    let spaces = Math.abs(i - mid)
    let stars = n - (spaces * 2)
    out.push(' '.repeat(spaces) + '*'.repeat(stars))
  }
  return out.join('
') + '
'; 
}
