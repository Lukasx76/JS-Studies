// it is possible to return a function inside of a function. Imagine we need a multiplier, but we want to control how many times the number will be multiplied. To achieve this we can create a function inside of a function


function createMultiplier(multiplier){
    return function(n){
        return n * multiplier
    }
};

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(4));
console.log(triple(4));
console.log(quadruple(4));