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
function operate(operator, a, b=undefined) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+": 
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
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
}

// github icon event listener
const github = document.querySelector(".fa-brands");

github.addEventListener("mouseenter", () => {
    github.classList.add("fa-bounce");
});

github.addEventListener("mouseleave", () => {
    github.classList.remove("fa-bounce");
});