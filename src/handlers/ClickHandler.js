import InputHandler from "./InputHandler.js";

export default class ClicklHandler extends InputHandler {
    constructor(textNumber, textResult, btnKeys, calculator) {
        super(textNumber, textResult, calculator)
        this.btns = btnKeys
    }

    addClickEvent() {
        this.btns.forEach(element => {
            element.addEventListener("click", (event) => {
                this.handleInput(event.target.dataset.key);
            });
        });
    }
}