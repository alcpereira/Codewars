function order(words){
  let arr = Array(words.split(' ').length - 1)
  let matches = [...words.matchAll(/\w*(\d)\w*/g)]
  matches.forEach(match => {
    w = match[0]
    i = Number(match[1]) - 1
    arr[i] = w
  })
  return arr.join(' ')
}
