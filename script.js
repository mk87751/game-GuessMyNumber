'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//displaying the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//when the user click on the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('➖ No number!');
  }
  //when player wins
  else if (guess === secretnumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when the guess is wrong
  else if (secretnumber !== guess) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? '⚡ TOO high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤦‍♀️you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
