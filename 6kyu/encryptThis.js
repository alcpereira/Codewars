let ec = word => {
    out = word.split('')
    out[0] = out[0].charCodeAt(0)
    if (out.length > 2) {
        tmp = out[out.length - 1]
        out[out.length - 1] = out[1]
        out[1] = tmp
    }
    return out.join('')
}

var encryptThis = function (text) {
    return text.split(' ').map(ec).join(' ')
}
