const form = document.querySelector('#shelterForm');
form.addEventListener('submit', function(e){
    console.log('Submitted!!!')
    e.preventDefault();
});