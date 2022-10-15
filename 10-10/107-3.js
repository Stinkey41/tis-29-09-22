let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
        
ctx.beginPath();
ctx.moveTo(40,50);
ctx.lineTo(150,120);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150,50);
ctx.lineTo(40,120);
ctx.stroke();