/* Factory functions: functions that return objects */

function createPerson(personName,personSurname, personAge, personHeight, personWeight){
    return {
        personName,
        personSurname,
        personAge,
        personHeight,
        personWeight,

        // get: to use a function as an attribute

        get bmi(){
            return (this.personWeight / (this.personHeight ** 2)).toFixed(2)
        },

        // get + setter: to use a function as an attribute and to allow modify values

        get fullName(){
            return `${this.personName} ${this.personSurname}`
        },

        set fullName(valueToBeChanged){
            // getting the result of the getter Full name and spliting it to get an array
            valueToBeChanged = valueToBeChanged.split(" ");
            this.personName = valueToBeChanged.shift();
            this.personSurname = valueToBeChanged.join(" ");
            return `${this.personName} ${this.personSurname}`
        }
        // the word "this" is used to point attributes of the object.
    }
}

const p1 = createPerson("Lucas", "Gomes", 20, 1.7, 88);

// exhibits Lucas feitoza, but my full name is Lucas feitoza gomes 
console.log(p1.fullName);

p1.fullName = "Lucas feitoza gomes";
console.log(p1.fullName);

// exhibiting my bmi

console.log(p1.bmi)