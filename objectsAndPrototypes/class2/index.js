// The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

function Product(productName, price, stock) {

    // define property

    Object.defineProperty(this, "productName", {
        enumerable: true, // allows the property(keys) to be displayed 
        value: productName, // defines the value of the property
        writable: true, // tells if the property can be reassigned to another value
        configurable: false // tells if the property can be modified(deleted)
    })

    Object.defineProperties(this, {
        price : {
            enumerable: true, // allows the property(keys) to be displayed 
            value: price, // defines the value of the property
            writable: true, // tells if the property can be reassigned to another value
            configurable: false // tells if the property can be modified(deleted)
        },
        stock : {
            enumerable: true, // allows the property(keys) to be displayed 
            value: stock, // defines the value of the property
            writable: true, // tells if the property can be reassigned to another value
            configurable: true // tells if the property can be modified(deleted)
        }
    })
}

const product1 = new Product("apple juice", 5, 1000);
console.log(product1);

product1.stock = 999;
console.log(product1);

delete product1.price;
console.log(product1);
