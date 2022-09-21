function spinWords(string){
  return string.split(' ').map(e => e.length > 4 ? e.split('').reverse().join('') : e).join(' ')
}
