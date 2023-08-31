const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".cal-btn");

let currentInput = "";
let firstOperand = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText >= "0" && buttonText <= "9") {
      currentInput += buttonText;
      display.textContent = currentInput;
    } else if (buttonText === ".") {
      if (!currentInput.includes(".")) {
        currentInput += buttonText;
        display.textContent = currentInput;
      }
    } else if (buttonText === "AC") {
      clearDisplay();
    } else if (buttonText === "+/-") {
      if (currentInput !== "") {
        currentInput = (-parseFloat(currentInput)).toString();
        display.textContent = currentInput;
      }
    } else if (buttonText === "%") {
      if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.textContent = currentInput;
      }
    } else if (["+", "-", "X", "/"].includes(buttonText)) {
      if (currentInput !== "") {
        firstOperand = currentInput;
        currentInput = "";
        operator = buttonText;
      }
    } else if (buttonText === "=") {
      if (currentInput !== "" && firstOperand !== "") {
        const result = calculate(
          parseFloat(firstOperand),
          parseFloat(currentInput),
          operator
        );
        currentInput = result.toString();
        display.textContent = currentInput;
        firstOperand = "";
        operator = "";
      }
    }
  });
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return num2;
  }
}

function clearDisplay() {
  currentInput = "";
  firstOperand = "";
  operator = "";
  display.textContent = "0";
}
