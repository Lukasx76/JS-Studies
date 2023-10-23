// filtering arrays

// return numbers greater than 10
const numbers = [5, 80, 50, 1, 2, 3, 5, 8, 7]

const filtered = numbers.filter((number) => number > 10);

const people = [
    {personName: "Benjamim", age: 2},
    {personName: "Billy", age: 22},
    {personName: "Brad", age: 52},
    {personName: "Brandon", age: 62},
    {personName: "Bob", age: 62},
    {personName: "Benny", age: 12},
    {personName: "Banner", age: 42},
    {personName: "Bosh", age: 9},
    {personName: "Brown", age: 4}
]

// condition1 = filter people with names of 5 letters or more
// condition2 = filter people with 50 years or older
// condition3 = filter people that its name end with the letter 'n'

const condition1 = people.filter((person) => person.personName.length >= 5);
const condition2 = people.filter((person) => person.age >= 50);
const condition3 = people.filter((person) => person.personName.endsWith("n"));

console.log(condition1);
console.log(condition2);
console.log(condition3);

// filter falsy values
function callbackFilter(value) {
    const falsy = [null, 0, "", undefined, false]
    return !(falsy.includes(value))
}

const arr = [null, 0, "", undefined, false, 1, true, "hue br", "lala land"];
const filteredValues = arr.filter(callbackFilter);
console.log(filteredValues);