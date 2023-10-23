// has the same usage as pop, shift, push, unshift

const arr = new Array("Lebron", "Steph", "Joker", "Luka", "Giannis");

// pop
arr.splice(-1, 1);
console.log(arr);

// push
arr.splice(arr.length, 0, "Durant")
console.log(arr);

// shift
arr.splice(0, 1);
console.log(arr);

// unshift
arr.splice(0, 0, "Devin booker");
console.log(arr);