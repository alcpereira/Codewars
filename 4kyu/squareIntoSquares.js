// https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/javascript


const decompose = n => {
  const sum = Math.pow(n, 2)
  const a = solve(n - 1, sum)
  return a ? a : null
}

const solve = (start, sum, arr = []) => {
  if (sum === 0) { return arr }
  if (sum < 0) { return false }
  for (let n = start; n > 0; n--) {
    if (arr.includes(n)) { continue }
    a = solve(n, sum - Math.pow(n, 2), [n, ...arr])
    if (a) { return a }
  }
  return false
}


// decompose(11) must return [1,2,4,10]. 
// Note that there are actually two ways to decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9], since 9 is smaller than 10.

console.log(decompose(50)) // , [1,3,5,8,49]);
console.log(decompose(12)) // , [1,2,3,7,9]);
console.log(decompose(44)) // , [2,3,5,7,43]);
console.log(decompose(625)) // , [2,5,8,34,624]);
console.log(decompose(5)) // , [3,4]);
console.log(decompose(4)) // , null;

