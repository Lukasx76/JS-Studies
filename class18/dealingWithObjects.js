const person = {
    personName : "Lucas",
    middleName : "Feitoza",
    surname : "Gomes",
    birthdayDate : "18-10-2002",
    hobbies : ["to Read", "to Exercise", "to learn about cybersecurity"],

    listHobbies () {
        this.hobbies.forEach(item => {
            console.log(`I like ${item}`)
        });
    },
    personDetails () {
        console.log(`${this.personName} was born in ${this.birthdayDate}.`)
    }
};

// factory to create objects

function objectFactory(personName, age, hobbies){
    return {
        personName : personName,
        personAge : age,
        hobbiesList : hobbies
    }
};

let person2 = objectFactory("Peter", 22, ["read", "run", "study"]);
console.log(person2.hobbiesList);

