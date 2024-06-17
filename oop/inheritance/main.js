// to inherit something we use the keyword "extends"

class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Child extends Parent {
    constructor(name, age, hobbies) {
        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        super(name, age);
        this.hobbies = hobbies
    }
}

const parent = new Parent("Clint", 88);
const child = new Child("Scott", 33, ["Play videogames", "Sing", "Write"])

console.log(parent);
console.log(child);