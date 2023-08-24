const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#reset');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const playTill = document.querySelector('#playTill');
let winningScore = 5;
let isGameOver = false;
let p1score = 0;
let p2score = 0;
p1btn.addEventListener('click', function(){
    if(!isGameOver){
        p1score += 1;
        if (p1score === winningScore) {
            isGameOver = true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1display.textContent = p1score;
    }
});

p2btn.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningScore) {
            isGameOver = true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2display.textContent = p2score;
    }
});

resetBtn.addEventListener('click',resetAll);

playTill.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    resetAll();
});

function resetAll () {
    p1score = 0;
    p2score = 0;
    isGameOver = false;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('has-text-success', 'has-text-danger');
    p2display.classList.remove('has-text-success', 'has-text-danger');
    p1btn.disabled = false;
    p2btn.disabled = false;
}