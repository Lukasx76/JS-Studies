class Person {
    // requiring parameters when instatiating the class Person
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    // creating methods

    speak() {
        console.log(`${this.name} is speaking`)
    }

    drink() {
        console.log(`${this.name} is drinking`)
    }

    play() {
        console.log(`${this.name} is playing`)
    }
}

const p1 = new Person("James", "Borrego");
p1.drink()