let countPoints = word => word.split('').reduce((acc, v) => acc + (v.charCodeAt(0) - 96) ,0)

function high(x){
  return x.split(' ').reduce((acc, v) => countPoints(v) > countPoints(acc) ? v : acc, '_')
}
