'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMassage = function (massage) {
  document.querySelector('.message').textContent = massage;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //როცა რიცხვი არაა შეტანილი
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No nimebr!';
    displayMassage('⛔ No nimebr!');

    //როცა მოტამაშე იგებს
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMassage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //როცა რიცხვი მაღალია
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? 'Too high!📈' : 'Too low!📉';
    else {
      // document.querySelector('.message').textContent = '💥You lose the game!';
      displayMassage('💥You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!📈';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You lose the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     //როცა რიცხვი დაბალია
//   } else if (guess < secretNumber)
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!📉';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You lose the game!';
//       document.querySelector('.score').textContent = 0;
//     }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMassage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
