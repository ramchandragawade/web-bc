function makeRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');
// for (let item of buttons) {
//     item.addEventListener('click',function(){
//         item.style.backgroundColor = makeRandomColor();
//         item.style.color = makeRandomColor();
//     });
// }

// for (let item of h1s) {
//     item.addEventListener('click',function(){
//         item.style.backgroundColor = makeRandomColor();
//         item.style.color = makeRandomColor();
//     });
// }

for (let item of buttons) {
    item.addEventListener('click',colorize);
}

for (let item of h1s) {
    item.addEventListener('click',colorize);
}
function colorize () {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}