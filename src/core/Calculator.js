export default class Calculator {
    #result

    constructor() {
        this.#result = 0
    }

    sum(first, seccond) {
        this.#result = first + seccond
        return this.#result
    }

    subtract(first, seccond) {
        this.#result = first - seccond
        return this.#result
    }

    multiply(first, seccond) {
        this.#result = first * seccond
        return this.#result
    }

    toDivide(first, seccond) {
        if (seccond === 0) {
            throw new Error("ERROR: Divisão por zero não é permitida");
        }
        this.#result = first / seccond
        return this.#result
    }

    evaluateExpression(input) {
        input = this.#resolveOperations(input, ['*', '/']);
        input = this.#resolveOperations(input, ['+', '-']);
        return parseFloat(input[0]);
    }

    #resolveOperations(input, operators) {
        let result = [...input]; 

        let i = 0;
        while (i < result.length) {
            if (operators.includes(result[i])) {
                let num1 = parseFloat(result[i - 1]);
                let num2 = parseFloat(result[i + 1]);
                let res = 0;

                switch (result[i]) {
                    case '*':
                        res = this.multiply(num1, num2);
                        break;
                    case '/':
                        res = this.toDivide(num1, num2);
                        break;
                    case '+':
                        res = this.sum(num1, num2);
                        break;
                    case '-':
                        res = this.subtract(num1, num2);
                        break;
                }
                result.splice(i - 1, 3, res.toString()); 
                i--; 
            } else {
                i++;
            }
        }

        return result;
    }
}