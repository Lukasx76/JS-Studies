// manipulating prototypes

function Person(name, age, ...hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
}

Person.prototype.run = function() {console.log(this.name + " is running")};
Person.prototype.talk = function() {console.log(this.name + " is talking")};

const p1 = new Person("John", 33, "read", "travel", "learn new languages");
// "inheriting" prototype of Person 

const p2 = {
    name : "Ja morant",
    age: 24,
    hobbies: ["post ig lives wielding a gun", "play basketball"]
}
Object.setPrototypeOf(p2, Person.prototype);

// creating a object directly using Object.create

const p3 = Object.create(Person.prototype, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "James harden"
    },

    age : {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 34
    },

    hobbies: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: ["Being dramatic", "Play basketball", "go to parties"]
    }
})

p3.talk();