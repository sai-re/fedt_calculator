let x;
const Calculator = {
    variables: {
        num1: document.getElementById("num1-js"),
        num2: document.getElementById("num2-js"),
        operand: document.getElementById("operand-js"),
        numberPad: document.getElementById("number-pad-js"),
        operandPad: document.getElementById("operand-pad-js"),
        equalText: document.getElementById("equals-js"),
        answer: document.getElementById("answer-js"),
        equals: document.getElementById("submit-js"),
        reset: document.getElementById("ac-js"),
        decimal: document.getElementById("decimal-js")
    },

    init: function() {
        x = this.variables;
        this.calculator();
    },

    calculator: function() {
        //booleons to check status of clicks
        let isSecondOperand = false;
        let hasAnswer = false;

        let answer = 0;

        //GENERAL FUNCTIONS
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
            x.equalText.textContent = "";
            isSecondOperand = false;
            x.decimal.disabled = false;
            answer = 0;
        }

        //disables decimals
        const disableDecimal = (btn) => {
            if (btn.target.textContent === '.') x.decimal.disabled = true;
        }

        //HANDLER FUNCTIONS
        const handleNumberpad = e => {
            //if answer is already on display and btn on number pad is pressed, begin new calculation
            if (hasAnswer) {
                x.num1.textContent = "";
                x.num2.textContent = "";
                x.operand.textContent = "";
                x.equalText.textContent = "";
                hasAnswer = false;
            }
            
            // if an operand has been clicked, enter number as 2nd value else 1st, also disable decimal if more than one
            if (isSecondOperand) {
                x.num2.textContent += e.target.textContent;
                disableDecimal(e);
            } else {
                x.num1.textContent += e.target.textContent;
                disableDecimal(e);
            }
        }

        const handleOperand = e => {
            //if answer on display, and operand is pressed make answer 1st value for new calculation
            if (hasAnswer) {
                x.num1.textContent = x.answer.textContent;
                //clears 2nd value and operand for new calculation
                x.num2.textContent = "";
                x.equalText.textContent = "";
            }

            //prevents operand being pressed until 1st value entered
            if (x.num1.textContent !== '') {
                //toggles operand bool so next value entered will be used as 2nd value in calculation
                isSecondOperand = true;
                //resets answer to allow for new calculation otherwise new 1st value will not remain on display
                hasAnswer = false;
                //enable decimal for second value
                x.decimal.disabled = false;
                x.operand.textContent = e.target.textContent;
            }
        }

        const handleEquals = () => {
            //doesn't run unless operand is on display
            if (x.operand.textContent !== "" && x.num2.textContent !== "") {
                hasAnswer = true;
                isSecondOperand = false;
                x.decimal.disabled = false;
                x.equalText.textContent = "=";
                
                // if statements to determine which calculation to use
                if (x.operand.textContent === 'x') answer = multiply(x.num1.textContent, x.num2.textContent);
                
                if (x.operand.textContent === '+') answer = add(x.num1.textContent, x.num2.textContent);
        
                if (x.operand.textContent === '-') answer = subtract(x.num1.textContent, x.num2.textContent);
        
                if (x.operand.textContent === '/') answer = divide(x.num1.textContent, x.num2.textContent);
                
                //prints final answer to display
                x.answer.textContent = answer.toFixed(1);
            }
        }
        
        //event listeners on buttons
        x.numberPad.addEventListener('click', handleNumberpad);
        
        x.operandPad.addEventListener('click', handleOperand);

        x.equals.addEventListener('click', handleEquals);

        x.reset.addEventListener('click', reset);
    }
}

export {Calculator}