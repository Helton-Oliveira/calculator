export default class DOMEvent {

    constructor(textNumber, textResult, calculator) {
        this.numbersEntered = [];
        this.textNumber = textNumber;
        this.textResult = textResult;
        this.calculator = calculator;
    }

    handleInput(input) {
        try {
            if (this.textNumber.textContent.includes("ERROR")) {
                this.textNumber.textContent = "";
                this.numbersEntered = [];
            }

            switch (input) {
                case "equals":
                case "Enter":
                    this.showResult();
                    break;
                case "backspace":
                case "Backspace":
                    this.backspace();
                    break;
                case "delete":
                case "Delete":
                    this.deleteToScreen();
                    break;
                default:
                    this.verifyIsNumberOrMathOperation(input);
                    this.textNumber.textContent += input;
            }
        } catch (ex) {
            this.textNumber.textContent = "ERROR";
        }
    }

    verifyIsNumberOrMathOperation(input) {
        input = input.trim();
        const regex = /-?\d+(\.\d+)?|[+\-*/=.]|\n/g;
    
        if(!regex.test(input)) {
            console.error("Erro: A entrada deve ser um número ou uma operação matemática válida.")
            throw new Error("ERROR: Deve ser um número")
        }
    }
    
    showResult() {
         this.numbersEntered.push(...this.textNumber.textContent.split("")); 
         const input = this.processInput(this.numbersEntered);
         const result = this.calculator.evaluateExpression(input);
         this.textResult.textContent = result;
    }

    backspace() {
        if (this.textNumber.textContent.length > 0) {
            this.textNumber.textContent = this.textNumber.textContent.slice(0, -1);
            this.textResult.textContent = "";
            this.numbersEntered.pop();
        }
    }

    deleteToScreen() {
        this.#clearScreen()
    }
    
    processInput(input) {
        let number = "";
        let result = [];

        for (let i = 0; i < input.length; i++) {
            let char = input[i];

            if (!/[+\-*/=]/.test(char)) {
                number += char;
            } else {
                if (number) {
                    result.push(number);
                    number = "";
                }
                result.push(char);  
            }
        }

        if (number) {
            result.push(number);  
        }

        return result;
    }

    #clearScreen() {
        this.numbersEntered = [];
        this.textNumber.textContent = "";
        this.textResult.textContent = "";
    }


}