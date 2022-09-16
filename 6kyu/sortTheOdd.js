function sortArray(array) {
    odds = array.filter((val) => Math.abs(val % 2) === 1).sort((a, b) => a - b)
    return array.map((val) => Math.abs(val % 2) === 1 ? odds.shift() : val)
}

// Learning: Only 0 is falsy, could have used only (val % 2) as the conditionnal