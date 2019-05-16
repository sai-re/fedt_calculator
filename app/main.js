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
        decimal: document.getElementById("decimal-js"),
        zero: document.getElementById("zero-js"),
        allOperand: document.querySelectorAll('.pad__operand')
    },

    init: function() {
        x = this.variables;
        this.calculator();
    },

    calculator: function() {
        //booleons to check status
        let isSecondOperand = false;
        let hasAnswer = false;
        let click = 0;
        let answer = 0;

        //calculation functions
        const multiply = (num1, num2) => Number(num1) * Number(num2);
        const subtract = (num1, num2) => Number(num1) - Number(num2);
        const divide = (num1, num2) => Number(num1) / Number(num2);
        const add = (num1, num2) => Number(num1) + Number(num2);

        //reset function to revert everything back to default
        const reset = () => {
            x.num1.textContent = "";
            x.num2.textContent = "";
            x.operand.textContent = "";
            x.answer.textContent = "";
            isDisabled = false;
            isSecondOperand = false;
            click = 0;
        }

        const handleNumberpad = e => {
            click++;
            console.log(click);

            //if answer is already on display and btn on number pad is pressed, begin new calculation 
            if (hasAnswer) {
                x.num1.textContent = "";
                hasAnswer = false;
            }
            
            // if an operand has been clicked, enter number as 2nd number else 1st
            if (isSecondOperand) {
                x.num2.textContent += e.target.textContent;
            } else {
                x.num1.textContent += e.target.textContent;
            }
        }

        const handleOperand = e => {            
            if (click > 0) {
                //toggles operand bool to indicate 1st number cannot be altered 
                isSecondOperand = true;
                //resets answer to allow for new calculation
                hasAnswer = false;
                x.operand.textContent = e.target.textContent;
            }
        }

        const handleEquals = () => {
            hasAnswer = true;
            isSecondOperand = false;
            
            // if statements to determine which calculation to use
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
            
            //prints final answer to display and add to 1st number for additional calculations
            x.answer.textContent = answer.toLocaleString();
            x.num1.textContent = answer;
            
            //clears 2nd number and operand for new calculations 
            x.num2.textContent = "";
            x.operand.textContent = "";
        }
        
        //event listeners on buttons
        x.numberPad.addEventListener('click', handleNumberpad);
        
        x.operandPad.addEventListener('click', handleOperand);

        x.equals.addEventListener('click', handleEquals);

        //runs reset functions and clears all data
        x.reset.addEventListener('click', () => {
            reset();
        });
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    FedtCalculator.init();
}());