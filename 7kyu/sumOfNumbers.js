function getSum(a, b) {
    [a, b] = [a, b].sort((x, y) => x - y)
    arr = Array(b - a + 1).fill(a).map((e, i) => e + i).reduce((acc, v) => acc + v, 0)
    return arr
}