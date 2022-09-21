function solution(number){
  return number < 0 ? 0 : [...Array(number).keys()].filter(e => e % 3 === 0 || e % 5 === 0).reduce((acc, v) => acc + v,0)
}
