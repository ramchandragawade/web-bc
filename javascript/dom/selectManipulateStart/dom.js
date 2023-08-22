// console.dir(document)

// document.all[10].innerText = 'SSSS'

// ban = document.getElementById('banner')
// console.dir(ban)

// toc = document.getElementById('toc')
// console.dir(toc)

// const allImages = document.getElementsByTagName('img');

// for (let item of allImages ) {
//     console.log(item.src);
//     // item.src ='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const byClass = document.getElementsByClassName('square');
// for (let item of byClass ) {
//     console.log(item.src);
//     // item.src ='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// //shows only first result
// document.querySelector('p');
// document.querySelector('a[title="Java"]');

// //shows all
// document.querySelectorAll('p');
// document.querySelectorAll('a');
// document.querySelectorAll('p a');

// const links = document.querySelectorAll('p a');
// for (let item of byClass ) {
//     console.log(item.href);
// }

// // DOM manipulation

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// p.innerText = 'LOLOLOL';
// p.textContent
// // textContent shows everything
// // innertext shows what is displayed

// let as = document.querySelectorAll('a')
// for (item of as){
//     item.innerText = "I AM A LINK!!!"
// }

// h11= document.querySelector('h1');
// h11.innerText = "<i>Silkie</i>"
// // Doesn't work adds i tag in text, we ahve to use innerHtml
// h1.innerHTML = "<i>Silkie Chicken</i>"
// h1.innerHTML += '<sub>Bye</sub>'
// h1.innerHTML += '<sup>Hi</sup>'

// const firstLink=document.querySelector('a');
// firstLink.getAttribute('title');
// firstLink.setAttribute('title','List of Chickens');
// input = document.querySelector('input[type="text"]');
// input.setAttribute('type', 'color')