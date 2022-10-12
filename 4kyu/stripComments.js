function solution(input, markers) {
  r = new RegExp(`(\\s+[${markers.join('')}].*)`, 'g')
  return input.split('\n').map(e => e.replace(r, '')).join('\n')
};

