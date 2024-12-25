'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
    document.querySelector('body').style.backgroundColor = '#500000';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    if(score>highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } 
  else if(guess !== number){
   if(score>1){
    document.querySelector('.message').textContent = guess > number ? 'too high' : 'too low';
    score--;
    document.querySelector('.score').textContent = score;
   }
   else{
    document.querySelector('.message').textContent = 'you lost'; 
    document.querySelector('.score').textContent = 0; 
   }
  }
  /*else if (guess > number) {
    if(score>1){
        document.querySelector('.message').textContent = 'too high';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'you lost'; 
    }
  } else if (guess < number) {
   if(score>1){
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
   }
   else{
    document.querySelector('.message').textContent = 'you lost';
   }
  }*/
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  number = Math.trunc(Math.random()*20)+1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});
