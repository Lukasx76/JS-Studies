// learning about try catch

function sumTwoNumbers (x, y) {
    if (typeof x !== "number" || typeof y !== "number"){
        throw new Error("Value(s) aren't numbers");
    }
    return x + y;
}

try {
    console.log(sumTwoNumbers(10, 20));
    console.log(sumTwoNumbers(10, '20'));
} catch(error) {
    // console.log(error)
    console.log("One or more numbers of the values provided aren't numbers")
}