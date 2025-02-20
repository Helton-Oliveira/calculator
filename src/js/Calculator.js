export default class Calculator {
    #result

    sum(first, seccond) {
        this.#verifyIsNumber(first) 
        this.#verifyIsNumber(seccond)
        this.#result = first + seccond
        return this.#result
    }

    subtract(first, seccond) {
        this.#verifyIsNumber(first) 
        this.#verifyIsNumber(seccond)
        this.#result = first - seccond
        return this.#result
    }

    multiply(first, seccond) {
        this.#verifyIsNumber(first) 
        this.#verifyIsNumber(seccond)
        this.#result = first * seccond
        return this.#result
    }

    toDivide(first, seccond) {
        this.#verifyIsNumber(first) 
        this.#verifyIsNumber(seccond)
        this.#result = first / seccond
        return this.#result
    }

    #verifyIsNumber(number) {
        if(isNaN(number)) throw new Error("Deve ser um número")
    }
}