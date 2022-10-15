let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
        
ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(180, 80);
ctx.lineTo(150, 110);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 80);
ctx.lineTo(180, 80);
ctx.stroke();