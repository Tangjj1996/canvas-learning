import shapes from './utils/shape'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = document.body.clientWidth 
canvas.height = document.body.clientHeight - 4 

let skyStyle = ctx.createRadialGradient(canvas.width / 2, canvas.height, 0, canvas.width / 2, canvas.height, canvas.height)
skyStyle.addColorStop(0.0, '#035')
skyStyle.addColorStop(1.0, 'black')
ctx.fillStyle = skyStyle
ctx.fillRect(0, 0, canvas.width, canvas.height)

for(let i = 0; i < 200; i++) {
    let r = Math.random() * 2 + 1
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height * 0.5
    let a = Math.random() * 360

    shapes.drawStar(ctx, r, x, y, a)
}