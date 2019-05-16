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
        save: document.getElementById("save-js"),
        decimal: document.getElementById("decimal-js"),
    },

    init: function() {
        x = this.variables;
        this.calculator();
        this.toCSV();
    },

    calculator: function() {
        //booleons to check status
        let isSecondOperand = false;
        let hasAnswer = false;
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
            x.decimal.disabled = false;
        }

        const handleNumberpad = e => {
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
            if (x.num1.textContent !== '') {
                //toggles operand bool to indicate 1st number cannot be altered 
                isSecondOperand = true;
                //resets answer to allow for new calculation
                hasAnswer = false;
                x.decimal.disabled = false;
                x.operand.textContent = e.target.textContent;
            }
        }

        const handleEquals = () => {
            hasAnswer = true;
            isSecondOperand = false;
            x.decimal.disabled = false;
            
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
        x.numberPad.addEventListener('click', e => {
            handleNumberpad(e)

            if (x.num1.textContent.includes('.') && !isSecondOperand) {
                if (x.num1.textContent.match(/./g).length > 0) {
                    x.decimal.disabled = true;
                }
            } else if (x.num2.textContent.includes('.')) {
                if (x.num2.textContent.match(/./g).length > 0) {
                    x.decimal.disabled = true;
                }
            }
        });
        
        x.operandPad.addEventListener('click', handleOperand);

        x.equals.addEventListener('click', handleEquals);

        //runs reset functions and clears all data
        x.reset.addEventListener('click', () => {
            reset();
        });
    },

    toCSV: function() {
        const getIP = fetch('https://api.ipify.org?format=json').then(response => response.json());
        const getDate = new Date();
        const date = `${getDate.getDate()}, ${getDate.getMonth()}, ${getDate.getFullYear()}`;

        console.log(date);

        Promise.all([getIP]).then(data => {
            console.log(data[0].ip);
        })
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    FedtCalculator.init();
}());