
let div = document.querySelector('div');
let button = document.querySelector('button');
let array = ["./first.html", "./second.html","./third.html", "./fourth.html", "./fifth.html"];
let counter = 0;
button.addEventListener('click', async function(){
    const responce = await fetch(array[counter]);
    const text = await responce.text();
    div.innerHTML = text;
    counter++;
    if (counter === array.lenght){
        counter = 0;
    }
})
