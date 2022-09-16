function countSmileys(arr) {
    r = new RegExp('^[:|;][~-]?[\)D]$', 'm')
    return arr.reduce((acc, val) => r.test(val) ? acc + 1 : acc, 0)
}

// Learning: Be very careful with `g` flag in RegExp
// JavaScript RegExp objects are stateful when they have the global or sticky flags set 