const display = document.querySelector("td .display");
const buttons = document.querySelectorAll("button");

let btnArr = Array.from(buttons);

btnArr.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
      const result = Function("return " + display.value)()
      display.value = result;
    }

    else if (e.target.innerText === "DEL") {
      display.value = display.value.slice(0, -1)
    }

    else if (e.target.innerText === "C") {
      display.innerHTML = "";
    }

    else {
      display.value += e.target.innerText
    }
  })
})