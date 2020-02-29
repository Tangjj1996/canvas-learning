function drawStar(ctx, R, r, x, y, rotate = 0) {    
    ctx.beginPath()
    for(let i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos((18 + i*72 - rotate)/180 * Math.PI) * R + x, 
                -Math.sin((18 + i*72 - rotate)/180 * Math.PI) * R + y)
        ctx.lineTo(Math.cos((54 + i*72 - rotate)/180 * Math.PI) * r + x, 
                -Math.sin((54 + i*72 - rotate)/180 * Math.PI) * r + y)
    }
    ctx.closePath()
    
    ctx.lineWidth = 5
    ctx.stroke()
}

export default {
    drawStar
}