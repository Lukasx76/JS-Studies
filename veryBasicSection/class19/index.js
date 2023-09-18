// primitive data types (immutable): string, number, boolean, null, bigint, symbol, undefined. These types of data make a copy of the variable to another variable for example

let apple = "Apple";
let fruit = apple;

// apple and fruit are two INDEPENDENT variables.

// mutable data types : object, array, function. These types use the reference of a variable to another variable for example

let cars = ["Bettle", "Audi a8", "Mustang shelby"];
let cars2 = cars;

// when I add something to cars2 or cars the two variables will be modified

cars.push("Aston martin");
console.log(cars2);

// to make a copy of cars we need to use three dots and the name of the variable in brackets

let cars3 = [...cars];

// now whenever I modify cars2 or cars cars will not be affected







