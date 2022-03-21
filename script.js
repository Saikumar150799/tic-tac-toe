let container = document.querySelector('.container')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let turns = document.getElementById('turns')
let winner = ''
let numberOfClicks = 0
let turn = 1
container.addEventListener('click', (e) => {
    if (e.target.getAttribute('no_of_clicks') == 0) {
        numberOfClicks += 1

        // CHANGING TURNS
        if (turn == 1) {
            e.target.innerHTML = 'X'
            turn = 2
            turns.innerHTML = 'player 2 turn'
            e.target.setAttribute('no_of_clicks', '1')
            e.target.className = 'xClass'


        } else if (turn == 2) {
            e.target.innerHTML = 'O'
            turn = 1
            turns.innerHTML = 'player 1 turn'
            e.target.className = 'oClass'
            e.target.setAttribute('no_of_clicks', '1')
        }

        // CHECKING ONE ROW
        if (one.innerHTML === 'X' || one.innerHTML === 'O') {
            if ((one.innerHTML == two.innerHTML) && (two.innerHTML == three.innerHTML)) {
                if (one.innerHTML === 'X') {
                    winner = 'X'
                } else {
                    winner = 'O'
                }
                turns.innerHTML = `player ${turn} won`
            } else if ((one.innerHTML == four.innerHTML) && (four.innerHTML == seven.innerHTML)) {
                if (one.innerHTML === 'X') {
                    winner = 'X'
                } else {
                    winner = 'O'
                }
                turns.innerHTML = `player ${turn} won`
            } else if ((one.innerHTML == five.innerHTML) && (five.innerHTML == nine.innerHTML)) {
                if (one.innerHTML === 'X') {
                    winner = 'X'
                } else {
                    winner = 'O'
                }
                turns.innerHTML = `player ${turn} won`
            }
        }

        // CHECKING FOUR ROW
        if (four.innerHTML == 'X' || four.innerHTML == 'O') {
            if ((four.innerHTML == five.innerHTML) && (five.innerHTML == six.innerHTML)) {
                if (four.innerHTML === 'X') {
                    winner = 'X'
                } else {
                    winner = 'O'
                }
                turns.innerHTML = `player ${turn} won`
            }
        }


        // CHECKING FIVE ROW
        if (five.innerHTML == 'X' || five.innerHTML == 'O') {
            if ((five.innerHTML == two.innerHTML) && (five.innerHTML == eight.innerHTML)) {
                if (five.innerHTML === 'X') {
                    winner = 'X'
                } else {
                    winner = 'O'
                }
                turns.innerHTML = `player ${turn} won`
            }
        }


        // CHECKING SIX ROW
        if (six.innerHTML == 'X' || six.innerHTML == 'O') {
            if ((six.innerHTML == three.innerHTML) && (six.innerHTML == nine.innerHTML)) {
                if (six.innerHTML === 'X') {
                    winner = 'X'
                } else {
                    winner = 'O'
                }
                turns.innerHTML = `player ${turn} won`
            }
        }


        // CHECKING SEVEN ROW
        if (seven.innerHTML == 'X' || seven.innerHTML == 'O') {
            if ((seven.innerHTML == eight.innerHTML) && (eight.innerHTML == nine.innerHTML)) {
                if (seven.innerHTML === 'X') {
                    winner = 'X'
                } else {
                    winner = 'O'
                }
                turns.innerHTML = `player ${turn} won`
            }
        }

    }

    // SHOWS WINNER
    setTimeout(function () {
        if (winner != '') {
            alert(`Winner is ${winner}`)
            location.reload()
        }
    }, 500)

    // MATCH DRAW
    if ((numberOfClicks == 9) && (winner == '')) {
        setTimeout(() => {
            alert('Match draw')
            location.reload()
        }, 500)
    }
})



