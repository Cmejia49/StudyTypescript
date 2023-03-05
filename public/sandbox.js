"use strict";
const number = document.getElementsByClassName("number");
const input = document.getElementById("result");
if (number.length > 0) {
    for (let num of number) {
        num.addEventListener("click", function () {
            console.log(num.textContent);
            let s = num;
            input.value == "0" ? input.value = s.innerText : input.value += s.innerText;
        });
        console.log(num);
    }
}
class Calculator {
    constructor() {
        this.currentResult = 0;
        this.totalResult = 0;
        this.oper = "";
    }
    getSum(num1) {
        console.log(this.currentResult);
        this.oper = "+";
        return this.currentResult += num1;
    }
    getSub(num1) {
        this.oper = "-";
        return this.currentResult -= num1;
    }
    getDiv(num1) {
        this.oper = "/";
        return this.currentResult /= num1;
    }
    getMulti(num1) {
        this.oper = "*";
        return this.currentResult *= num1;
    }
    getTotal(num2) {
        switch (this.oper) {
            case "+":
                this.currentResult += num2;
                break;
            case "-":
                this.currentResult -= num2;
                break;
            case "*":
                this.currentResult *= num2;
                break;
            case "/":
                this.currentResult /= num2;
                break;
        }
        return this.currentResult;
    }
}
let mapOperation = () => {
    const operation = document.getElementsByClassName("operation");
    let input = document.getElementById("result");
    let calcu = new Calculator();
    if (operation.length > 0) {
        for (let ops of operation) {
            ops.addEventListener("click", function () {
                switch (ops.textContent) {
                    case "+":
                        calcu.getSum(parseInt(input.value));
                        input.value = "0";
                        break;
                    case "-":
                        calcu.getSub(parseInt(input.value));
                        input.value = "0";
                        break;
                    case "*":
                        calcu.getMulti(parseInt(input.value));
                        input.value = "0";
                        break;
                    case "/":
                        calcu.getDiv(parseInt(input.value));
                        input.value = "0";
                        break;
                    case "=":
                        input.value = calcu.getTotal(parseInt(input.value)).toString();
                        break;
                }
            });
        }
    }
};
mapOperation();
