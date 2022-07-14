const button = document.getElementById('button');
const clicks = document.getElementById('clicks');

let clickCount = 0;

button.addEventListener('click', () => {
  clickCount += 1;
  clicks.innerText = clickCount;
 })