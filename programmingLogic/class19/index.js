// break and continue

const numbers = [0,1,2,3,4,5,6,7,8,9];

for (let number of numbers){
    if (number === 0){
        continue;
    }
    if (number ===8){
        console.log("i found the number " + number)
        console.log("exiting the loop...")
        break;
    }
}