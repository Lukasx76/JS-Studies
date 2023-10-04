/*Callback functions: callback functions are used to control the flow of how functions are called after an action. This approach characterizes asynchronous programing.*/

function randomNumber(min=1000, max=2500){
    const num = Math.random() * (max-min) + min;
    return num;
}

const person = {
    personName: "Lucas",
    personAge: 21,
    personHeight: 1.7, // in meters
    personWeight: 88 // in kg
}

/*In order to understand call back, I will display informations about a person in a different order of name, age, height and weight.*/

function displayName(callback){
    setTimeout(function() {
        console.log(`The person name is: ${person.personName}`)
        if (callback) callback();
    }, randomNumber())
}
function displayAge(callback){
    setTimeout(function() {
        console.log(`The person age is: ${person.personAge}`)
        if (callback) callback();
    }, randomNumber())
}
function displayHeight(callback){
    setTimeout(function() {
        console.log(`The person height is: ${person.personHeight}`)
        if (callback) callback();
    }, randomNumber())
}
function displayWeight(callback){
    
    setTimeout(function() {
        console.log(`The person weight is: ${person.personWeight}`)
        if (callback) callback();
    }, randomNumber())
}

displayWeight(displayWeightCallback);

function displayWeightCallback (){
    displayHeight(displayHeightCallback);
}

function displayHeightCallback() {
    displayAge(displayAgeCallback);
}
function displayAgeCallback() {
    displayName(displayAllInformation);
}

function displayAllInformation() {
    console.log("---------------------------------------");
    console.log("All information printed so far:\n")
    console.log(`The person name is: ${person.personName}`);
    console.log(`The person age is: ${person.personAge}`);
    console.log(`The person height is: ${person.personHeight}`);
    console.log(`The person weight is: ${person.personWeight}`);
}