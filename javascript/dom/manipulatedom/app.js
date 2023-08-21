// h1 = document.querySelector('h1');
// This pnly gives style defined inline of html component
// h1.style.color;
// h1.style.fontSize = '4em';
// h1.style.border = '2px solid pink';

// const links = document.querySelectorAll('a');
// for (item of links) {
//     item.style.color = '#006d77';
//     item.style.textDecorationColor = '#e29578';
//     item.style.textDecorationStyle = 'wavy';
// }
//this can give the computed style after all the override of css style of element
// const h1 = document.querySelector('h1');
// window.getComputedStyle(h1);
// window.getComputedStyle(h1).fontSize;
// window.getComputedStyle(h1).color;
// window.getComputedStyle(h1).marginLeft;
//play with class

// h2 = document.querySelector('h2');
// h2.setAttribute('class','purple');

// // will overwrite existing purple class with border
// h2.setAttribute('class','border');
// // to combine both
// const currentCls = h2.getAttribute('class');
// h2.setAttribute('class', `${currentCls} purple`); 
// // too much long cut
// h2.classList;
// h2.classList.add('border');
// h2.classList.add('purple');
// h2.classList.remove('border');
// h2.classList.contains('purple')
// h2.classList.toggle('purple')

//Traversing the dom
// b = document.querySelector('b');
// b.parentElement;
// b.parentElement.parentElement;
// p = b.parentElement;
// p.children;

// sq = document.querySelector('.square');

// //not helpful/reliable, they return the whitespace before after
// sq.nextSibling;
// sq.previousSibling;

// //instead use
// sq.nextElementSibling;
// sq.previousElementSibling;
d=document.createElement('img')
d.src='https://cdn.crash.net/styles/article/s3/pa/3161159.0064.jpg?itok=b3SVHR4Q'
body = document.querySelector('body');
body.appendChild(d);

h3 = document.createElement('h3');
h3.innerText = 'I am new!';
//singular child append
body.appendChild(h3);

//multiple can be appended
p = document.querySelector('p');
p.append('asbdkashdjkashjdkashdaskdhask')

newB = document.createElement('b');
newB.append('asdasd');
p.prepend(newB);


h2 = document.createElement('h2')

h2.append('Chickekekkekekekekek')
h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h2);

h3 = document.createElement('h3')
h3.append('vvvvvvv')
h2.after(h3)