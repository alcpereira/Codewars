function nbYear(p0, percent, aug, p) {
    years = 0
    pop = p0
    while (pop < p) {
        pop = pop * (1 + (percent / 100)) + aug
        years++
    }
    return pop === p ? years + 1 : years
}

// Optimization: Could have use a for(var years = 0; p0 < p; years++) !