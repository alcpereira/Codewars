let removeOtherChars = str => str.replace(/[^a-z]/g, '')

let sortingCb = (a, b) => {
    [ax, bx] = [a, b].map(e => e.split(':')[1])
    if (ax.length === bx.length) {
        // > 0	sort a after b
        // < 0	sort a before b
        if ([a, b].sort()[0] === a) {
            return -1
        } else {
            return 1
        }
    } else {
        return a.length > b.length ? -1 : 1
    }
}

function mix(s1, s2) {
    [s1, s2] = [s1, s2].map(removeOtherChars)
    const uniqueLetters = new Set(s1 + s2)
    out = []
    for (letter of uniqueLetters) {
        s1c = s1.split('').filter(e => e === letter).length
        s2c = s2.split('').filter(e => e === letter).length
        if (s1c <= 1 && s2c <= 1) { continue }
        if (s1c < s2c) { out.push(`2:${letter.repeat(s2c)}`) }
        else if (s1c > s2c) { out.push(`1:${letter.repeat(s1c)}`) }
        else if (s1c === s2c) { out.push(`=:${letter.repeat(s1c)}`) }
        else { throw 'Baby, check your code' }
    }
    return out.sort((a, b) => sortingCb(a, b)).join('/')
}
