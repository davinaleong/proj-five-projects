const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let progress = 0;

let interval = setInterval(blur, 30);

function blur() {
  progress++;
  if (progress >= 100) {
    clearInterval(interval);
  }
  loadingText.innerText = `${progress}%`;
  loadingText.style.opacity = scale(progress, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
