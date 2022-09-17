var number = function(busStops){
  return busStops.reduce((acc, v) => acc + v[0] - v[1], 0)
}
