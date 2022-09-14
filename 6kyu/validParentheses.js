// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100


function validParentheses(parens) {
    n = 0
    falsy = false
    parens.split('').forEach((el) => {
        if (el === '(') {
            n = n + 1
        } else {
            n = n - 1
        }
        if (n < 0) { falsy = true }
    })
    return n === 0 && !falsy
}

// Optimization: use for instead of forEach so you can break out of the loop and skip the `falsy` trick