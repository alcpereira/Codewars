// To finish
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list) {
    shiftedList = list.map((e, i) => list[i + 1] - e).slice(undefined, -1)
    out = ''
    for (let i = 0; i < shiftedList.length; i++) {
        curr = shiftedList[i]
        if (curr !== 1) {

        }
    }
    console.log(out)


}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")