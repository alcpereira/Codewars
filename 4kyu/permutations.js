// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/

// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

const permutations = string => {
  out = []
  const solve = (currentString, restOfString) => {
    if (restOfString === '') {
      out.push(currentString)
      return
    }
    for (let i = 0; i < restOfString.length; i++) {
      currentLetter = restOfString[i]
      newRestOfString = restOfString.slice(0, i) + restOfString.slice(i + 1, restOfString.length)
      solve(currentString + currentLetter, newRestOfString)
    }

  }
  solve('', string)
  return out.filter((e, i) => i === out.indexOf(e))
}

console.log(permutations('aabb'))