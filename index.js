class Calculator { // É necessário que os inputs não possuam valores prévios 
    constructor() {
        this.currenInput = '';
        this.operator = null;
        this.previousInput = '';

    }

// -=-=-=- Adicionar dígito -=-=-=-= 
    appendNumber(number) {
        
        this.currenInput = parseFloat(this.currenInput + number);
    }
// =-=-=-=- adicionar operador =-=-=-=- 
    setOperator(operator) {
        const setPrevious =  () => {
            if(typeof this.result === 'undefined') {
                this.previousInput = this.currenInput;
            }
            else {
                this.previousInput = this.result
            }
        }
        setPrevious.call(this) // garante que o this apotará para a instância da classe
        this.currenInput = '';
        this.operator = operator;
    }
 // -=-=-=- Efetuação das operações =-=-=-=- 
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
            this.result = result
            console.log(result)
            this.currenInput = ''
            return this.previousInput = result
    
        } catch (error) {
            console.log('Erro:',error.message)
        }
        
    }

}


const calculator = new Calculator


calculator.appendNumber('90')
calculator.setOperator('+')
calculator.appendNumber('20')
calculator.calculate();


calculator.setOperator('-')
calculator.appendNumber('150')
calculator.calculate();

//=-=-=- Math ERROR =-=-=-
calculator.setOperator('/')
calculator.appendNumber('0')
calculator.calculate();

calculator.setOperator('*')
calculator.appendNumber('-3')
calculator.calculate();

calculator.setOperator('/')
calculator.appendNumber('20')
calculator.calculate();

// =-=-=- Systax ERROR =-=-=- 
calculator.setOperator('%')
calculator.appendNumber('20')
calculator.calculate();