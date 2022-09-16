function isValidWalk(walk) {
    x = 0
    y = 0
    walk.forEach(element => {
        if (element === 'n') { y += 1 }
        if (element === 's') { y -= 1 }
        if (element === 'w') { x -= 1 }
        if (element === 'e') { x += 1 }
    });
    return walk.length === 10 && x === 0 && y === 0
}

// Optimization: I could have implemented a count function and do count('n')==count('s') && count('w')==count('e');