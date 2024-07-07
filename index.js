class Calculator {
    constructor(currenInput,operator,previousInput ) {
        this.currenInput = '';
        this.operator = null;
        this.previousInput = '';

    }
// É necessário que os inputs não possuam valores prévios 

    appendNumber(number) {
        
        this.currenInput = parseFloat(this.currenInput + number);
        //console.log(typeof this.currenInput)
        //console.log(this.currenInput)
    }

    setOperator(operator) {

        this.previousInput = this.currenInput;

        this.currenInput = '';

        this.operator = operator;

    }

    calculate() {

        try {
            let result = 0;
            switch (this.operator) {
                case '+':
                   result =  this.currenInput+this.previousInput;
                    break;
    
                case '-':
                    result = this.previousInput-this.currenInput;
                    break;
    
                case '*':
                    result = this.currenInput*this.previousInput;
                    break
                
                case '/':
                    result = this.previousInput/this.currenInput;
                    break
            }

            console.log(result)
        } catch (error) {
            console.log('Systax ERROR')
        }
        
    }

}


const calculator = new Calculator

calculator.appendNumber('5')
calculator.appendNumber('0')
calculator.setOperator('=')
calculator.appendNumber('1')
calculator.appendNumber('0')
calculator.calculate();


calculator.appendNumber('5')
calculator.appendNumber('0')
calculator.setOperator('+')
calculator.appendNumber('1')
calculator.appendNumber('0')
calculator.calculate();

calculator.appendNumber('5')
calculator.appendNumber('0')
calculator.setOperator('-')
calculator.appendNumber('1')
calculator.appendNumber('0')
calculator.calculate();

calculator.appendNumber('5')
calculator.appendNumber('0')
calculator.setOperator('*')
calculator.appendNumber('1')
calculator.appendNumber('0')
calculator.calculate();

calculator.appendNumber('5')
calculator.appendNumber('0')
calculator.setOperator('*')
calculator.appendNumber('1')
calculator.appendNumber('0')
calculator.calculate();
