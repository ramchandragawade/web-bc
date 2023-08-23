const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change',function(e){
//     console.log('chahshdashdasd');
//     // triggered when we leave input/focus is lost
// });


input.addEventListener('input',function(e){
    // Triggered on every letter change/added
    h1.innerText = input.value;
});