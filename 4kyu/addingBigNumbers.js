function add(a, b) {
  const l = Math.max(a.length, b.length)
  let out = ''
  a = a.padStart(l, 0)
  b = b.padStart(l, 0)
  let rest = 0
  for (let i = l - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + rest
    const z = sum % 10
    if (sum >= 10) {
      rest = 1
    } else {
      rest = 0
    }
    out = String(z) + out
  }
  if (rest > 0) { out = rest + out }
  return out
}