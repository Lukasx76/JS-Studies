// more differences between var and let
// var has a function scope and let has a block scope

let boolValue = true;

let variable1 = 10;
var variable2 = 15;


// block 1
if (boolValue === true) {
    console.log(variable1);
    // block 2
    if (variable1 >= 10) {
        let variable1 = 11;
        console.log(variable1);
    }
}

// function scope
function exhibitValue () {

    if (variable2 > 10){
        var variable3 = 20;
    } 
    // I can print the value of variable 3 because it is in the scope of the function
    console.log(variable3);
}
exhibitValue();

// hoisting
console.log(variable4)
var variable4 = 15;