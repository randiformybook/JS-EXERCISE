const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".cal-btn");
const delButton = document.getElementById("backspace");
const clearButton = document.getElementById("ac");

let currentInput = "";
let firstOperand = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText >= "0" && buttonText <= "9") {
      currentInput += buttonText;
      console.log(currentInput);
      display.innerHTML = currentInput;
    } else if (buttonText === ".") {
      if (!buttonText.include(".")) {
        currentInput += buttonText;
      }
    } else if (["+", "x", "-", "/"].includes(buttonText)) {
      //Array.include bermaksud : apakah yang ada didalam buttonText termasuk yang di dalam array ini ["+","-","/"], dan ini akan mengembalikan nilai true, jika ada
      if (currentInput !== "") {
        if (firstOperand === "") {
          firstOperand += currentInput;
          console.log(firstOperand);
          firstOperand += buttonText;
          currentInput = "";
          operator = buttonText;
        } else {
          const result = calculate(
            parseFloat(firstOperand),
            parseFloat(currentInput),
            operator
          );
          firstOperand = result.toString();
          display.textContent = firstOperand;
          operator = buttonText;
          console.log(buttonText);
          currentInput = "";
        }
      }
    } else if (buttonText === "=") {
      if (firstOperand !== "" && currentInput !== "") {
        const result = calculate(
          parseFloat(firstOperand),
          parseFloat(currentInput),
          operator
        );
        currentInput = result.toString();
        display.textContent = currentInput;
        firstOperand = "";
        currentInput = "";
      }
    } else if (buttonText === "del") {
      // const deleteDisplay = display.textContent.slice(0, -1);
      // display.textContent = deleteDisplay;
      // currentInput = display.textContent;
      if (display.textContent.length != 1) {
        const deleteDisplay = display.textContent.slice(0, -1);
        display.textContent = deleteDisplay;
        currentInput = display.textContent;
      } else {
        currentInput = "";
        display.textContent = "0";
      }
    } else if (buttonText === "AC") {
      clearDisplay();
    } else if (buttonText === "%") {
      currentInput = currentInput / 100;
      display.textContent = currentInput;
    }
  });
});

if (currentInput === "") {
  display.textContent = "0";
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
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
