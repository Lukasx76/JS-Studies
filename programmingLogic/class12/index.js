// Destructuring assignment in objects

const person = {
    personName : "John",
    personSurname: "Wick",
    address : {
        avenue : "5th avenue",
        number : 7 
    }
}
// creating two variables from the object person
const { personName, personSurname } = person;

// getting nested values from the object, and attribuiting different names to it
const { address: { avenue: anotherName, number: anotherNumber } } = person
console.log(anotherName, anotherNumber)