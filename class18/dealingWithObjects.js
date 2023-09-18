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
