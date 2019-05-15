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
        reset: document.getElementById("ac-js"),
        allOperand: document.querySelectorAll('.pad__operand')
    },

    init: function() {
        x = this.variables;
        this.calculator();
    },

    calculator: function() {
        let isSecondOperand = false;
        let hasAnswer = false;
        let answer = 0;

        const multiply = (num1, num2) => Number(num1) * Number(num2);
        const subtract = (num1, num2) => Number(num1) - Number(num2);
        const divide = (num1, num2) => Number(num1) / Number(num2);
        const add = (num1, num2) => Number(num1) + Number(num2);

        const reset = () => {
            x.num1.textContent = "";
            x.num2.textContent = "";
            x.operand.textContent = "";
            x.answer.textContent = "";
            isDisabled = false;
            isSecondOperand = false;
        }

        const handleNumberpad = e => {
            if (hasAnswer) {
                x.num1.textContent = "";
                hasAnswer = false;
            } 
            
            if (isSecondOperand) {
                x.num2.textContent += e.target.textContent;
            } else {
                x.num1.textContent += e.target.textContent;
            }
        }

        const handleOperand = e => {
            isSecondOperand = true;
            hasAnswer = false;
            x.operand.textContent = e.target.textContent;
        }

        const handleEquals = () => {
            hasAnswer = true;
            isSecondOperand = false;
            
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
    
            x.answer.textContent = answer.toLocaleString();
            x.num1.textContent = answer;
    
            x.num2.textContent = "";
            x.operand.textContent = "";
        }
        
        x.numberPad.addEventListener('click', handleNumberpad);
        
        x.operandPad.addEventListener('click', handleOperand);

        x.equals.addEventListener('click', handleEquals);

        x.reset.addEventListener('click', () => {
            reset();
        });
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    FedtCalculator.init();
}());