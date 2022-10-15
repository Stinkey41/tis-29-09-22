let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(120, 30);
ctx.stroke();