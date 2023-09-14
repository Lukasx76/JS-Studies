// variables tiny challenge

let variableA = "A";
let variableB = "B";
let variableC = "C";

// assign variableA to variableB, variableB to variableC and variableC to variableA

// let auxVariable = variableA;
// variableA = variableB;
// variableB = variableC;
// variableC = auxVariable;

// console.log(variableA, variableB, variableC)

// another way to solve this

[variableA, variableB, variableC] = [variableB, variableC, variableA]
console.log(variableA, variableB, variableC)

