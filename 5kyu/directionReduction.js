function hasOptimizationLeft(arr) {
    opposite = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST'
    }
    for (let i = 0; i < arr.length - 1; i++) {
        curr = arr[i]
        next = arr[i + 1]
        if (opposite[curr] === next || opposite[next] === curr) { // SOUTH, NORTH
            return [...arr.slice(0, i), ...arr.slice(i + 2, arr.length)]
        }
    }
    return arr
}

function dirReduc(arr) {
    if (arr.length === hasOptimizationLeft(arr).length) return arr
    return dirReduc(hasOptimizationLeft(arr))
}

// Optimization: Could have used Regex