// add function
function add(a,b) {
    return a+b;
}

// subtract function
function subtract(a,b) {
    return a-b;
}

// multiply function
function multiply(a,b) {
    return a*b;
}

// divide function
function divide(a,b) {
    return a/b;
}

// power function
function power(a,b) {
    return a**b;
}

// square root function
function sqrt(a) {
    return a**(1/2);
}

// factorial function
function factorial(num) {
    value = 1;
    if (num === 0) return 1;
    for (let i = num; i > 0; i--) {
        value *= i;
    }
    return value;
}

// operate function
function operate(a, operator, b=undefined) {
    a = Number(a);
    b = Number(b);
    let answer;
    switch (operator) {
        case "+": 
            answer = add(a,b);
            break;
        case "-":
            answer = subtract(a,b);
            break;
        case "x":
            answer = multiply(a,b);
            break;
        case "÷":
            answer = divide(a,b);
            break;
        case "^":
            answer = power(a,b);
            break;
        case "√":
            answer = sqrt(a);
            break;
        case "!":
            answer = factorial(a);
            break;
    }
    if (answer == "Infinity" || Number.isNaN(answer)) return "ERROR";
    return Math.round(answer*1e13)/1e13;
}

// add button click event listeners to display numbers on screen and manipulate them
const buttons = document.querySelectorAll("button");
const screenPara = document.querySelector(".screenText");
let value;

// add operator recognition
const operators = document.querySelectorAll(".operator");
let lastChar;
operators.forEach(operator => operator.addEventListener("click", e => {
    lastChar = screenPara.textContent.slice(-2,-1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
        screenPara.textContent = screenPara.textContent.slice(0,-3) + ` ${e.target.textContent} `;
    }
    else {
        screenPara.textContent += ` ${e.target.textContent} `;
    }
}));

buttons.forEach(button => button.addEventListener("click", e => {
    // clear button functionality
    if (e.target.textContent === "AC") {
        screenPara.textContent = "0";
    }
    // delete button functionality
    else if (e.target.textContent === "DEL") {
        if (screenPara.textContent === "ERROR") screenPara.textContent = "0";
        else screenPara.textContent = screenPara.textContent.slice(0,-1);
    } 
    // keypad button functionality
    else if (!(e.target.classList.contains("operator") || e.target.textContent === "=")) {
        if (screenPara.textContent === "0") screenPara.textContent = e.target.textContent;
        else screenPara.textContent += e.target.textContent;
    }
    // equal sign button functionality
    else if (e.target.textContent === "=") {
        let screenArray = screenPara.textContent.split(" ");
        lastChar = screenPara.textContent.slice(-2,-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
            screenPara.textContent = "ERROR";
        }
        else {
            while (screenArray.length > 1) {
                value = [operate(screenArray[0],screenArray[1],screenArray[2])];
                screenArray = value.concat(screenArray.slice(3));
            }
            screenPara.textContent = screenArray;
        }
    }
}));

// on page load default event
window.addEventListener("load", () => screenPara.textContent = "0");

// github icon event listener
const github = document.querySelector(".fa-brands");

github.addEventListener("mouseenter", () => {
    github.classList.add("fa-bounce");
});

github.addEventListener("mouseleave", () => {
    github.classList.remove("fa-bounce");
});

// button hover effect
buttons.forEach(button => button.addEventListener("mouseenter", e => {
    if (e.target.textContent === "AC") e.target.classList.add("hoverClear");
    else if (e.target.textContent === "DEL") e.target.classList.add("hoverDelete");
    else e.target.classList.add("hover");
}))

buttons.forEach(button => button.addEventListener("mouseleave", e => {
    if (e.target.textContent === "AC") e.target.classList.remove("hoverClear");
    else if (e.target.textContent === "DEL") e.target.classList.remove("hoverDelete");
    else e.target.classList.remove("hover");
}))