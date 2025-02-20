import Calculator from "../src/js/Calculator";
const calculator =  new Calculator()

describe("Operacoes da calculadora", () => {

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
})
