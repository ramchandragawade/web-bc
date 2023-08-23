const container = document.querySelector('#container');
const button = document.querySelector('#changeColor');

button.addEventListener('click', function(e){
    container.style.backgroundColor = makeRandomColor();
    //stops event bubbling
    e.stopPropagation();
});

container.addEventListener('click', function(e){
    container.classList.toggle('hide');
});

function makeRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}