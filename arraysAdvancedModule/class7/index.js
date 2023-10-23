// filter + map + reduce

const numbers = [10, 11, 3, 6, 7, 9, 20, 50, 100, 30, 13, 12];

// filter even numbers
// double the filtered numbers
// sum all

const result = numbers.filter((value) => value % 2 === 0)
    .map((value) => value * 2)
    .reduce((accum, value) => accum + value);

console.log(result)