import InputHandler from "./InputHandler.js"

export default class KeyboardHandler extends InputHandler {
    constructor(document, textNumber, textResult, calculator) {
        super(textNumber, textResult, calculator);
        this.document = document;
    }

     addKeyUpEvent() {
        document.addEventListener("keyup", (event) => {
            this.handleInput(event.key);
        });
    }   
    
}