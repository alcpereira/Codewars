let max = (a, b) => {
    if (!a) { return b }
    if (!b) { return a }
    return Math.max(a, b)
}

let longestSlideDown = (pyramid) => {
    currentRow = pyramid[0]
    for (let row = 1; row < pyramid.length; row++) {
        tempRow = pyramid[row].map((v, i) => v + max(currentRow[i - 1], currentRow[i]))
        currentRow = tempRow
    }
    return Math.max(...currentRow)
}

