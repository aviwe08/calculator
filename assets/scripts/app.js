const defaultValue = 0.0;
let currentResult = defaultValue;
let calculationDescription = "";
let logEntries = [];
function getUserInput() {
  return Number(userInput.value);
}
function createUserOutput(operator, initialResult, enteredNumber) {
  const calcDescription = `${initialResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDescription);
  const logEntry = {
    operand: operator,
    previousResult: initialResult,
    userEntry: enteredNumber,
    nextResult: currentResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  console.log(logEntry.nextResult);
}

function calculateResult(operator) {
  const userEntry = getUserInput();
  const initialResult = currentResult;
  if (
    operator !== "ADD" &&
    operator !== "SUBTRACT" &&
    operator !== "DIVIDE" &&
    operator !== "MULTIPLY"
  ) {
    alert("Incorrect Operator");
    return;
  }
  if (operator === "DIVIDE" &&
      userEntry === 0) {
    alert("Can not divide by 0");
    return;
  }
  if (operator === "ADD") {
    currentResult += userEntry;
    createUserOutput("+", initialResult, userEntry);
  } else if (operator === "SUBTRACT") {
    currentResult -= userEntry;
    createUserOutput("-", initialResult, userEntry);
  } else if (operator === "DIVIDE") {
    currentResult /= userEntry;
    createUserOutput("/", initialResult, userEntry);
  } else {
    currentResult *= userEntry;
    createUserOutput("*", initialResult, userEntry);
  }
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function divide() {
  calculateResult("DIVIDE");
}

function multiply() {
  calculateResult("MULTIPLY");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
