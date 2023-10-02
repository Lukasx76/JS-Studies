// when we create a function we can call a global variable inside of it, but not the opposite.

const birthdayDate = "2002";

function displayBirthdayDate(){
    console.log(birthdayDate);
}

function callFunction(){
    displayBirthdayDate();
}

callFunction();