function rgb(r, g, b) {
    return [r, g, b].map((x) => Math.min(Math.max(0, x), 255)).reduce((acc, v) => v < 16 ? `${acc}0${v.toString(16)}` : `${acc}${v.toString(16)}`, '').toUpperCase()
}
