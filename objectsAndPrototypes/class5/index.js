// prototypes: Prototypes are the mechanism by which JavaScript objects(instances) inherit features from one another.

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype

// One of the advantages of prototype is that its use allows us to add new functionalities to the code later on, without needing to add the same functionalities object by object, we simply call Constructor.protype.attribute/method = something.

function Person(name, age, ...hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
}

// adding attribute profession to the Constructor Person using prototype

Person.prototype.profession = "Basketball player";

const p1 = Person("Nikola jokic", 28, ["watch horse races", "play basketball"])
const p2 = Person("Stephen curry", 35, ["Play golf", "play basketball"])