// more stuff about paramaters

// as we put arguments in a function without parameters those values will be saved in a place called arguments(this only works if we use the word function to define functions)

function sayHi(){
    console.log("Hi");
    for (let argument of arguments){
        console.log(argument);
    }
}

sayHi("You are not that guy pal trust me you are not that guy", 12, false);
// we can use the rest operator as a parameter and assign it to the arguments.

function sayHello(...args){
    console.log("Hello");
    for (let arg of args){
        console.log(arg);
    }
}

sayHello(1, false, NaN, "We can");

// another example using the rest operator

function sumNumbers(accumulator, ...numbers) {
    for (let number of numbers){
        accumulator += number
    }
    console.log(accumulator);
}

sumNumbers(0, 1, 2,3,4,5,6);