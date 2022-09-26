const nextDirection = {
    right: 'down',
    down: 'left',
    left: 'up',
    up: 'right'
}

const delta = { // [row, col]
    right: [0, 1],
    down: [1, 0],
    left: [0, -1],
    up: [-1, 0]
}

const isOutOfBounds = (row, col, n) => row < 0 || col < 0 || col >= n || row >= n

const hash = (x, y) => `${x},${y}`

snail = function (array) {
    if (array[0].length === 0) return []
    let row = 0
    let col = 0
    let out = []
    let dir = 'right'
    let visited = new Set()
    while (out.length < array.length ** 2) {
        curr = array[row][col]
        out.push(curr)
        visited.add(hash(row, col))

        // Check next
        row_n = row + delta[dir][0]
        col_n = col + delta[dir][1]
        if (isOutOfBounds(row_n, col_n, array.length) || visited.has(hash(row_n, col_n))) { // out of bounds or already visited -> change direction
            // console.log('OUT OF BOUNDS OR VISITED !!')
            dir = nextDirection[dir]
            row_n = row + delta[dir][0]
            col_n = col + delta[dir][1]
        }
        row = row_n
        col = col_n
    }
    return out
}


