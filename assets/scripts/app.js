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
}

function add() {
  const userEntry = getUserInput();
  const initialResult = currentResult;
  currentResult += userEntry;
  createUserOutput("+", initialResult, userEntry);
}

function subtract() {
  const userEntry = getUserInput();
  const initialResult = currentResult;
  currentResult -= userEntry;
  createUserOutput("-", initialResult, userEntry);
}

function divide() {
  const userEntry = getUserInput();
  const initialResult = currentResult;
  currentResult /= userEntry;
  createUserOutput("/", initialResult, userEntry);
}

function multiply() {
  const userEntry = getUserInput();
  const initialResult = currentResult;
  currentResult *= userEntry;
  createUserOutput("*", initialResult, userEntry);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


