const chooseColor = (a, b) => {
  if (a === b) { return a}
  else if ((a === 'B' && b === 'G') || (a === 'G' && b === 'B')) { return 'R'}
  else if ((a === 'R' && b === 'G') || (a === 'G' && b === 'R')) { return 'B'}
  else if ((a === 'B' && b === 'R') || (a === 'R' && b === 'B')) { return 'G'}
}

function triangle(row) {
  if (row.length === 1) { return row }
  return triangle(row.split('').reduce((acc, v, i, arr) => i === row.length - 1 ? acc : acc + chooseColor(v, arr[i+1]), ''))    
}
