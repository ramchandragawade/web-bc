// console.log('Helllooo world...')
// console.log(1+3)
// let total = 5;
// console.log('asdsad')
// const age = parseInt(prompt('Enter age:'));

// if(age<18){
//     console.log("You're underage");
// } else if (age>60) {
//     console.log("You're an senior citizen");
// } else if(age>18 && age<60){
//     console.log("You're an adult");
// } else {
//     console.log("Incorrect input");
// }

let maximum = parseInt(prompt('Enter the maximum number'));
while(!maximum){
    maximum = parseInt(prompt('Enter a valid number'));
}

const targetNum = Math.floor(Math.random()*maximum)+1;
console.log(targetNum);

const input = prompt("Enter your guess number! (Type 'q' to quit)");
let guess = parseInt(input);
let guessCnt = 1;
while(parseInt(guess) !== targetNum && input.toLowerCase() !== 'q' && guess.toString().toLowerCase() !=='q'){
    if(guess > targetNum) {
        guess= prompt("Too high! Enter a new guess:");
    } else if (guess < targetNum) {
        guess= prompt("Too low! Enter a new guess:");
    } else if(!parseInt(guess)) {
        guess = prompt('Enter a valid guess');
    }
    guessCnt++;
}
if(guess.toString().toLowerCase() ==='q' || input.toLowerCase() === 'q') {
    alert("Ok you lose, quitter.")
} else {
    alert(`You got it! It took ${guessCnt} attempts.`);
}