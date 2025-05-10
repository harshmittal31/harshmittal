// alert function /////
window.addEventListener("load", function () {
  alert("Hello! Welcome to JavaScript learning.");
});

// All event handlers after DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Task 1: Color changing button
  const mainButton = document.getElementById("colorButtonMain");
  if (mainButton) {
    mainButton.addEventListener("click", function () {
      this.style.backgroundColor = this.style.backgroundColor === 'red' ? 'blue' : 'red';
    });
  }

  const eventButton = document.getElementById("colorButtonEvent");
  if (eventButton) {
    eventButton.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  // Task 2: Keyboard Event
  const keyLogger = document.getElementById("keyLogger");
  if (keyLogger) {
    keyLogger.addEventListener("keydown", function (event) {
      console.log("Key Pressed:", event.key);
    });
  }

  // Task 3: Form Submission
  const myForm = document.getElementById("myForm");
  if (myForm) {
    myForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Form submission prevented!");
    });
  }

  // Light Bulb Toggle
  const bulbImage = document.getElementById("bulbImage");
  const toggleButton = document.getElementById("toggleButton");
  if (bulbImage && toggleButton) {
    toggleButton.addEventListener("click", function () {
      if (bulbImage.src.includes("pic_bulboff.gif")) {
        bulbImage.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        toggleButton.textContent = "Turn OFF";
      } else {
        bulbImage.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        toggleButton.textContent = "Turn ON";
      }
    });
  }

  // cueent time clock
  let clockInterval;
  let isRunning = false;
  const toggleClock = document.getElementById("toggleClock");
  if (toggleClock) {
    toggleClock.addEventListener("click", function () {
      if (!isRunning) {
        clockInterval = setInterval(updateClock, 1000);
        this.textContent = "Stop Clock";
      } else {
        clearInterval(clockInterval);
        this.textContent = "Start Clock";
      }
      isRunning = !isRunning;
    });
  }
});

// Clock Update Function
function updateClock() {
  let now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

// display values function
function displayValues() {
  let myName = document.getElementById("name").value;
  let myNumber = parseInt(document.getElementById("number").value) + 10;
  let isStudent = true;

  document.getElementById("valuesOutput").innerHTML = `
    <p>Name: ${myName}</p>
    <p>Number + 10: ${myNumber}</p>
    <p>Boolean: ${isStudent}</p>
  `;
}

function performOperations() {
  let a = 8, b = 3;
  let outputText = `
    <strong>Results:</strong><br>
    Addition: ${a + b}<br>
    Subtraction: ${a - b}<br>
    Multiplication: ${a * b}<br>
    Division: ${a / b}<br>
    Modulus: ${a % b}<br><br>
    a > b? ${a > b}<br>
    Logical AND (a > 5 && b < 10): ${a > 5 && b < 10}
  `;
  document.getElementById("operationsOutput").innerHTML = outputText;
}
///// GRADE CALCULATOR /////
function calculateGrade() {
  let marks = parseInt(document.getElementById("marks").value);
  let grade = marks >= 90 ? "A+" :
              marks >= 80 ? "A" :
              marks >= 70 ? "B" :
              marks >= 60 ? "C" :
              marks >= 50 ? "D" : "F (Fail)";
  document.getElementById("gradeOutput").innerHTML = `Your Grade: <strong>${grade}</strong>`;
}

function displayProfile() {
  let userName = document.getElementById("profileName").value;
  let userAge = parseInt(document.getElementById("age").value);
  let isStudent = document.getElementById("isStudent").value === "true";

  document.getElementById("profileOutput").innerHTML = `
    <p><strong>Name:</strong> ${userName}</p>
    <p><strong>Age:</strong> ${userAge}</p>
    <p><strong>Student:</strong> ${isStudent ? "Yes" : "No"}</p>
  `;
}

///// MULTIPLICATION TABLE GENERATOR ///////
function generateTable() {
  let num = parseInt(document.getElementById("tableNum").value);
  let output = `<strong>Multiplication Table for ${num}:</strong><br>`;
  for (let i = 1; i <= 10; i++) {
    output += `${num} x ${i} = ${num * i}<br>`;
  }
  document.getElementById("tableOutput").innerHTML = output;
}
 ///// EVEN ODD CHECKER  ////
function checkEvenOdd() {
  let num = parseInt(document.getElementById("controlNum").value);
  let result = (num % 2 === 0) ? "Even" : "Odd";
  document.getElementById("controlFlowOutput").innerHTML = `${num} is ${result}`;
}

function printNumbers() {
  let output = "Numbers: ";
  for (let i = 1; i <= 10; i++) output += i + " ";
  document.getElementById("controlFlowOutput").innerHTML = output;
}

function countDown() {
  let output = "Countdown: ";
  for (let i = 5; i >= 1; i--) output += i + " ";
  document.getElementById("controlFlowOutput").innerHTML = output;
}

function calculateSquare() {
  let num = parseInt(document.getElementById("functionNum").value);
  let square = num * num;
  document.getElementById("functionsOutput").innerText = `Square of ${num} is ${square}`;
}

const add = (a, b) => a + b;
function addNumbers() {
  let num1 = parseInt(prompt("Enter first number:"));
  let num2 = parseInt(prompt("Enter second number:"));
  let sum = add(num1, num2);
  document.getElementById("functionsOutput").innerText = `Sum: ${sum}`;
}

const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero";

function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let result;

  switch (operation) {
    case "add": result = add(num1, num2); break;
    case "subtract": result = subtract(num1, num2); break;
    case "multiply": result = multiply(num1, num2); break;
    case "divide": result = divide(num1, num2); break;
    default: result = "Invalid Operation";
  }

  document.getElementById("calculatorOutput").innerHTML = `Result: <strong>${result}</strong>`;
}

 ///// COLOUR MIXER BAR ////
function updateColor() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;

  document.getElementById("redValue").innerText = red;
  document.getElementById("greenValue").innerText = green;
  document.getElementById("blueValue").innerText = blue;

  let rgbColor = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("colorBox").style.backgroundColor = rgbColor;
}

function checkEvenOddInFunctions() {
  let num = parseInt(document.getElementById("functionNum").value);
  if (isNaN(num)) {
    document.getElementById("functionsOutput").innerText = "Please enter a valid number.";
    return;
  }
  let result = (num % 2 === 0) ? "Even" : "Odd";
  document.getElementById("functionsOutput").innerText = `${num} is ${result}`;
}
