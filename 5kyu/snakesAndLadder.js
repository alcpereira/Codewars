class SnakesLadders {
    constructor() {
        this.players = {
            1: {
                position: 0
            }, 2: {
                position: 0
            }
        }
        this.ladders = {
            2: 38,
            7: 14,
            8: 31,
            15: 26,
            21: 42,
            28: 84,
            36: 44,
            51: 67,
            71: 91,
            78: 98,
            87: 94
        }
        this.snakes = {
            16: 6,
            46: 25,
            49: 11,
            62: 19,
            64: 60,
            74: 53,
            89: 68,
            92: 88,
            95: 75,
            99: 80
        }
        this.current_player = 1
        this.next_player = 2
        this.state = true
    }

    play(dice1, dice2) {
        console.log(dice1, dice2)
        if (!this.state) {
            return 'Game over!'
        }


        console.log(`Played the dice! Player ${this.current_player} has played (${dice1},${dice2})`)
        this.players[this.current_player].position += (dice1 + dice2)

        // handling finished position
        if (this.players[this.current_player].position === 100) {
            this.state = false
            return `Player ${this.current_player} Wins!`
        } else if (this.players[this.current_player].position > 100) {
            this.players[this.current_player].position = 100 - (this.players[this.current_player].position % 100)
        }

        if (this.ladders[this.players[this.current_player].position]) {
            this.players[this.current_player].position = this.ladders[this.players[this.current_player].position]
        }

        if (this.snakes[this.players[this.current_player].position]) {
            this.players[this.current_player].position = this.snakes[this.players[this.current_player].position]
        }

        let outString = `Player ${this.current_player} is on square ${this.players[this.current_player].position}`


        let invertPlayers = (number) => number === 1 ? 2 : 1

        dice1 === dice2 ? this.next_player = this.current_player : this.next_player = invertPlayers(this.current_player)


        this.current_player = this.next_player

        return outString
    }
}

game = new SnakesLadders()

// Note to myself: Read carefully the rules... You spent 30mn implementing a rule that didn't existed (making the result incorrect...)!
// Optimization: You don't need a next_player with the absence of your imaginary rule... Can refactor this.s
// More elegant solution with various classes



