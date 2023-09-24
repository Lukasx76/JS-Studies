// learning about while and do while

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const max = 10;
const min = 1;
let number = randomNumber(min,max);

// while: ask first shoot later
while (number !== 2) {
    console.log(number);
    number = randomNumber(min, max);
}

// do while: shoot first ask later
do {
    console.log(number);
    number = randomNumber(min, max);
} while(number !== 2);