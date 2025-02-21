import Calculator from "../src/core/Calculator.js";

describe("Operacoes da calculadora", () => {
    let calculator
    beforeEach(() => {
        calculator = new Calculator()
    }); 
    

    it("Deve somar dois numeros", () => {
        expect(calculator.sum(20,3)).toBe(23)
    })

    it("Deve subtrair dois numeros", () => {
        expect(calculator.subtract(4,3)).toBe(1)
    })

    it("Deve multiplicar dois numeros", () => {
        expect(calculator.multiply(5,3)).toBe(15)
    })

    it("Deve dividir dois numeros", () => {
        expect(calculator.toDivide(10,2)).toBe(5)
    })

    it("deve executar exception caso usuario tentar divir qualquer valor por zero", () => { 
        expect(() => calculator.toDivide(19,0)).toThrow("ERROR: Divisão por zero não é permitida")
    })
})
