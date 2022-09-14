function XO(str) {
    a = str.toLowerCase().split('').reduce((acc, v) => {
        if (acc.hasOwnProperty(v)) {
            acc[v] += 1
            return acc
        } else {
            return acc
        }
    }, { x: 0, o: 0 })
    return a.x === a.o
}

// Optimization: Could have use filter === filter or regex