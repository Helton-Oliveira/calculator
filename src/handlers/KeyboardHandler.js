import InputHandler from "./InputHandler.js"

export default class KeyboardHandler extends InputHandler {
    constructor(textNumber, textResult, calculator) {
        super(textNumber, textResult, calculator);
    }

     addKeyUpEvent() {
        document.addEventListener("keyup", (event) => {
            this.handleInput(event.key);
        });
    }   
    
}