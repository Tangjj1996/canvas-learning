import shapes from './utils/shape'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 800

shapes.drawStar(ctx, 100, 50, 400, 400)