// reduce

let numbers = [5, 10, 11, 3, 6, 7, 9, 20, 50, 100, 30, 13, 12];

// sum all the following numbers
const total = numbers.reduce(function(accum, value) {
    accum += value
    return accum;
}, 5)

// the reduce function receives a function as its first parameter and an acumulator(optional) as the second. Additionally the reduce function must return something.

// return an array with evenNumbers(filter)
const evenNumbers = numbers.reduce(function(accum, value) {
    if (value % 2 === 0){
        accum.push(value)
    }
    return accum;
}, [])

// return an array with the values doubled(map)
const doubledNumbers = numbers.reduce(function(accum, value) {
    accum.push(value * 2)
    return accum;
}, [])

// sum all even Numbers
const evenNumbersSum = numbers.reduce(function(accum, value) {
    if (value % 2 === 0){
        accum += value
    }
    return accum}, 0)

// it is important to tell the reduce function to start at zero because if not it won't check wether the first value is even or not.

const people = [
    {personName: "Arthur", age: 20},
    {personName: "Amanda", age: 21},
    {personName: "Alice", age: 22},
    {personName: "Adrian", age: 29},
    {personName: "Adrien", age: 23},
    {personName: "Ali", age: 28},
    {personName: "Ashley", age: 27},
    {personName: "Amy", age: 26},
    {personName: "Abby", age: 25},
    {personName: "Aline", age: 24}
]
// return the oldest person
const oldest = people.reduce(function(accum, value){
    if (accum.age > value.age) return accum; return value
}, 0);

// return the youngest person
const youngest = people.reduce(function(accum, value){
    if (accum.age < value.age) return accum; return value
}, 0);

console.log(youngest)