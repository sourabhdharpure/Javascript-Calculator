const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const displayValElement = document.getElementById("display__numbers");
const btnNumbers = document.getElementsByClassName("btn--number");
const btnOperators = document.getElementsByClassName("btn--operator");

let displayVal = "0";
let pendingVal;
let evalStringArray = [];

function updateDisplay(e) {
  const input = e.target.innerText;
  if (displayVal === "0") {
    displayVal = "";
  }
  displayVal += input;
  displayValElement.innerText = displayVal;
}

function performOperation(e) {
  const operator = e.target.innerText;
  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;

    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;

    case "×":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;

    case "÷":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;

    case "=":
      evalStringArray.push(displayVal);
      const value = eval(evalStringArray.join(" "));
      displayVal = value + "";
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;

    default:
      break;
  }
}
[...btnNumbers].forEach((number) => {
  number.addEventListener("click", updateDisplay);
});
[...btnOperators].forEach((operator) => {
  operator.addEventListener("click", performOperation);
});

clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

// Not allowing two decimal points in input
decimal.onclick = () => { 
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}
