//decearations
const display = document.querySelector(".result");
const buttons = document.querySelectorAll(".button-group button");

//storing current input
let currentInput = "";
let shouldResetDisplay = false;
function updateDisplay(content) {
  display.textContent = content;
}
//clicking button handler
function handleButtonClick(value) {
  if (shouldResetDisplay) {
    currentInput = "";
    shouldResetDisplay = false;
  }
  currentInput += value;
  updateDisplay(currentInput);
}

//buttons function
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    switch (buttonText) {
      case "+/-":
        if (currentInput !== "0" && currentInput !== "Error") {
          if (currentInput.charAt(0) === "-") {
            currentInput = currentInput.slice(1);
          } else {
            currentInput = "-" + currentInput;
          }
          updateDisplay(currentInput);
        }
        break;
      case "A/C":
        currentInput = "";
        shouldResetDisplay = false;
        updateDisplay("0");
        break;
      case "%":
        currentInput = currentInput / 100;
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
//function constructor to evaluate
function evaluateExpression(expression) {
  return new Function("return " + expression)();
}
