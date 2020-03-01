import shapes from './utils/shape';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight - 4;

const skyStyle = ctx.createRadialGradient(canvas.width / 2,
  canvas.height, 0, canvas.width / 2, canvas.height, canvas.height);
skyStyle.addColorStop(0.0, '#035');
skyStyle.addColorStop(1.0, 'black');
ctx.fillStyle = skyStyle;
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < 200; i++) {
  const r = Math.random() + 0.5;
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.5;
  const a = Math.random() * 360;

  shapes.drawStar(ctx, r, x, y, a);
}

// let moonStyle = ctx.createRadialGradient( 4 / 5 * canvas.width, 200, 0,
// 4 / 5 * canvas.width, 200, 200 )
// moonStyle.addColorStop(0.0, "#035")
// moonStyle.addColorStop(1.0, '#fff')

// ctx.beginPath()
// ctx.arc(4 / 5 * canvas.width + 20, 200 + 20, 120, 0, 2 * Math.PI)

// ctx.fillStyle = moonStyle
// ctx.fill()

shapes.drawMoon(ctx, 2, (4 / 5) * canvas.width, 200, 100, 30);
shapes.drawLand(ctx, canvas.width, canvas.height);
