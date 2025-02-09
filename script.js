let countdownElement = document.getElementById("countdown");
let message = document.getElementById("message");
let body = document.getElementById("main");
let count = 10;
// let twoDigit = (second) => {return second<10 && second>0 ?"0"+second:second};
let twoDigit = (second) => second.toString().padStart(2, "0");
countdownElement.textContent = twoDigit(count);

let transformElement = () => {
  countdownElement.className = "hideCounter";
  message.classList.toggle("message");
  message.classList.toggle("message_container");
  body.classList.toggle("bgColorToggle");
};

let interval = setInterval(() => {
  count--;
  // count === 0 ? transformElement() : twoDigit(count);
  if (count === 0) {
    transformElement();
    clearInterval(interval);
  }else{
    countdownElement.textContent = twoDigit(count);
  }
}, 1000);
