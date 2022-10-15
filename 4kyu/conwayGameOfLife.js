// https://www.codewars.com/kata/52423db9add6f6fc39000354/train/javascript

function getGeneration(cells, generations) {

    const coordsNb = (x, y) => {
        return [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1],
        ]
    }

    const countNb = (grid, row, col) => {
        const nbCoords = coordsNb(col, row)
        return nbCoords.reduce((acc, v) => grid[v[1]] && grid[v[1]][v[0]] ? acc + grid[v[1]][v[0]] : acc, 0)
    }

    const addContour = cells => {
        if (cells[0].join('').match(/111/g)) {
            cells = [Array(cells[0].length).fill(0), ...cells]
        }
        if (cells[cells.length - 1].join('').match(/111/g)) {
            cells = [...cells, Array(cells[0].length).fill(0)]
        }
        if (cells.map(e => e[0]).join('').match(/111/g)) {
            cells = cells.map(e => [0, ...e])
        }
        if (cells.map(e => e[e.length - 1]).join('').match(/111/g)) {
            cells = cells.map(e => [...e, 0])
        }
        return cells
    }

    const trimContour = cells => {
        while (cells[0].reduce((acc, v) => acc + v, 0) === 0) {
            cells = cells.slice(1)
        }
        while (cells[cells.length - 1].reduce((acc, v) => acc + v, 0) === 0) {
            cells = cells.slice(0, cells.length - 1)
        }
        while (cells.reduce((acc, v) => acc + v[0], 0) === 0) {
            cells = cells.map(e => e.slice(1))
        }
        while (cells.reduce((acc, v) => acc + v[v.length - 1], 0) === 0) {
            cells = cells.map(e => e.slice(0, e.length - 1))
        }

        return cells
    }

    for (let gen = 0; gen < generations; gen++) {
        // check edge columns/rows for 3 in living cell in a row
        cells = addContour(cells)
        let newGrid = Array.from({ length: cells.length }, (v) => Array(cells[0].length).fill(0))

        for (let rowIndex = 0; rowIndex < cells.length; rowIndex++) {
            for (let colIndex = 0; colIndex < cells[0].length; colIndex++) {
                // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
                // Any live cell with more than three live neighbours dies, as if by overcrowding.
                // Any live cell with two or three live neighbours lives on to the next generation.
                // Any dead cell with exactly three live neighbours becomes a live cell.
                currentCell = cells[rowIndex][colIndex]
                nbCurrentCell = countNb(cells, rowIndex, colIndex)
                if (currentCell) {
                    if (nbCurrentCell < 2) { newGrid[rowIndex][colIndex] = 0 }
                    else if (nbCurrentCell > 3) { newGrid[rowIndex][colIndex] = 0 }
                    else { newGrid[rowIndex][colIndex] = 1 }
                } else {
                    if (nbCurrentCell === 3) { newGrid[rowIndex][colIndex] = 1 }
                }
            }
        }
        cells = trimContour(newGrid)
    }

    return cells
}

c = [
    [1, 1, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 1, 1]]
console.log(getGeneration(c, 6).join('\n').replace(/1/g, '#').replace(/0/g, '_').replace(/,/g, ''))
