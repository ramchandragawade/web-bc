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

// const movieArr = [
//     {
//         title: 'K3G',
//         rating: 4
//     },
//     {
//         title: 'K2H2',
//         rating: 3
//     },
//     {
//         title: '3 Idiots',
//         rating: 5
//     },
//     {
//         title: 'DON',
//         rating: 4
//     },
//     {
//         title: 'Krish',
//         rating: 3
//     },
//     {
//         title: 'Chennai exp',
//         rating: 4
//     },
//     {
//         title: 'Chennai exp',
//         rating: 4
//     },
//     {
//         title: 'Chennai exp',
//         rating: 4
//     }
// ];

// movieArr.forEach(function(movie){
//     console.log(`${movie.title}-${movie.rating}`);
// });

// const numArr = [1,3,4,24,23,432,4324,23,432,423,2,1,1,12,23,4,34,3,43,33];

// const doubles = numArr.map (function(item){
//     return item*2;
// });

// console.log(numArr,doubles);
// const title = movieArr.map(function(movie){
//     return movie.title;
// });
// console.log(title);

//Arrow func
// const square = (x)=>{
//     return x*x;
// }

// const cube = x=>{
//     return x*x*x;
// }


//Implicit return
// const rollDie = () =>(
//     Math.floor(Math.random()*6)+1
// );
// rollDie();
// const sum = (a,b)=>a+b;
// sum(40,66);

// const movies = movieArr.map(item=>`${item.title} - ${item.rating}`);
// console.log(movies)

// console.log('Hello!!!!');
// setTimeout(()=>{
//     console.log('Are you still there??');
// }, 3000);
// console.log('Goodbye!!!!');

// const itr = setInterval(()=>{
//     console.log(Math.random());
// },2000);
// setTimeout(()=>{
//     clearInterval(itr);
//     console.log('Stop interval');
// },20000);

// //Filter
// const movieArr = [
//     {
//         title: 'K3G',
//         rating: 4,
//         year: 2003
//     },
//     {
//         title: 'K2H2',
//         rating: 3,
//         year: 2001
//     },
//     {
//         title: '3 Idiots',
//         rating: 5,
//         year: 2010
//     },
//     {
//         title: 'DON',
//         rating: 4,
//         year: 2009
//     },
//     {
//         title: 'Krish',
//         rating: 3,
//         year: 2013
//     },
//     {
//         title: 'Chennai exp',
//         rating: 4,
//         year: 2016
//     },
//     {
//         title: 'DDLJ',
//         rating: 4,
//         year: 1995
//     },
//     {
//         title: 'Sholay',
//         rating: 3,
//         year: 1970
//     },
//     {
//         title: 'Om Shanti Om',
//         rating: 4,
//         year: 2008
//     },
//     {
//         title: 'Avengers',
//         rating: 5,
//         year: 2012
//     },
//     {
//         title: 'IronMan',
//         rating: 4,
//         year: 2008
//     }
// ];
// console.log();

// const goodMovies = movieArr.filter(movie=>movie.rating>=4);
// const recentMovies = movieArr.filter(movie=>movie.year>=2010);
// console.log(goodMovies);
// console.log(recentMovies);
// const avgMovieTitle = movieArr.filter(movie=>movie.rating<4).map(movie=>movie.title);
// console.log(avgMovieTitle);

// const results = [34,54,66,77,22,88,45,53,65,73,90,23,43,52,78,90,99,67];
// console.log(results.some(item=>item>75));
// console.log(results.every(item=>item>75));
// console.log(results.every(item=>item>1));

//REDUCE

// const results = [34,54,66,77,22,88,45,53,65,73,90,23,43,52,78,90,99,67];

// const sumOfAll = results.reduce((sum,res)=>{
//     return sum+res;
// });
// console.log(sumOfAll)
// const min= results.reduce((min,res)=>{
//     if(min<res){
//         return min;
//     } else {
//         return res;
//     }
// });

// console.log(min);
// const max= results.reduce((max,res)=>{
//     if(max>res){
//         return max;
//     } else {
//         return res;
//     }
// });
// console.log(max);

// const movieArr = [
//     {
//         title: 'K3G',
//         rating: 4,
//         year: 2003
//     },
//     {
//         title: 'K2H2',
//         rating: 3,
//         year: 2001
//     },
//     {
//         title: '3 Idiots',
//         rating: 5,
//         year: 2010
//     },
//     {
//         title: 'DON',
//         rating: 4,
//         year: 2009
//     },
//     {
//         title: 'Krish',
//         rating: 3,
//         year: 2013
//     },
//     {
//         title: 'Chennai exp',
//         rating: 4,
//         year: 2016
//     },
//     {
//         title: 'DDLJ',
//         rating: 4,
//         year: 1995
//     },
//     {
//         title: 'Sholay',
//         rating: 3,
//         year: 1970
//     },
//     {
//         title: 'Om Shanti Om',
//         rating: 4,
//         year: 2008
//     },
//     {
//         title: 'Avengers',
//         rating: 5,
//         year: 2012
//     },
//     {
//         title: 'IronMan',
//         rating: 4,
//         year: 2008
//     }
// ];

// const highestRatedMovie = movieArr.reduce((high,currentMovie)=>{
//     if(currentMovie.rating>high.rating){
//         return currentMovie;
//     }
//     return high;
// });

// console.log(highestRatedMovie);

// //Initial val for reduce
// const evens = [2,4,6,8,10,12,14,16,18,20];
// const evenSum = evens.reduce((acc,item)=>{
//     return acc+item;
// });
// console.log(evenSum);
// const evenSumWithInit = evens.reduce((acc,item)=>{
//     return acc+item;
// },100);
// console.log(evenSumWithInit);

//ARROW & THIS
// const person = {
//     fn: 'Cristiano',
//     ln: 'Ronaldo',
//     fullName (){
//         return `${this.fn} ${this.ln}`;
//     },
//     full: ()=>{
//         return `${this.fn} ${this.ln}`;
//     },
//     shoutName: function(){
//         setTimeout(function(){
//             // Using normal func setTimeout uses this as the window obj
//             console.log(this);
//             console.log(this.full());
//             console.log(this.fullName());
//         },2000);
//     },
//     shoutName2: function(){
//         setTimeout(()=>{
//             // Using arrow func inside setTimeout uses this as the obj
//             console.log(this);
//             console.log(this.full());
//             console.log(this.fullName());
//         },2000);
//     }
// }

// console.log(person.fullName());
// console.log(person.full());
// person.shoutName();
// person.shoutName2();

//Default params
// Old way
// function rollDie(numSides){
//     if(numSides===undefined){
//         numSides=6
//     }
//     return Math.floor(Math.random()*numSides)+1;
// }
// rollDie();

//new way
// function rollDie(numSides=6){
//     if(numSides===undefined){
//         numSides=6
//     }
//     return Math.floor(Math.random()*numSides)+1;
// }
// console.log(rollDie());

// function greet1(msg,person){
//     console.log(`${msg},${person}`);
// }
// greet1('Hiiii','Raaj');

// function greet2(person,msg='Hi there!!'){
//     console.log(`${msg},${person}`);
// }
// greet2('Raaj');


// //SPREAD
// const num = [2,4,6,8,10,12,14,16,18,20];
// console.log(Math.max(2,4,6,8,10,12,14,16,18,20));
// console.log(Math.max([2,4,6,8,10,12,14,16,18,20]));
// console.log(Math.max(...num));

// //SPREAD with array literals;

// const cats = ['lili','luca','lego','leo'];
// const dogs = ['tom','zen','love','kuma'];

// const allPets =[...cats,...dogs];
// console.log(cats);
// console.log(dogs);
// console.log(allPets);

// //SPREAD with objects;

// const student = {
//     name: 'Raaj',
//     family: 'Gawade'
// };
// const teacher = {
//     name: 'Ram',
//     degree: false,
//     family: 'Gawade'
// };

// const postGradStud = {
//     ...student,
//     degree: true
// };

// const studTeacherCombo = {
//     ...teacher,
//     ...postGradStud
//     //degree will overwrite as per order
// }

// console.log(student);
// console.log(teacher);
// console.log(postGradStud);
// console.log(studTeacherCombo);


// const dataFromForm = {
//     email: 'asdasd@gmail.com',
//     pass: 'asdasd123123',
//     username: 'qwerewqr'
// }
// console.log(dataFromForm);

// const storeDataInDB = {
//     ...dataFromForm,
//     id: 123234,
//     isAdmin: false
// }
// console.log(storeDataInDB);

//REST params

function sum() {
    console.log(arguments);
}
sum();
sum(3,4,5);

function sum1(...nums) {
    console.log(nums)
}
sum1(3,34,33,33,3,32);

function sumAll (...nums) {
    console.log('Sum:'+nums.reduce((sum,item)=>sum+item));
}
sumAll(3,34,33,33,3,32);

function display(gold,silver,...everyoneelse) {
    console.log(`Gold winner: ${gold}`);
    console.log(`Silver winner: ${silver}`);
    console.log(`Thanks for pariticipation: ${everyoneelse}`);
}

display('Raaj','Ram','asdasd','Rasaa','TTTT','QQQQQ');