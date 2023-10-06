/* as I click on the numeric buttons, exhibit a number on the display */

const calculatorGrid = document.querySelector(".calculator-grid")
const display = document.querySelector(".display")

calculatorGrid.textContent
calculatorGrid.addEventListener("click", function(e){
    const element = e.target
    if (element.textContent === "C") {
        display.innerHTML = ""
    }
    if (element.textContent === "(") {
        display.innerHTML += "("
    }
    if (element.textContent === ")") {
        display.innerHTML += ")"
    }
    if (element.textContent === "/") {
        display.innerHTML += "/"
    }
    if (element.textContent === "7") {
        display.innerHTML += "7"
    }
    if (element.textContent === "8") {
        display.innerHTML += "8"
    }
    if (element.textContent === "9") {
        display.innerHTML += "9"
    }
    if (element.textContent === "*") {
        display.innerHTML += "*"
    }
    if (element.textContent === "4") {
        display.innerHTML += "4"
    }
    if (element.textContent === "5") {
        display.innerHTML += "5"
    }
    if (element.textContent === "6") {
        display.innerHTML += "6"
    }
    if (element.textContent === "+") {
        display.innerHTML += "+"
    }
    if (element.textContent === "1") {
        display.innerHTML += "1"
    }
    if (element.textContent === "2") {
        display.innerHTML += "2"
    }
    if (element.textContent === "3") {
        display.innerHTML += "3"
    }
    if (element.textContent === "-") {
        display.innerHTML += "-"
    }
    if (element.textContent === ".") {
        display.innerHTML += "."
    }
    if (element.textContent === "0") {
        display.innerHTML += "0"
    }
    if (element.textContent === "Del") {
        display.innerHTML += ""
    }
    if (element.textContent === "=") {
        display.innerHTML += "="
    }
})