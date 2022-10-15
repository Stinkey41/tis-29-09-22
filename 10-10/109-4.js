function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.arc(95, 105, 50, 0, getRadians(180));
ctx.stroke();

ctx.beginPath();
ctx.moveTo(145, 105);
ctx.lineTo(45, 105);
ctx.stroke();