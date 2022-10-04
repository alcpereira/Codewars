// https://www.codewars.com/kata/5296bc77afba8baa690002d7

var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];

let checkRow = (puzzle, rowIndex) => {
    let currentRow = puzzle[rowIndex]
    currentRow = currentRow.filter(i => i !== 0)
    return currentRow.filter((v, i) => currentRow.indexOf(v) !== i).length === 0
}

let checkCol = (puzzle, colIndex) => {
    let currentCol = puzzle.reduce((acc, v) => [...acc, v[colIndex]], [])
    currentCol = currentCol.filter(i => i !== 0)
    return currentCol.filter((v, i) => currentCol.indexOf(v) !== i).length === 0
}

let checkCellGrid = (puzzle, rowIndex, colIndex) => {
    [row, col] = [rowIndex, colIndex].map(e => Math.floor(e / 3))
    rowMin = row * 3
    colMin = col * 3
    rowMax = (row + 1) * 3
    colMax = (col + 1) * 3
    gridCells = []
    for (let r = rowMin; r < rowMax; r++) {
        for (let c = colMin; c < colMax; c++) {
            gridCells = [...gridCells, puzzle[r][c]]
        }
    }
    gridCells = gridCells.filter(i => i !== 0)
    return gridCells.filter((v, i) => gridCells.indexOf(v) !== i).length === 0
}


let checkValidEntry = (puzzle, rowIndex, colIndex) => {
    return checkRow(puzzle, rowIndex) && checkCol(puzzle, colIndex) && checkCellGrid(puzzle, rowIndex, colIndex)
}

let checkValidGrid = (puzzle) => {
    for (let rowIndex = 0; rowIndex < puzzle.length; rowIndex++) {
        for (let colIndex = 0; colIndex < puzzle[rowIndex].length; colIndex++) {
            if (!checkRow(puzzle, rowIndex) || !checkCol(puzzle, colIndex) || !checkCellGrid(puzzle, rowIndex, colIndex)) {
                return false
            }
        }
    }
    return true
}

console.log(checkValid(puzzle, 4, 4))

let solvePuzzle = (puzzle) => {
    if (checkValidGrid(puzzle)) {
        return puzzle
    }


    for (let rowIndex = 0; rowIndex < puzzle.length; rowIndex++) {
        for (let colIndex = 0; colIndex < puzzle[rowIndex].length; colIndex++) {
            cell = puzzle[rowIndex][colIndex]
            if (cell === 0) {
                for (let i = 1; i < 10; i++) {

                }
            }
        }
    }
}
