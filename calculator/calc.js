const display = document.querySelector(".result");
const buttons = document.querySelectorAll(".button-group button");

let currentInput = ""; // To store the current input expression
let shouldResetDisplay = false; // To track if the display needs to be reset

// Helper function to update the display
function updateDisplay(content) {
  display.textContent = content;
}

// Helper function to handle number and operator button clicks
function handleButtonClick(value) {
  if (shouldResetDisplay) {
    currentInput = "";
    shouldResetDisplay = false;
  }
  currentInput += value;
  updateDisplay(currentInput);
}

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    switch (buttonText) {
      case "A/C":
        currentInput = "";
        shouldResetDisplay = false;
        updateDisplay("0");
        break;

      case "=":
        try {
          const result = evaluateExpression(currentInput);
          updateDisplay(result);
          shouldResetDisplay = true;
        } catch (error) {
          updateDisplay("Error");
          shouldResetDisplay = true;
        }
        break;
      default:
        handleButtonClick(buttonText);
        break;
    }
  });
});

// Function to safely evaluate the expression
function evaluateExpression(expression) {
  return new Function("return " + expression)();
}
