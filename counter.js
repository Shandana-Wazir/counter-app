  
  let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");


function updateDisplay() {
  countDisplay.textContent = count;

  // Add animation class
  countDisplay.classList.add("animate");

 // Remove it after animation finishes so it can re-trigger next time
  setTimeout(() => {
    countDisplay.classList.remove("animate");
  }, 200);
 }

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
