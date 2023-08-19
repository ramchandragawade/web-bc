// let radius = 8;
// if(radius>0){
//     const PI=3.14;
//     let msg = "HIII!";
// }

// console.log(radius);
// console.log(msg); // doesn't exists since block scoped

// function bankRoberry() {
//     const heroes = ['Spidey', 'IronMan', 'Cap', 'BP'];
//     function cryForHelp(){
//         for(let hero of heroes) {
//             console.log(`Please help us, ${hero}`);
//         }
//     }
//     cryForHelp();
// }
// bankRoberry();

// const add = function (x,y) {
//     return x+y;
// };

// function callTwice (func) {
//     func();
//     func();
// }
// function rollDice(){
//     const roll = Math.floor(Math.random()*6)+1
//     console.log(roll);
// }
// callTwice(rollDice);


function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log('This is the first function');
        }
    } else {
        return function(){
            console.log('Second func');
        }
    }
}

const mystery = makeMysteryFunc();
mystery();

function isBetween(num) {
    return num>=10 && num<=50;
}

function makeBetweenFunc(min,max) {
    return function(num){
        return num>=min && num<=max; 
    }
}

const isChild = makeBetweenFunc(0,10);
const isAdult = makeBetweenFunc(18,63);
const isSenior = makeBetweenFunc(63,120);

console.log('is 5 a child:'+isChild(5))
console.log('is 23 a isAdult:'+isAdult(23))
console.log('is 60 a senior:'+isSenior(60))
