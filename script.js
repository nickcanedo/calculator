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
function sqrt(a,b) {
    return a**(1/b);
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
    switch (operator) {
        case "+": 
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        case "^":
            return power(a,b);
        case "√":
            return sqrt(a,b);
        case "!":
            return factorial(a)
    }
    num1 = 0;
    num2 = 0;
    operator = "";
}

// add button click event listeners to display numbers on screen and manipulate them
const buttons = document.querySelectorAll("button");
const screenPara = document.querySelector(".screenText");

buttons.forEach(button => button.addEventListener("click", e => {
    // clear button functionality
    if (e.target.textContent === "AC") screenPara.textContent = "";
    // delete button functionality
    else if (e.target.textContent === "DEL") {
        screenPara.textContent = screenPara.textContent.slice(0,-1);
    } else screenPara.textContent += e.target.textContent;
}));

// add operator recognition
let num1;
let num2;
const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", e => {
    num1 = screenPara.textContent.slice(0,-1);
    operator = e.target.textContent;
    console.log(num1);
    console.log(operator);
}));

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
