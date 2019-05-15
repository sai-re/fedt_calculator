let x;
const FedtCalculator = {
    variables: {
        numberPad: document.getElementById("number-pad-js"),
    },

    init: function() {
        x = this.variables;
        this.calculator();
    },

    calculator: function() {

    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    FedtCalculator.init();
}());