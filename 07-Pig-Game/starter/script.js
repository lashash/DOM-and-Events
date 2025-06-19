'use strict';

//მოვნიშნოთ ელემენტები და შევიტანოთ ცვლადებში
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const curent0El = document.getElementById('current--0');
const curent1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//საწყისი პოზიცია

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  curent0El.textContent = 0;
  curent1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player-winner');
  player0El.classList.remove('player-winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//კამათლის გაგორები ფუნციოა
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. დავაგენერიროთ შემთხვევითი კამათლის რიცხვი
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. გამოვაჩინოთ კამათელი
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. შევამოწმოთ კამათელი არის თუ არა ერთი
    if (dice !== 1) {
      //დავამატოთ dice მიმდინარე შედეგს
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //გადაერთოს შემდეგ მოთამაშეზე
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. დაემატოს აქტიური მოთამაშის შედეგი
    scores[activePlayer] += currentScore;
    //score[1]=score[1]+currentSocre;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. შეამოწმოს არის თუ არა მისის ქულა >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //გადართოს მოტამაშე
      switchPlayer();
    }
    //დაასრულოს თამაში
  }
});

btnNew.addEventListener('click', init);
