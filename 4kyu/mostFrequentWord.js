function topThreeWords(text) {
  const r = new RegExp(/([a-z']+)/, 'gi')
  const words = {}
  text = text.toLowerCase()
  const m = text.match(r)
  if (!m) { return [] }
  for (const match of text.match(r)) {
    if (words[match]) {
      words[match] += 1
    } else {
      words[match] = 1
    }
  }
  console.log(words)
  let top3 = [0, 0, 0]
  let top3words = ['', '', '']
  for (const word in words) {
    if (word === '\'') { continue }
    const count = words[word]
    if (count < top3[2]) { continue }
    else if (count > top3[2]) { // better than 3rd
      if (count > top3[1]) { // better than 2nd
        if (count > top3[0]) { // better than 1st = top1
          top3 = [count, top3[0], top3[1]]
          top3words = [word, top3words[0], top3words[1]]
        } else { //top2
          top3 = [top3[0], count, top3[1]]
          top3words = [top3words[0], word, top3words[1]]
        }
      } else { //top3
        top3 = [top3[0], top3[1], count]
        top3words = [top3words[0], top3words[1], word]
      }
    }
  }
  console.log(top3words)
  console.log(top3)
  return top3words.filter(e => e !== '')
}