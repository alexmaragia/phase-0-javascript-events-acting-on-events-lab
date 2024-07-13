// Select the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) { // Check to ensure dodger doesn't go out of bounds
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const rightBoundary = 360; // 400px (game width) - 40px (dodger width)

  if (left < rightBoundary) { // Check to ensure dodger doesn't go out of bounds
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for keydown event
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") { // Check for left arrow key
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") { // Check for right arrow key
    moveDodgerRight();
  }
});
