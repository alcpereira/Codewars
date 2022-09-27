function maskify(cc) {
    return cc.split('').map((e, i) => cc.length - i > 4 ? '#' : e).join('')
}
