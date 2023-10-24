// getters and setters

function Product(productName) {

    // define property

    Object.defineProperty(this, "productName", {
        enumerable: true, // allows the property(keys) to be displayed 
        get: function() {
            return productName
        },
        set: function(value) {
            productName = value;
        },
        configurable: false // tells if the property can be modified(deleted)
    })
}

const prod = new Product("shirt");
console.log(prod.productName);

prod.productName = "shoe";
console.log(prod.productName)