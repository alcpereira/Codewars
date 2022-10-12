// https://www.codewars.com/kata/52423db9add6f6fc39000354/train/javascript

// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any dead cell with exactly three live neighbours becomes a live cell.


// Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). 
// The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. 
// The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

class Cell {
    constructor(x, y, alive = 0) {
        this.x = x
        this.y = y
        this.alive = Boolean(alive)
    }
}

class Grid {
    constructor(array) {
        this.cells = []
        array.forEach((row, y) => {
            row.forEach((cell, x) => {
                this.cells.push(new Cell(x, y, cell))
            })
        });
        this.generation = 0
        this.xMin = 0
        this.yMin = 0
        this.xMax = array[0].length - 1
        this.yMax = array.length - 1
    }

    get size() {
        return `${this.xMax - this.xMin + 1}x${this.yMax - this.yMin + 1}`
    }

    // Can return undefined
    getCellByCoordinates = (x, y) => this.cells.filter((cell) => cell.x === x && cell.y === y)[0]

    countLiveNeighbours = cell => {
        let dxdyCoords = [[0, 1], [0, -1], [1, 0], [-1, 0], [-1, 1], [-1, -1], [1, 1], [1, -1]] // [x, y]
        let neighbourCoords = dxdyCoords.map(([x, y]) => [cell.x + x, cell.y + y])
        let i = neighbourCoords.reduce((acc, v) => {
            let [x, y] = v
            let c = this.getCellByCoordinates(x, y)
            if (c) {
                return c.alive ? acc + 1 : acc
            } else { return acc }
        }, 0)
        return i
    }

    generateNewGeneration() {
        let futureGen = []
        this.cells.forEach((cell) => {
            let count = this.countLiveNeighbours(cell)
            let alive
            if (cell.alive) {
                if (count < 2) {
                    alive = false
                } else if (count > 3) {
                    alive = false
                } else {
                    alive = true
                }
            } else {
                if (count === 3) { alive = true } else { alive = false }
            }
            futureGen.push(new Cell(cell.x, cell.y, alive))
        })
        // Adding a contour of dead cells around the current grid
        this.xMin--
        this.yMin--
        this.xMax++
        this.yMax++
        // Add lower and upper row
        for (let i = this.yMin; i <= this.yMax; i++) {
            futureGen.push(new Cell(this.xMin, i))
            futureGen.push(new Cell(this.xMax, i))
        }
        // add left and right column (without corners)
        for (let j = this.xMin + 1; j < this.xMax; j++) {
            futureGen.push(new Cell(j, this.yMin))
            futureGen.push(new Cell(j, this.yMax))
        }
        this.generation++
        this.cells = futureGen
    }

    get output() {
        return this.cells
        // TODO : Generate nested array for output
    }

}


function getGeneration(cells, generations) {
    g = new Grid(cells)
    for (i = 0; i < generations; i++) {
        g.generateNewGeneration()
    }
    return g.output
}

c = [[1, 1, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 0, 0, 0, 1], [0, 1, 0, 0, 0, 1, 1, 1]]
console.log(getGeneration(c, 16))

// Current issues: 
// 1) Not working lol
// 2) Need cleaning for dead cells rows/cols (not super hard)