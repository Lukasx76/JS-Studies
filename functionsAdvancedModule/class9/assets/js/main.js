(function(){
  let display = document.querySelector(".display td");
  const buttons = document.querySelector("tbody");
  
  function calculate() {
    const operationToEvaluate = display.innerText;
    let result;

    try {
      result = Function("return " + operationToEvaluate)();
    } catch (error){
      display.innerHTML = `<span>Invalid expression <span>`;
    }
    
    display.innerHTML = `<span>${result.toFixed(2)}<span>`;
  }

  function displayStartsWithZero() {
    if (display.innerText.startsWith("0")){
      return true
    } else {
      return false
    }
  }

  function clearDisplay() {
    display.innerText = "";
  }

  function deleteLastNumber() {

    if (display.hasChildNodes()){
      display.removeChild(display.lastElementChild)
    }
  }

  function addOperatorsToDisplay(operator){
    if (operator === "/") {
      display.innerHTML += `<span>/</span>`;
    }
    if (operator === "+") {
      display.innerHTML += `<span>+</span>`;
    }
    if (operator === "*") {
      display.innerHTML += `<span>*</span>`;
    }
    if (operator === "-") {
      display.innerHTML += `<span>-</span>`;
    }
    if (operator === "(") {
      display.innerHTML += `<span>(</span>`;
    }
    if (operator === ")") {
      display.innerHTML += `<span>)</span>`;
    }
    if (operator === ".") {
      display.innerHTML += `<span>.</span>`;
    }
  }

  function addNumberToDisplay(number) {
    if (number === "0") {      
      if (displayStartsWithZero()){
      }
      else {
        display.innerHTML += `<span>0</span>`
      }
      
    }

    if (number === "1") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>1</span>`
      } else {
        display.innerHTML += `<span>1</span>`
      }
    }
    if (number === "2") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>2</span>`
      } else {
        display.innerHTML += `<span>2</span>`
      }
    }
    if (number === "3") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>3</span>`
      } else {
        display.innerHTML += `<span>3</span>`
      }
    }
    if (number === "4") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>4</span>`
      } else {
        display.innerHTML += `<span>4</span>`
      }
    }
    if (number === "5") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>5</span>`
      } else {
        display.innerHTML += `<span>5</span>`
      }
    }
    if (number === "6") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>6</span>`
      } else {
        display.innerHTML += `<span>6</span>`
      }
    }
    if (number === "7") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>7</span>`
      } else {
        display.innerHTML += `<span>7</span>`
      }
    }
    if (number === "8") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>8</span>`
      } else {
        display.innerHTML += `<span>8</span>`
      }
      
    }
    if (number === "9") {
      if (displayStartsWithZero()){
        display.innerHTML = `<span>9</span>`
      } else {
        display.innerHTML += `<span>9</span>`
      }
    }
  }

  buttons.addEventListener("click", function(e){
    const element = e.target
    addNumberToDisplay(element.innerText);
    addOperatorsToDisplay(element.innerText);
    

    if (element.innerText === "DEL") {
      deleteLastNumber();
    }

    if (element.innerText === "C") {
      clearDisplay();
    }

    if (element.innerText === "=") {
      calculate();
    }

  })
})()