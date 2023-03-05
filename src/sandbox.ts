const number = document.getElementsByClassName("number");
const input = <HTMLInputElement>document.getElementById("result");
if(number.length > 0)
{
    for(let num of number){
        num.addEventListener("click",function(){
            console.log(num.textContent);
            let s = <HTMLInputElement>num;
            input.value == "0" ? input.value = s.innerText :  input.value += s.innerText;
      
        });
        console.log(num);
    }
}




interface ICalculator{
    totalResult:number;
    currentResult:number;
    oper:string;
    getSum(num1:number):number;
    getSub(num1:number):number;
    getDiv(num1:number):number;
    getMulti(num1:number):number;
    getTotal(num2:number):number;
}

class Calculator implements ICalculator{
     totalResult: number;
     currentResult: number;
     oper:string;
constructor() {
    this.currentResult = 0;
    this.totalResult  = 0;
    this.oper = "";
}

    getSum(num1:number): number {
        console.log(this.currentResult);
        this.oper = "+"
         return this.currentResult += num1;
    }
    getSub(num1:number): number {
        this.oper = "-"
        return this.currentResult -= num1;
    }
    getDiv(num1:number): number {
        this.oper = "/"
        return this.currentResult /= num1;
    }
    getMulti(num1:number): number {
        this.oper = "*"
       return this.currentResult *= num1;
    }
    getTotal(num2:number): number {
        switch(this.oper){
            case "+": this.currentResult += num2;
                break;
            case "-": this.currentResult -= num2;
                break;
            case "*": this.currentResult *= num2;
                break;
            case "/": this.currentResult /= num2;
                break;

        }

        return this.currentResult;
    }

}

let mapOperation = (): void => {

    const operation = document.getElementsByClassName("operation");
    
    let input = <HTMLInputElement>document.getElementById("result");

    let calcu = new Calculator()
    if(operation.length > 0)
    {
        for(let ops of operation)
        {
            ops.addEventListener("click",function(){
                switch(ops.textContent){
                    case "+": calcu.getSum(parseInt(input.value)); input.value = "0";
                        break;
                    case "-": calcu.getSub(parseInt(input.value)); input.value = "0";
                        break;
                    case "*": calcu.getMulti(parseInt(input.value)); input.value = "0";
                        break;
                    case "/": calcu.getDiv(parseInt(input.value)); input.value = "0";
                        break;
                    case "=": input.value = calcu.getTotal(parseInt(input.value)).toString(); 
                        break;
                }
            });
        }
    }
}
mapOperation();