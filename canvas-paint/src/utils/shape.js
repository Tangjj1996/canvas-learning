/**
 * 星星
 * @param {canvas} ctx  画布
 * @param {number} R 半径
 * @param {number} x 圆心x
 * @param {number} y 圆心y
 * @param {number} rotate 旋转角度
 */
function drawStar(ctx, R,x, y, rotate = 0) {    
    ctx.save()

    ctx.translate(x, y)
    ctx.rotate(rotate / 180 * Math.PI)
    ctx.scale(R, R)
    
    starPath(ctx)
    
    ctx.fillStyle = '#fb3'

    ctx.fill()
    ctx.restore()
}

function starPath(ctx) {
    ctx.beginPath()
    for(let i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos((18 + i*72)/180 * Math.PI) * 10, 
                -Math.sin((18 + i*72)/180 * Math.PI) * 10)
        ctx.lineTo(Math.cos((54 + i*72)/180 * Math.PI) * 0.5 * 10, 
                -Math.sin((54 + i*72)/180 * Math.PI) * 0.5 * 10)
    }
    ctx.closePath()
}

/**
 * 圆角矩形
 * @param {canvas} ctx 画布
 * @param {number} x 坐标x
 * @param {number} y 坐标y
 * @param {number} width 宽度
 * @param {number} height 高度
 * @param {number} radius 圆角弧度半径
 */

function drawRoundRect(ctx, x, y, width, height, radius) {
    ctx.save()
    ctx.translate(x, y)
    pathRouteRect(ctx, width, height, radius)
    ctx.strokeStyle = '#fff'
    ctx.stroke()
    ctx.restore()
}

function pathRouteRect(ctx, width, height, radius) {
    ctx.beginPath()
    ctx.arc(width - radius, height - radius,radius, 0, Math.PI / 2)
    ctx.lineTo(radius, height)
    ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI)
    ctx.lineTo(0, radius)
    ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2)
    ctx.lineTo(width - radius, 0)
    ctx.arc(width - radius, radius, radius, Math.PI * 3 / 2, 0)
    ctx.closePath()
}

export default {
    drawStar,
    drawRoundRect
}