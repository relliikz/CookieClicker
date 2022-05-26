//variables------
let clickValue = 1;
let plateBodyValue = 5;
let daggerValue = 10;
let cookies = 0;
let clicker = 0;
let perSec = 0;
const counter = document.getElementById('counter');

//event listeners------
window.addEventListener('load', buttonsLoad, { once: true });

//cookie functions------
function clickButton() {
  cookies += clickValue;
  clicker += clickValue;
  counter.innerHTML = `${cookies}`;
  counterUp();
}
function incrementCookies() {
  cookies += clickValue;
}

function cookiesPerSec() {
  perSec += clickValue;
  perSecond.innerHTML = `${perSec}`;
}

function counterUp() {
  if (clicker == 10) {
    setInterval(incrementCookies, 1000);
    clicker = 0;
    cookiesPerSec();
  }
}
setInterval(function () {
  counter.innerHTML = `${cookies}`;
}, 1000);

//shop functions//------
function buttonsLoad() {
  document.getElementById('plateBody').disabled = true;
  document.getElementById('dagger').disabled = true;
}
//->function to check cookies for plateBody
setInterval(function () {
  if (cookies >= 100) {
    document.getElementById('plateBody').disabled = false;
  } else {
    document.getElementById('plateBody').disabled = true;
  }
}, 1000);
function incrementPlateBody() {
  cookies += plateBodyValue;
}

function plateBodyPurchase() {
  if (cookies < 100) {
    console.log('not enough gp');
  } else {
    perSec += plateBodyValue;
    perSecond.innerHTML = `${perSec}`;
    setInterval(incrementPlateBody, 1000);
    cookies -= 100;
  }
}
//->function to check cookies for dagger
setInterval(function () {
  if (cookies >= 250) {
    document.getElementById('dagger').disabled = false;
  } else {
    document.getElementById('dagger').disabled = true;
  }
}, 1000);
function incrementdagger() {
  cookies += daggerValue;
}

function daggerPurchase() {
  if (cookies < 250) {
    console.log('not enough gp');
  } else {
    perSec += daggerValue;
    perSecond.innerHTML = `${perSec}`;
    setInterval(incrementdagger, 1000);
    cookies -= 250;
  }
}
