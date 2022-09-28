function queueTime(customers, n) {
    queue = [...customers]
    tills = Array(n).fill(0)
    totalTime = 0

    isTillHasEmptySpot = () => tills.some(e => e === 0)
    isTillHasCustomerPaying = () => tills.reduce((acc, e) => acc + e, 0) > 0
    tickTheTill = () => tills = tills.map(e => e > 0 ? e - 1 : e)
    addToTill = (e) => tills[tills.findIndex(e => e === 0)] = e

    while (queue.length > 0 || isTillHasCustomerPaying()) {
        while (isTillHasEmptySpot()) {
            q = queue.shift()
            if (!q) { break }
            addToTill(q)
        }
        tickTheTill()
        totalTime += 1
    }
    return totalTime
}





// 