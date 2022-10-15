let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
        
ctx.beginPath();
ctx.moveTo(10, 50);
ctx.lineTo(10, 100);
ctx.stroke();