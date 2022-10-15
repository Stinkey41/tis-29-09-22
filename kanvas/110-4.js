function getRadians(degrees) {
	return (Math.PI / 180) * degrees;
}
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(70, 40, 60, 60);
ctx.fillStyle = 'green';
ctx.fill();

ctx.beginPath();
ctx.rect(70, 130, 60, 60);
ctx.fillStyle = 'red';
ctx.fill();