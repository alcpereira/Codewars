// "***********" 6th floor (index 5) -> 11 char
// "     *     " 1st floor (index 0) -> 11 char = 5 spaces (n-1) + *

function towerBuilder(nFloors) {
    return Array(nFloors).fill().map((e, i) => ' '.repeat(nFloors - i - 1) + '*'.repeat(2 * i + 1) + ' '.repeat(nFloors - i - 1))
}


