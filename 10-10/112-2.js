let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

for (let i = 5; i <= 14; i++) {
    ctx.moveTo(50, 10 * i);
    ctx.lineTo(150, 10 * i);
}
ctx.stroke();

for (let i =4; i <= 8; i++) {
	ctx.moveTo(70, 10 * i);
	ctx.lineTo(80, 30 * i);
}
ctx.stroke();