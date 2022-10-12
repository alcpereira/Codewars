// To finish
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list) {
    const out = []
    let currentRange = list[0]
    let lastValue = list[0]
    for (const currentValue of list.slice(1)) {
        let i = list.indexOf(currentValue)
        if (currentValue - lastValue === 1) {
            if (list.indexOf(currentValue) === list.length - 1) {
                out.push(`${currentRange}-${currentValue}`)
            } else {
                lastValue = currentValue
            }
        } else {
            if (list.indexOf(currentValue) === list.length - 1) {
                out.push(`${currentRange}-${lastValue}`)
                out.push(currentValue)
            } else {
                if (currentRange === lastValue) {
                    out.push(currentRange)
                } else {
                    out.push(`${currentRange}-${lastValue}`)
                }
                currentRange = currentValue
                lastValue = currentValue
            }
        }

        // lastValue = currentValue
    }
    return out.join(',')
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-10--8,-6,-3-1,3-5,7-11,14,15,17-20")
// console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// console.log(solution([-10, -8, -6, -5, -4, -2, -1, 1, 2]))
// console.log(solution([-10, -9, -7, -6, -5, -3]))
// console.log("-10--8,-6,-3-1,3-5,7-11,14,15,17-20")
// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")