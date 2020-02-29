/**小球demo 本项目未采用 */

const Ball = {
    x: 10,
    y: 10,
    r: 8,
    g: 1,
    color: 'red',
    dx: 5,
    dy: -1
}

const WINDOW_WIDTH = 500
const WINDOW_HEIGHT = 500

const canvas = document.getElementById('ball')
const ctx = canvas.getContext('2d')

canvas.width = WINDOW_WIDTH
canvas.height = WINDOW_HEIGHT

setInterval(() => {
    render(ctx)
    update()
}, 50);

function render(ctx) {
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)
    ctx.fillStyle = Ball.color
    
    ctx.beginPath()
    ctx.arc(Ball.x, Ball.y, Ball.r, 0, 2*Math.PI)
    ctx.closePath()

    ctx.fill()
}

function update() {
    Ball.x += Ball.dx
    Ball.y += Ball.dy
    Ball.dy += Ball.g

    if(Ball.y >= WINDOW_HEIGHT - Ball.r) {
        Ball.y = WINDOW_HEIGHT - Ball.r

        Ball.dy = -Ball.dy * 0.5
    }

    if (Ball.y <= Ball.r) {
        Ball.y = Ball.r
    }

    if (Ball.x >= WINDOW_WIDTH - Ball.r) {
        Ball.x = WINDOW_WIDTH - Ball.r

        Ball.dx = -Ball.dx * 0.5
    }

    if (Ball.x <= Ball.r) {
        Ball.x = Ball.r
    }

}