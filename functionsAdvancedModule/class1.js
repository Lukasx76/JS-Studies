// Declaring functions using the word "function" generates a behavior called hoisting, which elevates all declarations to the top of the scope. That means I can call a function before creating it.

// hoisting example 

hello()

function hello(){
    console.log("Hello, mate");
}

// I can use a function as a parameter to another function

function callFunction(func) {
    func();
}

callFunction(hello);

// I can save functions in variables.

const sayHi = function (){
    console.log("Hi.");
}

callFunction(sayHi);

// I can write functions within objects in two ways: verbose and short

const person = {
    name : "Lucas",
    run : function() {
        console.log("I am running")
    },
    sayHi(){
        console.log("Hi, my name is " + this.name)
    },

}

person.sayHi();

// declaring functions using "arrows"

const shootArrow = () => console.log("I am shooting an arrow");
shootArrow();