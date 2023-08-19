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


// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log('This is the first function');
//         }
//     } else {
//         return function(){
//             console.log('Second func');
//         }
//     }
// }

// const mystery = makeMysteryFunc();
// mystery();

// function isBetween(num) {
//     return num>=10 && num<=50;
// }

// function makeBetweenFunc(min,max) {
//     return function(num){
//         return num>=min && num<=max; 
//     }
// }

// const isChild = makeBetweenFunc(0,10);
// const isAdult = makeBetweenFunc(18,63);
// const isSenior = makeBetweenFunc(63,120);

// console.log('is 5 a child:'+isChild(5))
// console.log('is 23 a isAdult:'+isAdult(23))
// console.log('is 60 a senior:'+isSenior(60))


//Method: function defined as a property is method. All methods are function but not vice versa;
// const myMath = {
//     PI: 3.14,
//     square: function (num){
//         return num*num;
//     },
//     cube: function (num){
//         return num*num*num;
//     },
//     sub(num1,num2){
//         return num1-num2;
//     }
// }

// console.log(myMath.cube(2));
// console.log(myMath.square(3));
// console.log(myMath.sub(11,5));

//THIS

// const cat = {
//     name: 'Blue steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log(`${this.name} says MEOOOWWWW`);
//     }
// }

// cat.meow();
// const c = cat.meow;
// c();

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg () {
//         this.eggCount = this.eggCount+1;
//         return "EGG";
//     }
// }
// hen.eggCount;
// hen.layAnEgg()
// hen.eggCount;
// hen.layAnEgg()
// hen.eggCount;

// Using try/catch

// hello.toUpperCase();

// try {
//     hello.toUpperCase();
// } catch {
//     console.log('ERRORRRRR!!!!');
// }
// console.log('After');

// function yell (msg) {
//     try{
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log('Please pass a string');
//         console.log(e);
//     }
// }

//Callbacks & Array func


// const numArr = [1,3,4,24,23,432,4324,23,432,423,2,1,1,12,23,4,34,3,43,33];
// function print (element) {
//     console.log(element);
// }

// numArr.forEach( function(item) {
//     if(item%2==0){
//         print("Even:" + item);
//     }
// });

const movieArr = [
    {
        title: 'K3G',
        rating: 4
    },
    {
        title: 'K2H2',
        rating: 3
    },
    {
        title: '3 Idiots',
        rating: 5
    },
    {
        title: 'DON',
        rating: 4
    },
    {
        title: 'Krish',
        rating: 3
    },
    {
        title: 'Chennai exp',
        rating: 4
    }
];

movieArr.forEach(function(movie){
    console.log(`${movie.title}-${movie.rating}`);
});

const numArr = [1,3,4,24,23,432,4324,23,432,423,2,1,1,12,23,4,34,3,43,33];

const doubles = numArr.map (function(item){
    return item*2;
});

console.log(numArr,doubles);
const title = movieArr.map(function(movie){
    return movie.title;
});
console.log(title);

//Arrow func
const square = (x)=>{
    return x*x;
}

const cube = x=>{
    return x*x*x;
}
const sum = (a,b)=>a+b;