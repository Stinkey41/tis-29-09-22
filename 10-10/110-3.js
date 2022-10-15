function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.rect(50, 50, 100, 100);
ctx.fillStyle = 'green';
ctx.fill();