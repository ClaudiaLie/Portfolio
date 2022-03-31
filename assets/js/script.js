const desk = document.getElementById('desk')
const plant = document.getElementById('plant')
const board = document.getElementById('board')
const deskYFromBottom = 10
const deskYFromLeft = 0
const plantYFromRight = 0
const plantYFromBottom = 10
const boardYFromBottom = 10

board.style.bottom = boardYFromBottom + '%'
plant.style.bottom = plantYFromBottom + '%'
plant.style.marginRight = plantYFromRight + '%'
desk.style.marginLeft = deskYFromLeft + '%'
desk.style.bottom = deskYFromBottom + '%'

function move() {
    const incrementer = window.scrollY

    desk.style.bottom = deskYFromBottom + incrementer * 0.1 + '%'
    desk.style.marginLeft = deskYFromLeft + incrementer * 0.15 + '%'

    plant.style.bottom = plantYFromBottom + incrementer * 0.1 + '%'
    plant.style.marginRight = plantYFromRight + incrementer * 0.10 + '%'

    board.style.bottom = boardYFromBottom + incrementer * 0.15 + '%'
}

window.addEventListener('scroll', move)