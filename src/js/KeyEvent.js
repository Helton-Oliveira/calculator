import DOMEvent from "./DOMEvent.js"

export default class KeyEvent extends DOMEvent {
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