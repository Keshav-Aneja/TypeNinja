'use strict';

let mainText = [
  'time if than more thing without which open by before the begin man school under tell should of stand go keep even but we public during small by program too part might work',
  'i have often walked down this street before but the pavement always stayed beneath my feet before all at once am i several stories high knowing i am on the street where you live',
  'with at see use since most and problem home consider know nation real consider very take must through there word at during there even great',
];
console.log(mainText[0].length, mainText[1].length, mainText[2].length);
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
let textLength = mainText[random].length;
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
let theme;
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
  adjuster = mainText[0].length;
} else if (random === 2) {
  adjuster = mainText[0].length + mainText[1].length;
}
//Color Themes
let underlineColor = '#dfb414';
let textColor = 'white';
let retro = document.querySelector('.retro');
let classic = document.querySelector('.classic');
let arcade = document.querySelector('.arcade');
let navLinks = document.querySelectorAll('.nav-links');
classic.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#333438';
  document.querySelector('body').style.backgroundImage = 'none';
  document.querySelector('.wrapper').style.background = 'rgb(45, 46, 50, 0.8)';
  counter.style.color = '#dfb414';
  underlineColor = '#dfb414';
  textColor = 'white';
  for (let i = 0; i < 3; i++) {
    navLinks[i].style.backgroundColor = 'rgb(123, 119, 119)';
  }
  document.querySelector('.scorebg').style.backgroundColor = '#333438';
  document.querySelector('.header').style.backgroundImage =
    'url("HeadingLogo3.png")';
  theme = 'classic';
  resultModal.style.backgroundColor = '#202021';
  resultModal.style.backgroundImage = 'none';
  resultModal.style.backgroundBlendMode = 'none';
  resultOverlay.style.backgroundColor = '#1f1e1e';
  document.querySelector('.scoreHead1').style.color = '#3c3d41';
  document.querySelector('.scoreHead2').style.color = '#3c3d41';
  document.querySelector('.scoreHead3').style.color = 'rgb(123, 119, 119)';
  document.querySelector('.scoreHead4').style.color = 'rgb(123, 119, 119)';
  document.querySelector('#currentSpeed').style.color = '#dfb414';
  document.querySelector('#Accuracy').style.color = '#dfb414';
  document.querySelector('#timeTaken').style.color = '#dfb414';
  document.querySelector('#charCount').style.color = '#dfb414';
  document.querySelector('#keyImg').style.filter = 'none';
  resultOverlay.style.backgroundColor = '#1f1e1e';
});
retro.addEventListener('click', function () {
  document.querySelector('body').style.backgroundImage =
    'url("BackgroundRetro-1.png")';
  document.querySelector('.wrapper').style.background = 'rgb(10, 5, 60,0.7)';
  textColor = 'pink';
  counter.style.color = '#ff66ff';
  underlineColor = '#ff66ff';
  for (let i = 0; i < 3; i++) {
    navLinks[i].style.backgroundColor = 'rgb(10, 5, 60)';
  }
  document.querySelector('.header').style.backgroundImage =
    'url("TextRetro-1.png")';
  document.querySelector('.scorebg').style.backgroundColor =
    'rgb(10, 5, 60,0.8)';
  theme = 'retro';
  resultModal.style.backgroundColor = '#85C4F6';
  resultModal.style.backgroundImage = 'url("BackgroundRetro-1.png")';
  resultModal.style.backgroundBlendMode = 'darken';
  resultOverlay.style.backgroundColor = '#41028D';
  document.querySelector('.scoreHead1').style.color = 'white';
  document.querySelector('.scoreHead2').style.color = 'white';
  document.querySelector('.scoreHead3').style.color = 'white';
  document.querySelector('.scoreHead4').style.color = 'white';
  document.querySelector('#currentSpeed').style.color = '#53039A';
  document.querySelector('#Accuracy').style.color = '#53039A';
  document.querySelector('#timeTaken').style.color = '#53039A';
  document.querySelector('#charCount').style.color = '#53039A';
  document.querySelector('#keyImg').style.filter = 'brightness(100)';
  resultOverlay.style.backgroundColor = '#2492BC';
});
arcade.addEventListener('click', function () {
  document.querySelector('body').style.backgroundImage = 'url("b.jpg")';
  document.querySelector('.wrapper').style.background = 'rgb(194, 240,250,0.7)';
  counter.style.color = '#0084A7';
  underlineColor = '#0080ff';
  textColor = '#0066ff';
  for (let i = 0; i < 3; i++) {
    navLinks[i].style.backgroundColor = '#0084A7';
  }
  document.querySelector('.scorebg').style.backgroundColor =
    'rgb(194, 240,250,0.8)';
  document.querySelector('.header').style.backgroundImage =
    'url("ArcadeHeading2.png")';
  theme = 'arcade';
  resultModal.style.backgroundColor = '#85C4F6';
  resultModal.style.backgroundImage = 'url("b.jpg")';
  resultModal.style.backgroundBlendMode = 'soft-light';
  document.querySelector('.scoreHead1').style.color = 'white';
  document.querySelector('.scoreHead2').style.color = 'white';
  document.querySelector('.scoreHead3').style.color = 'white';
  document.querySelector('.scoreHead4').style.color = 'white';
  document.querySelector('#currentSpeed').style.color = '#003E78';
  document.querySelector('#Accuracy').style.color = '#003E78';
  document.querySelector('#timeTaken').style.color = '#003E78';
  document.querySelector('#charCount').style.color = '#003E78';
  document.querySelector('#keyImg').style.filter = 'brightness(100)';
  resultOverlay.style.backgroundColor = '#2492BC';
});

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
document.addEventListener('keypress', function (e) {
  if (e.key === ' ' && theme === 'arcade') {
    document.querySelector('#myAudio').play();
  } else if (e.key === ' ' && theme === 'retro') {
    document.querySelector('#myAudio3').play();
  }
});
//Functions to avoid Repition
let underlineEffect = function () {
  text[adjuster + pointer].style.textDecoration = 'underline';
  text[adjuster + pointer].style.textDecorationColor = underlineColor;
  counter.textContent = `${pointer} / ${textLength}`;
};
let clearAll = function () {
  text[adjuster + pointer].style.textDecoration = 'none';
  pointer = 0;
  counter.textContent = `${pointer} / ${textLength}`;
  correctWords = 0;
  incorrectWords = 0;

  for (let i = 0; i <= textLength; i++) {
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
    text[adjuster + pointer].style.color = textColor;
    if (pointer < textLength) {
      //I did remove -1 here
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
  if (theme === 'arcade') {
    document.querySelector('#myAudio2').play();
  } else if (theme === 'retro') {
    document.querySelector('#myAudio4').play();
  }
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
  if (pointer === textLength - 1) {
    endTimer = new Date();
    const diff = endTimer - startTimer;
    showScore(diff);
    showModal();
  }
});
