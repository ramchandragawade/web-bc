const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log('You clicked me(v2)');
    console.log('It worked !!!')
}
function scream () {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log("Don't touch!!!!");
}
btn.onmouseenter=scream;

const h1 = document.querySelector('h1');
h1.onclick = function (){
    console.log('This is a H1...');
}