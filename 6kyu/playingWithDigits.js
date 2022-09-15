function digPow(n, p) {
    v = n
        .toString()
        .split('')
        .map(i => Number(i))
        .reduce((acc, val, index) => acc + val ** (p + index), 0)
    i = 0
    while (n * i < v) {
        i++
    }
    return n * i === v ? i : -1
}

// Optimization: Could have use a simple return x % n ? -1 : x / n