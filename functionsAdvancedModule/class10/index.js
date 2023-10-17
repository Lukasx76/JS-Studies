// Constructor functions

function Person(personName, personSurname) {
  this.personName = personName;
  this.personSurname = personSurname

  // private attributes and methods

  const ID = "@!2#035-=+/"
  const idKeyWord = () => { console.log("You are not going to guess the ID") };

  // public methods

  this.sayHi = () => {
    console.log(this.personName + " is saying hi")
  };

  this.sayHello = function() {
    console.log(this.personName + " is saying hello")
  };
}

const p1 = new Person("Lebron", "James");
const p2 = new Person("Stephen", "Curry");

p1.sayHi();
p2.sayHello();