//variables
let clickValue = 1;
let plateBodyValue = 10;
let cookies = 0;
let clicker = 0;
let perSec = 0;
const counter = document.getElementById('counter');
plateBodyAfford();

//event listeners
window.addEventListener('load', plateBodyLoad);

//cookie functions
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

//shop functions
function plateBodyLoad() {
  document.getElementById('plateBody').disabled = true;
}

function plateBodyAfford() {
  if (cookies >= 100) {
    document.getElementById('plateBody').disabled = false;
  } else {
    document.getElementById('plateBody').disabled = true;
  }
}
function incrementPlateBody() {
  cookies += plateBodyValue;
}

function plateBodyPurchase() {
  perSec += plateBodyValue;
  perSecond.innerHTML = `${perSec}`;
  setInterval(incrementPlateBody, 1000);
}
