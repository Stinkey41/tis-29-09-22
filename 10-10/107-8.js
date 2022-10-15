let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
        
ctx.beginPath();
ctx.moveTo(100, 50); 
ctx.lineTo(150, 150);
ctx.lineTo(50, 150)
ctx.fill();