// learning about for in

const person = {
    personName: "Harvey",
    personSurname: "Specter",
    personAge: 39
}

const fruits = ["appe", "grape", "strawberry", "blueberry", "mango"]

for (let key in person){
    console.log(`${key}: ${person[key]}`)
}

for (let i in fruits){
    console.log(`index ${i}: ${fruits[i]}`)
}