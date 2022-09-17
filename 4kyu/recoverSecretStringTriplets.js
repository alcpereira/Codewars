secret1 = "whatisup"
triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]

let getFirstCol = (arr) => {
    return arr.reduce((acc, v) => v.length > 0 ? [...acc, v[0]] : acc, []).filter((a, i, ar) => ar.indexOf(a) === i)
}

let getOtherCol = (arr) => {
    return arr.reduce((acc, v) => v.length > 1 ? [...acc, ...v.slice(1)] : acc, []).filter((a, i, ar) => ar.indexOf(a) === i)
}

let removeCharFromInput = (char, array) => {
    return array.reduce((acc, row) => row.length > 0 ? [...acc, row.filter(e => e !== char)] : acc, [])
}



let recoverSecret = (triplets) => {
    out = ''
    while (triplets.length > 0) {
        for (letter of getFirstCol(triplets)) {
            if (!getOtherCol(triplets).includes(letter)) {
                out += letter
                console.log(letter)
                break
            }
        }
        triplets = removeCharFromInput(letter, triplets)
    }
    return out
}
