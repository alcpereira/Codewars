function encrypt(text, n) {
    if (n <= 0 || !text) { return text }
    text = [...text.split('').filter((e, i) => i % 2 === 1), ...text.split('').filter((e, i) => i % 2 === 0)].join('')
    return encrypt(text, n - 1)
}

function decrypt(encryptedText, n) {
    if (n <= 0 || !encryptedText) { return encryptedText }
    half = Math.floor(encryptedText.length / 2)
    out = ''
    for (i = 0; i < encryptedText.length; i++) {
        if (i % 2 === 0) {
            out += encryptedText[half + (i / 2)]
        } else {
            out += encryptedText[(i - 1) / 2]
        }
    }
    return decrypt(out, n - 1)
}
