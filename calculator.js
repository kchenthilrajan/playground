// Write a calculator program which supports
//1. add two numbers returns result
//2. substract two numbers returns result
//3. multiply two numbers returns result
//4. divide two numbers returns result

class Calculator{
    add(a,b){
        return(a+b);
    }
    subtract(a,b){
        return(a-b);
    }
     multiply(a,b){
        return(a*b);
    }
    divide(a,b){
        return(a/b);
    }
}

const calculate = new Calculator();
(calculate.add(1,2));
console.log(calculate.subtract(1,2));
console.log(calculate.multiply(1,2));
console.log(calculate.divide(1,2));




