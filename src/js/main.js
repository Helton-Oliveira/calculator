const btnKeys = document.querySelectorAll('[data-key]');
const resultText = document.querySelector('[data-result]')
const digitedNumber = document.querySelector('[data-digitedNumbers]')
import KeyEvent from "./KeyEvent.js";
import ClickEvent from "./ClickEvent.js";
import Calculator from "./Calculator.js";

function main() {
    const calculator = new Calculator()
    const keyEvent = new KeyEvent(document, digitedNumber, resultText, calculator) 
    const clickEvent = new ClickEvent(digitedNumber, resultText, btnKeys, calculator)
    clickEvent.addClickEvent()
    keyEvent.addKeyUpEvent()
}

main()




