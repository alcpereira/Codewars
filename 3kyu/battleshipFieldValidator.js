let hash = (row, col) => `${row}-${col}`
let unhash = s => s.split('-').map(Number)

let getNb = (x, y) => {
    return [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1]
    ]
}

let addVisitedFromIsland = island => {
    // Todo
}

let check = islands => {
    // Should have exactly 1 of 4, 2 of 3, 3 of 2 and 4 of 1
    // Should be only straight lines
    // No edge touching
}

let validateBattlefield = field => {
    let visited = new Set()
    let islands = []
    for (let row = 0; row < field.length; row++) {
        for (let col = 0; col < field[row].length; col++) {
            let cell = field[row][col]
            let h = hash(row, col)
            if (visited.has(h)) { continue }
            if (cell === 0) { continue }
            // Not zero, and not visisted yet
            let currentIsland = [h]
            visited.add(h)
            q = [h]

            // Add it to visited, start new island
        }
    }
    return check(islands)
}