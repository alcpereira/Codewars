function arrayDiff(a, b) {
    return b.reduce((acc, el) => acc.filter((i) => i !== el), a)
}

// Optimization: a.filter(e => !b.includes(e)) is a nice solution