let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
        
ctx.beginPath();
ctx.moveTo(50, 50); 
ctx.lineTo(100, 50);
ctx.lineTo(100, 100);
ctx.lineTo(50, 100);
ctx.fill();