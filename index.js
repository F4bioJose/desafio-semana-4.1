class Calculator {
    constructor(currenInput,operator,previousInput) {
        this.currenInput = '';
        this.operator = null;
        this.previousInput = '';

    }
// É necessário que os inputs não possuam valores prévios 

    appendNumber(number) {
        
        this.currenInput = parseFloat(this.currenInput + number);
    }

    setOperator(operator) {
        function setPrevious(){
            if(result == undefined) {
                this.previousInput = this.currenInput;
            }
            else {
                this.previousInput = result
            }
        }
        setPrevious()
        this.currenInput = '';
        this.operator = operator;
        this.previousInput = this.currenInput;
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
                    if(this.currenInput !== 0 ){
                        result = this.previousInput/this.currenInput;
                    }
                    else {
                        throw new Error('Math ERROR')
                    }
                    break
                default:
                    throw new Error ('Syntax ERROR')
            }
            this.currenInput = ''
            console.log(result)
            return this.previousInput = result
    
        

        } catch (error) {
            console.log('Erro:',error.message)
        }
        
    }

}


const calculator = new Calculator


calculator.appendNumber('5')
calculator.setOperator('+')
calculator.appendNumber('1')
calculator.calculate();

calculator.appendNumber('1')
calculator.setOperator('-')
calculator.calculate();
