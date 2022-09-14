// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

function pigIt(str) {
    return str.split(' ').map((e) => /[.,:!?]/.test(e) ? e : `${e.slice(1)}${e.charAt(0)}ay`).join(' ')
}

console.log(pigIt('Pig') === 'igPay')
console.log(pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string') === 'hisTay siay ymay tringsay')

// Optimization: using .replace() with regex (to avoid punctuation + use groups)