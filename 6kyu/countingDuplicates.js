function duplicateCount(text) {
    a = text.toLowerCase().split('').reduce((acc, v) => {
        if (acc.hasOwnProperty(v)) {
            acc[v] += 1
            return acc
        } else {
            acc[v] = 1
            return acc
        }
    }
        , {})
    i = 0
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            if (a[key] >= 2) {
                i++
            }
        }
    }
    return i
}
// Optimizaiton: could have used .includes()