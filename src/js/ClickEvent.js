import DOMEvent from "./DOMEvent.js";

export default class ClickEvent extends DOMEvent {
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