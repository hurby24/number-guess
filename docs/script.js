const button = document.querySelector('.btn');
const input = document.querySelector('#textArea');
const output = document.querySelector('#message');
const btw = document.querySelector('.betwen');
const restart = document.querySelector('.btn2');

let secretNumber = Math.floor(Math.random() * 101);
let score = 10;
let highScore;
let highNum = 100;
let guess;
let gameOver = false;

if(localStorage.getItem('highScore') !== null){
    highScore = localStorage.getItem('highScore');
}
else{
    highScore = 0;
}
document.querySelector('.high-score').innerHTML = highScore;


input.addEventListener("input", function(e) {
    guess = e.target.value;
    e.preventDefault();
});

button.addEventListener("click", function(e) {
    e.preventDefault();
    if(!guess) {
        alert("Please enter a number");
    }
    else if (guess > secretNumber) {
        output.innerHTML = "Too high";
        score--;
    } else if (guess < secretNumber) {
        output.innerHTML = "Too low";
        score--;
    } else {
        output.innerHTML = "You got it!";
        score = score + 10;
        highNum = highNum + 100;
        secretNumber = Math.floor(Math.random() * highNum);
        btw.innerHTML = highNum;
        if (score > highScore) {
            highScore = score;
        }
    }
    if (score === 0) {
    gameOver = true;
    output.innerHTML = "Game Over";
    input.setAttribute("disabled", "disabled");
    document.querySelector('.high-score').innerHTML = highScore;
    window.localStorage.setItem('highScore', highScore);


}
    console.log(score);
    input.value = "";
    guess = "";
    document.querySelector('.score').innerHTML = score;
    
});

restart.addEventListener("click", function(e) {
    e.preventDefault();
    score = 10;
    document.querySelector('.score').innerHTML = score;
    gameOver = false;
    output.innerHTML = "Guess the number";
    secretNumber = Math.floor(Math.random() * 101);
    input.removeAttribute("disabled");
    highNum = 100;
    btw.innerHTML = highNum;
    window.localStorage.setItem('highScore', highScore);
});

