// useful object methods

/* 
    assign
    getOwnPropertyDescriptor
    entries
*/

// assign: similar to the spread notation copy the values of an object to another

const player = {
    team: "Real madrid",
    position: "Forward"
}

const player1 = Object.assign({}, {playerName: "Jude bellingham"}, player);
const player2 = Object.assign({}, {playerName: "Vinícius junior"} ,player);
// I am copying the values of player and inserting another key and value.

// entries: returns an array of enumerable properties of an object

for (let entry of Object.entries(player1)) {
    console.log(entry);
} 

// destructuring(unpacking) the entry in the for loop

for (let [key, value] of Object.entries(player2)) {
    console.log(key, value);
}

// getOwnPropertyDescriptor: The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object

function Product(productName) {

    // define property

    Object.defineProperty(this, "productName", {
        enumerable: true, // allows the property(keys) to be displayed 
        value: productName, // defines the value of the property
        writable: true, // tells if the property can be reassigned to another value
        configurable: false // tells if the property can be modified(deleted)
    })
}

const prod = new Product("Skirt");
console.log(Object.getOwnPropertyDescriptor(prod, "productName"));