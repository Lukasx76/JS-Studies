(function(){
  let display = document.querySelector(".display td");
  const buttons = document.querySelector("tbody");

  function clearDisplay() {
    display.innerText = "";
  }

  function deleteLastNumber(arr) {
    const nodeSpan = display.querySelectorAll("span");
    
    const spanArr = []
    for (let span of nodeSpan) {
      let spanText = span.innerText;
      spanArr.push(spanText);
    }
    console.log(spanArr)
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
      // check if the values present in the display don't start with 0
    }

    if (number === "1") {
      display.innerHTML += `<span>1</span>`
    }
    if (number === "2") {
      display.innerHTML += `<span>2</span>`
    }
    if (number === "3") {
      display.innerHTML += `<span>3</span>`
    }
    if (number === "4") {
      display.innerHTML += `<span>4</span>`
    }
    if (number === "5") {
      display.innerHTML += `<span>5</span>`
    }
    if (number === "6") {
      display.innerHTML += `<span>6</span>`
    }
    if (number === "7") {
      display.innerHTML += `<span>7</span>`
    }
    if (number === "8") {
      display.innerHTML += `<span>8</span>`
    }
    if (number === "9") {
      display.innerHTML += `<span>9</span>`
    }
  }

  buttons.addEventListener("click", function(e){
    const element = e.target
    addNumberToDisplay(element.innerText);
    addOperatorsToDisplay(element.innerText);
    deleteLastNumber();

    console.log(typeof display.innerText);
    if (element.innerText === "C") {
      clearDisplay();
    }

  })
})()