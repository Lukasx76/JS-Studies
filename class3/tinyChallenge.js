// print: My name is "NAME". I am learning JavaScript at "TIME IN HOURS"

let myName = "Lucas"
let now = new Date()
let hours = now.toLocaleString("pt-BR", {hour: "numeric", minute: "numeric", hour12: true})

console.log(`My name is ${myName}. I am learning JavaScript at ${hours}`)