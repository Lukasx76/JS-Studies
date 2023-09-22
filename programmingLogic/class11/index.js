// Destructuring assignment

const numbersArr = [0, 1, 2, 3, 4];
const numbersArr2 = [5, 6, 7, 8, 9];

// the ... operator take the rest of the elements of numbersArr

const [zero, one, ...rest] = numbersArr;
console.log(zero, one, rest);

// I could skip values
const [five, , seven, , nine] = numbersArr2;

// Destructuring assignment two dimensional array

const matrix = [
    [10,11,12],
    [13,14,15],
    [16,17,18]
]

// I want to take the values sixteen and eighteen

const [, , [sixteen, ,eighteen]] = matrix;

console.log(sixteen, eighteen)