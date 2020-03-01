import shapes from './utils/shape';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight - 4;

const skyStyle = ctx.createRadialGradient(canvas.width / 2, canvas.height, 0, canvas.width / 2, canvas.height, canvas.height);
skyStyle.addColorStop(0.0, '#035');
skyStyle.addColorStop(1.0, 'black');
ctx.fillStyle = skyStyle;
ctx.fillRect(0, 0, canvas.width, canvas.height);

shapes.drawLand(ctx, canvas.width, canvas.height);
ctx.font = "bold 50px Arial"

ctx.fillStyle = "#058"
ctx.fillText("青青草原", 40, 1200)

ctx.shadowColor = "#fff"
ctx.shadowOffsetX = 1
ctx.shadowOffsetY = 1
ctx.shadowBlur = 3

for (let i = 0; i < 200; i++) {
  const r = Math.random() + 0.5;
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.5;
  const a = Math.random() * 360;

  shapes.drawStar(ctx, r, x, y, a);
}

shapes.drawMoon(ctx, 2, (4 / 5) * canvas.width, 200, 100, 30);
