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
 * 
 * @param {canvas} ctx 
 * @param {number} d 特征点
 * @param {number} x 偏移x
 * @param {number} y 偏移y
 * @param {number} R 外圆半径
 * @param {number} rotate 旋转角度 
 * @param {hex} fillColor 填充色
 */
function drawMoon(ctx, d, x, y, R, rotate = 0, fillColor = '#fb5') {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotate * Math.PI / 180)
    ctx.scale(R, R)
    
    moonPath(ctx, d)

    ctx.fillStyle = fillColor

    ctx.fill()
    ctx.restore()
}

function moonPath(ctx, d) {
    ctx.beginPath()
    ctx.arc(0, 0, 1, 0.5*Math.PI, 1.5*Math.PI, true)
    ctx.moveTo(0, -1)
    ctx.arcTo(d, 0, 0, 1, dis(0, -1, d, 0) / d)
    ctx.closePath()
}

function dis(x1, y1, x2, y2) {
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
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

/**
 * 
 * @param {canvas} ctx 
 * @param {number} finalX 
 * @param {number} finalY 
 */

function drawLand(ctx, finalX, finalY) {
    ctx.save()

    ctx.beginPath()
    ctx.moveTo(0, 4 / 5 * finalY)
    ctx.bezierCurveTo(2 / 5 * finalX, 3 / 5 * finalY, 4 / 5 * finalX, 4 / 5 * finalY, finalX, 4 / 5 * finalY)
    ctx.lineTo(finalX, finalY)
    ctx.lineTo(0, finalY)
    ctx.closePath()

    let landStyle = ctx.createLinearGradient(0, 3 / 5 * finalY, 0, finalY)
    landStyle.addColorStop(0.0, '#035')
    landStyle.addColorStop(1.0, 'green')
    ctx.fillStyle = landStyle

    ctx.fill()
    ctx.restore()
}

export default {
    drawStar,
    drawMoon,
    drawRoundRect,
    drawLand
}