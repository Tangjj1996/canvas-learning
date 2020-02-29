import digit from './utils/digit'

const WINDTH_WIDTH = 1024
const WINDTH_HEIGHT = 768
const RADIUS = 5
const MARGIN_TOP = 60
const MARGIN_LEFT = 30

const canvas = document.getElementById('target')
const ctx = canvas.getContext('2d')

const endTime = new Date()
endTime.setTime(endTime.getTime() + 24 * 3600 * 1000)

let curShowTimeSeconds = 0

const balls = []
const colors = ["#33B5E5", "#0099CC", '#AA66CC', '#9933CC', '#99CC00', '#669900', '#FFBB33', 'FF8800', 'FF4444', 'CC0000']

canvas.width = WINDTH_WIDTH
canvas.height = WINDTH_HEIGHT

curShowTimeSeconds = getCurrentShowTime()

setInterval(() => {
    render(ctx)
    update()
}, 50);

function update() {
    let nextShowTimeSeconds = getCurrentShowTime()
    let nextHours = parseInt(nextShowTimeSeconds / 3600)
    let nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60)
    let nextSeconds = nextShowTimeSeconds % 60

    
    let curHours = parseInt(curShowTimeSeconds / 3600)
    let curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60)
    let curSeconds = curShowTimeSeconds % 60

    if (nextSeconds !== curSeconds) {
        if (parseInt(curHours/10) !== parseInt(nextHours/10)) {
            addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(curHours/10))
        }

        if (parseInt(curHours%10) !== parseInt(nextHours%10)) {
            addBalls(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(curHours%10))
        }

        if (parseInt(curMinutes/10) !== parseInt(nextMinutes/10)) {
            addBalls(MARGIN_LEFT + 39*(RADIUS+1), MARGIN_TOP, parseInt(curMinutes/10))
        }   

        if (parseInt(curMinutes%10) !== parseInt(nextMinutes%10)) {
            addBalls(MARGIN_LEFT + 54*(RADIUS+1), MARGIN_TOP, parseInt(curMinutes%10))
        }   

        
        if (parseInt(curSeconds/10) !== parseInt(nextSeconds/10)) {
            addBalls(MARGIN_LEFT + 78*(RADIUS+1), MARGIN_TOP, parseInt(curSeconds/10))
        }   

        if (parseInt(curSeconds%10) !== parseInt(nextSeconds%10)) {
            addBalls(MARGIN_LEFT + 93*(RADIUS+1), MARGIN_TOP, parseInt(curSeconds%10))
        }
        curShowTimeSeconds = nextShowTimeSeconds
    }

    updateBalls()
}

function updateBalls() {
    for(let i = 0, len = balls.length; i < len; i++) {
        balls[i].x += balls[i].vx
        balls[i].y += balls[i].vy
        balls[i].vy += balls[i].g

        if (balls[i].y >= WINDTH_HEIGHT - RADIUS) {
            balls[i].y = WINDTH_HEIGHT - RADIUS
            balls[i].vy = -balls[i].vy * 0.75
        }
    }
    
    var cnt = 0
    for(let i = 0, len = balls.length; i < len; i++) {
        if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDTH_WIDTH) {
            balls[cnt++] = balls[i]
        } 
    }

    while(balls.length > Math.min(300, cnt)) {
        balls.pop()
    }
}

function addBalls(x, y, num) {
    for(let i = 0,Ilen = digit[num].length;i < Ilen;i++)
        for(let j = 0, Jlen = digit[num][i].length; j < Jlen; j++) 
            if (digit[num][i][j] === 1) {
                let aBall = {
                    x: x + 2*j*(RADIUS+1) + (RADIUS+1),
                    y: y + 2*i*(RADIUS+1) + (RADIUS+1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5,
                    colors: colors[Math.floor(Math.random() * colors.length)]
                }

                balls.push(aBall)
            }
}

function render(ctx) {

    ctx.clearRect(0, 0, WINDTH_WIDTH, WINDTH_HEIGHT)

    let hours = parseInt(curShowTimeSeconds / 3600)
    let minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60)
    let seconds = curShowTimeSeconds % 60


    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), ctx)
    renderDigit(MARGIN_LEFT + 15*(RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), ctx)
    renderDigit(MARGIN_LEFT + 30*(RADIUS + 1), MARGIN_TOP, 10, ctx)
    renderDigit(MARGIN_LEFT + 39*(RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), ctx)
    renderDigit(MARGIN_LEFT + 54*(RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), ctx)
    renderDigit(MARGIN_LEFT + 69*(RADIUS + 1), MARGIN_TOP, 10, ctx)
    renderDigit(MARGIN_LEFT + 78*(RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), ctx)
    renderDigit(MARGIN_LEFT + 93*(RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), ctx)

    for(let i = 0, len = balls.length; i < len; i++) {
        ctx.fillStyle = balls[i].colors

        ctx.beginPath()
        ctx.arc(balls[i].x, balls[i].y, RADIUS, 0, 2*Math.PI, true)
        ctx.closePath()

        ctx.fill()
    }

}

function getCurrentShowTime() {
    let curTime = new Date()
    let ret = endTime.getTime() - curTime.getTime()

    ret = Math.round(ret / 1000)

    return ret > 0 ? ret : 0
}

function renderDigit(left, top, number, ctx) {
    ctx.fillStyle = "rgb(0, 102, 153)"
    /**i 表示行数 j表示 列数 */
    for(let i = 0, len = digit[number].length; i < len; i++) 
        for(let j = 0, jLen = digit[number][i].length; j < jLen; j++) 
            if (digit[number][i][j] === 1) {
                ctx.beginPath()
                ctx.arc(left + j * ((RADIUS + 1) * 2) + (RADIUS + 1) , top + i * ((RADIUS + 1) * 2) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI)
                ctx.closePath()

                ctx.fill()
            }
}