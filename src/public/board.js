const X = "X"
const O = "O"
const EMPTY = undefined

function initial_state() {
    board = [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]
    ]
    return board
}


function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(255)

    const w = width / 3
    const h = height / 3
    strokeWeight(4)

    line(w, 0, w, height)
    line(2*w, 0, 2*w, height)
    line(0, h, width, h)
    line(0, 2*h, width, 2*h)
}