// map

// double the numbers of the following array
let numbers = [10, 11, 3, 6, 7, 9, 20, 50, 100, 30, 13, 12];

numbers = numbers.map((n) => n * 2);
console.log(numbers);

// condition1= return only the personName of the object
// condition2= remove the keyword personName from the object
// condition3= add a keyword id to the object

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

const condition1 = people.map(person => person.personName);
const condition2 = people.map(({ personName: value }) => ({ [""]: value }));

// by default the map method creates a shallow copy of the original array. to prevent this we can use the spread operator

const condition3 = people.map(function(obj, index) {
    const newArr = [...people]
    newArr.id = index + 1;
    return newArr
})

console.log(people)