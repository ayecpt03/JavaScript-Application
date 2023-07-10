let clicks = 0;

function addClick() {
  clicks = clicks + 1;
  document.querySelector('.total-clicks').textContent = clicks;
}

// Simulate a click every second
setInterval(function () {
  document.getElementById('btn1').click();
}, 1000);
    