/* IIFE - Immediately Invoked function expression: functions that aren't in the global scope*/

// IIFE Example of a function that exhibits user's data

(function(userName,userAge, ...userHobbies){
    console.log(`the user ${userName} is ${userAge} year(s) old, and his/hers hobby is(are): ${userHobbies}.`)
})("Lucas", 20, ["to read", "to exercise", "to learn"])

// it is possible to call a function inside the IIFE function