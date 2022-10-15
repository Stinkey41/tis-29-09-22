let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
        
ctx.beginPath();
ctx.moveTo(100, 50); 
ctx.lineTo(150, 100);
ctx.lineTo(50, 100);
ctx.closePath();
ctx.stroke();