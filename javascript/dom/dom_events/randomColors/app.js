const h2 = document.querySelector('h2');
const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h2.innerText = newColor;
});

function makeRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}