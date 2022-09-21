function digitalRoot(n) {
  return (n < 10) ? n : digitalRoot(String(n).split('').map(Number).reduce((acc, v) => acc + v,0))
}
