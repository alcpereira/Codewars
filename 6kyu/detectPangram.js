function isPangram(string){
  return string.toLowerCase().replace(/[^a-zA-Z]+/g, '').split('').filter((e, i, arr) => arr.indexOf(e) === i).length === 26
}
