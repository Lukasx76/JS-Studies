// "Inheritance"

// Abstract a Product class

function Product(price) {
    this.price = price;
}

// create function increasePrice and decreasePrice

Product.prototype.increasePrice = function(value){ this.price += value}
Product.prototype.decreasePrice = function(value){ this.price -= value}

// specialize Product

function Shirt(size, material, price){
    this.size = size;
    this.material = material;
    Product.call(this, price);
}

// assign the prototype of Shirt to the prototype of Product to access the methods increasePrice and decreasePrice

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt

// assign the prototype of Book to the prototype of Product to access the methods increasePrice and decreasePrice

Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

function Book(name, author, price){
    this.name = name;
    this.author = author;
    Product.call(this, price);
}

// overwriting the method increasePrice for the constructor Shirt

Shirt.prototype.increasePrice = function(value){ this.price = this.price + this.price * (value / 100) }

// 100 , 10 = 110 price + 10 / 100

const p1 = new Shirt("Large", "Cottom", 20);
const p2 = new Book("48 laws of power", "Robert greene", 10);

console.log(p1)
p1.increasePrice(50);
console.log(p1)