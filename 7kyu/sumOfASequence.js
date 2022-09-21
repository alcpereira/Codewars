const sequenceSum = (begin, end, step) => {
  return begin > end ? 0 : Array(Math.floor((end-begin)/step) + 1).fill().map((_, i) => begin + step * i).reduce((acc, v) => acc + v ,0)
};
