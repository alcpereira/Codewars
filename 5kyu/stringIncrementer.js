function incrementString (strng) {
  let lastCorrectNumber = ''
  for (let i = 0; i < strng.length; i++) {
    let curr = strng.slice(strng.length - i)
    if (isNaN(curr)) {
      break
    } else {
      lastCorrectNumber = curr
    }
  }
  if (strng === '1') return '2'
  if (lastCorrectNumber === '') {
    return strng + ~/Dev
  }
  let n = Number(lastCorrectNumber)
  if (n.length === lastCorrectNumber.length) {
    // not padded
    return strng.slice(0, n.length) + 
  } else {
    let i = n + 1
    if (String(i).length === String(n).length) {
      return strng.slice(0, strng.length - String(i).length) + 
    } else {
      if (lastCorrectNumber.startsWith('0')) {
        let k = strng.length - String(i).length// lastCorrectNumber.length // foobar00999 = 11 || 00999 = 5 || i = 4 > strng - lastCorrect + (lastCorrect - i)
        return strng.slice(0, k) + 
      } else {
        let k = strng.length - String(n).length
        return strng.slice(0, k) + 
      }
      
    }
  }
}
