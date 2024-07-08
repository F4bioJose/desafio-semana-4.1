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
            console.log(result)
            // Poderia ser implementado caso deseja-se resultados independentes

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

calculator.appendNumber('5')
calculator.setOperator('-')
calculator.calculate();
