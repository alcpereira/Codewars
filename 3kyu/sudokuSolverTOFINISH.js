// https://www.codewars.com/kata/5296bc77afba8baa690002d7

// Takes way too long
let puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]];

// With 3 filled row (first 3), it takes 4s. 
// let puzzle = [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 0, 0, 0, 6, 0, 0, 0, 3],
//   [4, 0, 0, 8, 0, 3, 0, 0, 1],
//   [7, 0, 0, 0, 2, 0, 0, 0, 6],
//   [0, 6, 0, 0, 0, 0, 2, 8, 0],
//   [0, 0, 0, 4, 1, 9, 0, 0, 5],
//   [0, 0, 0, 0, 8, 0, 0, 7, 9]];

// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]] 

function suggestValidEntries(puzzle, row, col) {
  let values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const rowValues = new Set(puzzle[row])
  const colValues = new Set(puzzle.map(e => e[col]))
  let [rowSubGrid, colSubGrid] = [Math.floor(row / 3), Math.floor(col / 3)]
  let subGridValues = new Set()
  for (let i = rowSubGrid * 3; i < (rowSubGrid + 1) * 3; i++) {
    for (let j = colSubGrid * 3; j < (colSubGrid + 1) * 3; j++) {
      subGridValues.add(puzzle[i][j])
    }
  }
  return values.filter(e => !rowValues.has(e) && !colValues.has(e) && !subGridValues.has(e))
}

function checkValidEntry(puzzle, row, col, entry) {
  let values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const rowValues = new Set(puzzle[row])
  const colValues = new Set(puzzle.map(e => e[col]))
  let [rowSubGrid, colSubGrid] = [Math.floor(row / 3), Math.floor(col / 3)]
  let subGridValues = new Set()
  for (let i = rowSubGrid * 3; i < (rowSubGrid + 1) * 3; i++) {
    for (let j = colSubGrid * 3; j < (colSubGrid + 1) * 3; j++) {
      subGridValues.add(puzzle[i][j])
    }
  }
  return values.filter(e => !rowValues.has(e) && !colValues.has(e) && !subGridValues.has(e)).includes(entry)
}

function isSolved(puzzle) {
  for (let row = 0; row < puzzle.length; row++) {
    for (let col = 0; col < puzzle[0].length; col++) {
      const rowValues = new Set(puzzle[row])
      if (rowValues.has(0) || rowValues.size < 9) { return false }
      const colValues = new Set(puzzle.map(e => e[col]))
      if (colValues.has(0) || colValues.size < 9) { return false }
      let [rowSubGrid, colSubGrid] = [Math.floor(row / 3), Math.floor(col / 3)]
      let subGridValues = new Set()
      for (let i = rowSubGrid * 3; i < (rowSubGrid + 1) * 3; i++) {
        for (let j = colSubGrid * 3; j < (colSubGrid + 1) * 3; j++) {
          subGridValues.add(puzzle[i][j])
        }
      }
      if (subGridValues.has(0) || subGridValues.size < 9) { return false }
    }
  }
  return true
}

function solve2(puzzle) {
  for (let row = 0; row < puzzle.length; row++) {
    for (let col = 0; col < puzzle[0].length; col++) {
      if (puzzle[row][col] === 0) {
        const entries = suggestValidEntries(puzzle, row, col)
        if (entries.length === 0) { return false }
        for (const entry of entries) {
          puzzle[row][col] = entry
          if (solve(puzzle)) { return true }
        }
        puzzle[row][col] = 0
      }
    }
  }
  return true
}

function solve(puzzle) {
  if (isSolved(puzzle)) { return true }
  for (let row = 0; row < puzzle.length; row++) {
    for (let col = 0; col < puzzle[0].length; col++) {
      if (puzzle[row][col] === 0) {
        for (let v = 1; v < 10; v++) {
          if (checkValidEntry(puzzle, row, col, v)) {
            puzzle[row][col] = v
            if (solve(puzzle)) { return true }
            puzzle[row][col] = 0
          }
        }
      }
    }
  }
  return false
}

function sudoku(puzzle) {
  return solve(puzzle) ? puzzle : false
}

console.log(sudoku(puzzle).join(','))

