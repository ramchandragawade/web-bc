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

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click',function(){
    console.log('Button v3 click');
});
btn3.addEventListener('mousedown',function(){
    console.log('Mouse down triggered');
});

function twist () {
    console.log('Twist');
}
function shout() {
    console.log('Shout');
}

const tas= document.querySelector('#tas');
//This will overwrite to shout and twist function is ignored
// tas.onclick = twist;
// tas.onclick = shout;
//using addEventListener both func can be mapped to an event 
tas.addEventListener('click',twist);
tas.addEventListener('click',shout, {once: true});
//once will only triger once and will be removed from listener list