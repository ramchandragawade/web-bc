const resetBtn = document.querySelector('#reset');
const playTill = document.querySelector('#playTill');
let winningScore = 5;
let isGameOver = false;
let p1score = 0;
let p2score = 0;
const p1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: document.querySelector('#p1display')
};
const p2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: document.querySelector('#p2display')
};


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function(){
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function(){
    updateScores(p2, p1);
});

resetBtn.addEventListener('click',resetAll);

playTill.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    resetAll();
});

function resetAll () {
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
