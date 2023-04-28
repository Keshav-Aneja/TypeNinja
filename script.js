'use strict';

let mainText = [
  'time if than more thing without which open by before the begin man school under tell should of stand go keep even but we public during small by program too part might work',
  'i have often walked down this street before but the pavement always stayed beneath my feet before all at once am i several stories high knowing i am on the street where you live',
  'with at see use since most and problem home consider know nation real consider very take must through there word at during there even great',
];
//Hiding all other text
let random;
function initator() {
  random = Math.trunc(Math.random() * 3);
  let text00 = document.querySelector('.textField00');
  let text01 = document.querySelector('.textField01');
  let text02 = document.querySelector('.textField02');
  if (random == 0) {
    text01.classList.add('hidden');
    text02.classList.add('hidden');
  } else if (random == 1) {
    text00.classList.add('hidden');
    text02.classList.add('hidden');
  } else if (random == 2) {
    text00.classList.add('hidden');
    text01.classList.add('hidden');
  }
}
initator();
let textLength = mainText[random].length - 1;
let pointer = 0;
let correctWords = 0;
let incorrectWords = 0;
let currentSpeed = 0;
let highestSpeed = 0;
let counter = document.querySelector('.counter');
counter.textContent = ` 0 / ${textLength}`;
let text = document.querySelectorAll('.letter');
let warningMsg = document.querySelector('.warning');
let resultModal = document.querySelector('.Results');
let resultOverlay = document.querySelector('.overlay');
let close = document.querySelector('.close');
let ctrlKeys = function (key) {
  if (
    key !== 'Enter' &&
    key !== 'Control' &&
    key !== 'OS' &&
    key !== 'Alt' &&
    key !== 'Shift' &&
    key !== 'CapsLock' &&
    key !== 'Escape' &&
    key !== 'ArrowRight' &&
    key !== 'ArrowLeft' &&
    key !== 'ArrowUp' &&
    key !== 'ArrowDown' &&
    key !== 'F1' &&
    key !== 'F2' &&
    key !== 'F3' &&
    key !== 'F4' &&
    key !== 'F5' &&
    key !== 'F6' &&
    key !== 'F7' &&
    key !== 'F8' &&
    key !== 'F9' &&
    key !== 'F10' &&
    key !== 'F11' &&
    key !== 'F12'
  ) {
    return true;
  }
  return false;
};
//Main Key Events
let adjuster;
if (random === 0) {
  adjuster = 0;
} else if (random === 1) {
  adjuster = mainText[0].length + 2;
} else if (random === 2) {
  adjuster = mainText[0].length + mainText[1].length + 2;
}
//-->Caps Lock Alert
document.addEventListener('keydown', function (x) {
  if (x.getModifierState('CapsLock')) {
    warningMsg.classList.remove('hidden');
  }
});
document.addEventListener('keyup', function (x) {
  if (!x.getModifierState('CapsLock')) {
    warningMsg.classList.add('hidden');
  }
});
// Adding sound effect after every word
// document.addEventListener('keypress', function (e) {
//   if (e.key === ' ') {
//     document.querySelector('#myAudio').play();
//   }
// });
//Functions to avoid Repition
let underlineEffect = function () {
  text[adjuster + pointer].style.textDecoration = 'underline';
  text[adjuster + pointer].style.textDecorationColor = '#dfb414';
  counter.textContent = `${pointer} / ${textLength}`;
};
let clearAll = function () {
  text[adjuster + pointer].style.textDecoration = 'none';
  pointer = 0;
  counter.textContent = `${pointer} / ${textLength}`;
  correctWords = 0;
  incorrectWords = 0;

  for (let i = 0; i < textLength; i++) {
    text[adjuster + i].style.color = 'rgb(123, 119, 119)';
  }
};
//--> Operations to be performed on correct key press
document.addEventListener('keyup', function (e) {
  if (
    e.key == mainText[random][pointer] &&
    pointer <= textLength + 1 &&
    ctrlKeys(e.key) &&
    e.key !== 'Backspace'
  ) {
    text[adjuster + pointer].style.textDecoration = 'none';
    text[adjuster + pointer].style.color = 'white';
    if (pointer <= textLength) {
      pointer++;
      correctWords++;
    }
    underlineEffect();
  }
  //-->Operation on Incorrect Key press
  else if (ctrlKeys(e.key) && e.key !== 'Backspace') {
    text[adjuster + pointer].style.color = '#da487a';
    text[adjuster + pointer].style.textDecoration = 'none';
    if (pointer <= textLength) {
      pointer++;
      incorrectWords++;
    }
    underlineEffect();
  }
  //--> Backspace Functionality
  else if (e.key === 'Backspace' && ctrlKeys(e.key)) {
    text[adjuster + pointer].style.textDecoration = 'none';
    if (pointer !== 0) {
      pointer--;
    } else {
      pointer = 0;
    }
    underlineEffect();
    text[adjuster + pointer].style.color = 'rgb(123, 119, 119)';
  }
});
//Restart Test button or Escape key restart
document.querySelector('#redo').addEventListener('click', function () {
  clearAll();
  startTimer = new Date();
});
// document.querySelector('#newText').addEventListener('click', function () {
//   clearAll();
//   startTimer = new Date();
// });
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    clearAll();
    startTimer = new Date();
  }
});
document.querySelector('#redo').addEventListener('mouseover', function () {
  document.querySelector('.modal-restart').classList.remove('hidden');
  document.querySelector('.modal-restart').textContent =
    'Restart Typing! [Esc]';
});
document.querySelector('#redo').addEventListener('mouseout', function () {
  document.querySelector('.modal-restart').classList.add('hidden');
});
// document.querySelector('#newText').addEventListener('mouseover', function () {
//   document.querySelector('.modal-restart').classList.remove('hidden');
//   document.querySelector('.modal-restart').textContent = 'New Text Input';
// });
// document.querySelector('#newText').addEventListener('mouseout', function () {
//   document.querySelector('.modal-restart').classList.add('hidden');
// });

//Calculating Speed
let startTimer;
let endTimer;
let TimerOn = false;

document.addEventListener('keydown', function (event) {
  if (
    !TimerOn &&
    ctrlKeys(event.key) &&
    event.key != ' ' &&
    event.key != 'Backspace'
  ) {
    startTimer = new Date();
    TimerOn = true;
  }
});

//Result Modal
let closeModal = function () {
  resultModal.classList.add('hidden');
  resultOverlay.classList.add('hidden');
};
let showModal = function () {
  resultModal.classList.remove('hidden');
  resultOverlay.classList.remove('hidden');
};
close.addEventListener('click', function () {
  closeModal();
  clearAll();
  random = Math.trunc(Math.random() * 3);
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
    if (pointer !== textLength) {
      random = Math.trunc(Math.random() * 3);
    }
    clearAll();
  }
});
resultOverlay.addEventListener('click', function () {
  closeModal();
  clearAll();
});
function showScore(diff) {
  const timeTaken = Math.trunc(diff / 1000) / 60;
  const totalWords = correctWords + incorrectWords;
  currentSpeed = Math.round((totalWords - incorrectWords) / 5 / timeTaken);
  // console.log(totalWords, incorrectWords);
  const accuracy = Math.round((correctWords * 100) / totalWords);
  document.querySelector('#currentSpeed').textContent = `${currentSpeed}wpm`;
  document.querySelector('#Accuracy').textContent = `${accuracy}%`;
  document.querySelector('#timeTaken').textContent = `${timeTaken * 60}s`;
  document.querySelector('#charCount').textContent = `${totalWords}`;
  document.querySelector('#prevScore').textContent = currentSpeed;
  if (currentSpeed > highestSpeed) {
    highestSpeed = currentSpeed;
  }
  document.querySelector('#highScore').textContent = highestSpeed;
}
//The result modal will be shown as soon as you finish the last character
document.addEventListener('keydown', function (e) {
  if (pointer === textLength) {
    // document.querySelector('#myAudio2').play();
    endTimer = new Date();
    const diff = endTimer - startTimer;
    showScore(diff);
    showModal();
  }
});
