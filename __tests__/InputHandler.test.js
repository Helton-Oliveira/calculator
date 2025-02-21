import InputHandler from "../src/handlers/InputHandler"

describe("deve validar exceptions por digitar dados não numéricos ou não operacionais", () => {
    let inputHandle
    beforeEach(() => {
        inputHandle = new InputHandler()
    }); 

    it("deve validar erro caso entrada não for uma operação matemática ou número", () => {
        expect(() => inputHandle.verifyIsNumberOrMathOperation("l")).toThrow("ERROR: A entrada deve ser um número ou uma operação matemática válida.");
    })
})