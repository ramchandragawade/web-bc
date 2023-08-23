const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const ul = document.querySelector('#cats');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement('li');
    newLI.innerText = catName;
    ul.append(newLI);
    input.value = '';
});