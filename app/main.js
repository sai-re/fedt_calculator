let x;
const FedtCalculator = {
    variables: {
        num1: document.getElementById("num1-js"),
        num2: document.getElementById("num2-js"),
        operand: document.getElementById("operand-js"),
        numberPad: document.getElementById("number-pad-js"),
        operandPad: document.getElementById("operand-pad-js"),
        answer: document.getElementById("answer-js"),
        equals: document.getElementById("submit-js"),
    },

    init: function() {
        x = this.variables;
        this.calculator();
    },

    calculator: function() {
        let isSecondOperand = false;
        let isDisabled = false;
        let answer = 0;

        const multiply = (num1, num2) => Number(num1) * Number(num2);
        const subtract = (num1, num2) => Number(num1) - Number(num2);
        const divide = (num1, num2) => Number(num1) / Number(num2);
        const add = (num1, num2) => Number(num1) + (num2);
        
        x.numberPad.addEventListener('click', e => {
            if (isSecondOperand === true) {
                x.num2.innerHTML += e.target.textContent;
            } else {
                x.num1.innerHTML += e.target.textContent;
            }
        });
        
        x.operandPad.addEventListener('click', function handleOperand(e) {
            isSecondOperand = true;
            x.operand.innerHTML += e.target.textContent;

            if (isDisabled === true) {
                x.operandPad.removeEventListener('click', handleOperand);
            }
        });

        x.equals.addEventListener('click', e => {
            isDisabled = false;
            
            if (x.operand.textContent === 'x') {
                answer = multiply(x.num1.textContent, x.num2.textContent);         
            }
            
            if (x.operand.textContent === '+') {
                answer = add(x.num1.textContent, x.num2.textContent);         
            }

            if (x.operand.textContent === '-') {
                answer = subtract(x.num1.textContent, x.num2.textContent);         
            }

            if (x.operand.textContent === '/') {
                answer = divide(x.num1.textContent, x.num2.textContent);         
            }

            x.answer.innerHTML = answer;
            x.num1.innerHTML = answer

            x.num2.innerHTML = "";
            x.operand.innerHTML = "";
        })
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    FedtCalculator.init();
}());