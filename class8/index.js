// tiny challenge 2

let now = new Date()
const birthdayDate = 2002;

let personName = "Lucas Feitoza Gomes";
let age = now.getFullYear() - birthdayDate;
let weight = 86; // in KG
let height = 1.72; // In meters
let bmi = weight / (height ** 2);

console.log(`${personName} is ${age} years old,`)
console.log(`weights ${weight} kg, is ${height} tall, and his bmi is ${bmi}.`);
console.log(`${personName} was born in ${birthdayDate}`);