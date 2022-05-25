let clickValue = 1;
let cookies = 0;
let clicker = 0;
const counter = document.getElementById('counter');

function clickButton() {
  cookies += clickValue;
  clicker += clickValue;
  counter.innerHTML = `${cookies}`;
  counterUp();
}
function incrementCookies() {
  cookies += clickValue;
}

function counterUp() {
  if (clicker == 10) {
    setInterval(incrementCookies, 1000);
    clicker = 0;
  }
}
setInterval(function () {
  counter.innerHTML = `${cookies}`;
}, 1000);
