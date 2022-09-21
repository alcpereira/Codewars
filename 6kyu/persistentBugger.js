function persistence(num) {
  if (num < 10) {return 0}
  else {
    new_num = String(num).split('').reduce((acc, i) => acc * i, 1)
    return 1 + persistence(new_num)
  }
}
