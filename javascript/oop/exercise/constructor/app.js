// function hex(r,g,b){
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r,g,b) {
//     return `rgb(${r}, ${g}, ${b})`;
// }

// hex(255,100,25);
// "#ff6419"
// "rgb(255, 100, 25)"

// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     },
//     color.hex = function() {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(255,10,100);
// console.log(firstColor.hex());
// const black = makeColor(0,0,0,);
// console.log(black.hex());
// console.log(firstColor.hex === black.hex);

// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b =b;
//     this.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     };
//     this.rgb = function () {
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     },
//  This is still creating seperate space for function for each obj
//     console.log(this);
// }

// const black = new Color(0,0,0);


function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.rgba = function (a=1) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const black = new Color(0,0,0);
const c1 = new Color(244,56,22);
const c2= new Color(120,90,255);
console.log(c1.hex === c2.hex); //true
c1.rgba(0.5)
'rgba(244, 56, 22, 0.5)'