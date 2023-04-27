'use strict';
let random = Math.trunc(Math.random() * 5);

let mainText =
  'time if than more thing without which open by before the begin man school under tell should of stand go keep even but we public during small by program too part might work.  ';

let pointer = 0;
let correctWords = 0;
let counter = document.querySelector('.counter');
let text = document.querySelectorAll('.letter');
let warningMsg = document.querySelector('.warning');
let resultModal = document.querySelector('.Results');
let resultOverlay = document.querySelector('.overlay');
let incorrectWords = 0;
let currentSpeed = 0;
let highestSpeed = 0;
document.addEventListener('keydown', function (e) {
  console.log(e);
});
let keyCheck = function (key, value) {
  if (key === value) {
    return true;
  }
  return false;
};
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
document.addEventListener('keyup', function (e) {
  if (
    keyCheck(e.key, mainText[pointer]) &&
    pointer <= mainText.length + 1 &&
    ctrlKeys(e.key) &&
    e.key !== 'Backspace'
  ) {
    text[pointer].style.textDecoration = 'none';
    text[pointer].style.color = 'white';
    if (pointer <= mainText.length) {
      pointer++;
      correctWords++;
    }
    text[pointer].style.textDecoration = 'underline';
    counter.textContent = pointer <= 172 ? `${pointer} / 172` : `172 / 172`;
  } else if (ctrlKeys(e.key) && e.key !== 'Backspace') {
    text[pointer].style.color = '#da487a';
    text[pointer].style.textDecoration = 'none';
    pointer++;
    incorrectWords++;
    text[pointer].style.textDecoration = 'underline';
    counter.textContent = `${pointer} / 172`;
  } else if (e.key === 'Backspace' && ctrlKeys(e.key)) {
    text[pointer].style.textDecoration = 'none';
    if (pointer !== 0) {
      pointer--;
    } else {
      pointer = 0;
    }
    text[pointer].style.textDecoration = 'underline';
    counter.textContent = `${pointer} / 172`;
    text[pointer].style.color = 'rgb(123, 119, 119)';
  }
});
let clearAll = function () {
  text[pointer].style.textDecoration = 'none';
  pointer = 0;
  counter.textContent = `${pointer} / 172`;
  for (let i = 0; i < mainText.length; i++) {
    text[i].style.color = 'rgb(123, 119, 119)';
  }
};
document.querySelector('#redo').addEventListener('click', function () {
  clearAll();
  startTimer = new Date();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    clearAll();
    startTimer = new Date();
  }
});
document.querySelector('#redo').addEventListener('mouseover', function () {
  document.querySelector('.modal-restart').classList.remove('hidden');
});
document.querySelector('#redo').addEventListener('mouseout', function () {
  document.querySelector('.modal-restart').classList.add('hidden');
});

//Calculating Speed
let startTimer;
let endTimer;
let TimerOn = false;

document.addEventListener('keydown', function (event) {
  if (!TimerOn && ctrlKeys(event.key)) {
    startTimer = new Date();
    TimerOn = true;
  }
});

//Opening & Closing Results Modal
let close = document.querySelector('.close');
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
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
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
document.addEventListener('keydown', function (e) {
  if (e.key === '.' && pointer === 171) {
    endTimer = new Date();
    const diff = endTimer - startTimer;
    showScore(diff);
    showModal();
  }
});
