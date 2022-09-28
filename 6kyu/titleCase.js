let camelCase = (word) => {
    return word.split('').reduce((acc, e, i) => i === 0 ? acc + e.toUpperCase() : acc + e.toLowerCase(), '')
}

function titleCase(title, minorWords = '') {
    if (title === '') { return '' }
    minorWords = minorWords.split(' ').map(e => e.toLowerCase())
    title = title.split(' ')
    out = []
    for (let i = 0; i < title.length; i++) {
        curr = title[i]
        if (i === 0) { console.log(camelCase(curr)); out.push(camelCase(curr)) }
        else {
            if (minorWords.includes(curr.toLowerCase())) { out.push(curr.toLowerCase()) }
            else { out.push(camelCase(curr)) }
        }
    }
    return out.join(' ')
}
