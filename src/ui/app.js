const btnKeys = document.querySelectorAll('[data-key]');
const resultText = document.querySelector('[data-result]')
const digitedNumber = document.querySelector('[data-digitedNumbers]')
import KeyEvent from "../handlers/KeyboardHandler.js";
import ClickEvent from "../handlers/ClickHandler.js";
import Calculator from "../core/Calculator.js";

function main() {
    const calculator = new Calculator()
    const keyEvent = new KeyEvent(digitedNumber, resultText, calculator) 
    const clickEvent = new ClickEvent(digitedNumber, resultText, btnKeys, calculator)
    clickEvent.addClickEvent()
    keyEvent.addKeyUpEvent()
}

main()




