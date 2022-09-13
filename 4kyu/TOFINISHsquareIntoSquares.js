// https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/javascript


function decompose(n) {
    const n_s = n ** 2
    let current = n - 1
    let stack = []
    let sum = stack.reduce((acc, v) => acc + v, 0)
    if (n_s - (current ** 2) === 0) {
        return current
    } else {

    }

}

console.log(decompose(50)) // , [1,3,5,8,49]);
console.log(decompose(12)) // , [1,2,3,7,9]);
console.log(decompose(44)) // , [2,3,5,7,43]);
console.log(decompose(625)) // , [2,5,8,34,624]);
console.log(decompose(5)) // , [3,4]);

// 50
// 49 -> 49*2 