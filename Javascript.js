let count = 0;
const clickButton = document.getElementById('clickButton');
const countElement = document.getElementById('count');

clickButton.addEventListener('click', function() {
  count++;
  countElement.textContent = count;
});
