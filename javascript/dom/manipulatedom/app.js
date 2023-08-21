// h1 = document.querySelector('h1');
// This pnly gives style defined inline of html component
// h1.style.color;
// h1.style.fontSize = '4em';
// h1.style.border = '2px solid pink';

const links = document.querySelectorAll('a');
for (item of links) {
    item.style.color = '#006d77';
    item.style.textDecorationColor = '#e29578';
    item.style.textDecorationStyle = 'wavy';
}
//this can give the computed style after all the override of css style of element
const h1 = document.querySelector('h1');
window.getComputedStyle(h1);
window.getComputedStyle(h1).fontSize;
window.getComputedStyle(h1).color;
window.getComputedStyle(h1).marginLeft;