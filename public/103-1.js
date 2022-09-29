
let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', async function(){
    const responce = await fetch('/handler/?num1=4&num2=3');
    const text = await responce.text();
    div.innerHTML = text;

})
