function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).reduce((acc, v) => dead.every(i => suspectInfo[v].includes(i)) ? v : acc, '')
}
