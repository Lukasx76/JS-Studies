// learning how to use switch statements

let date = new Date();
let dayOfTheWeek = date.getDay();
let response;

switch (dayOfTheWeek){
    case 0:
        response = "Sunday";
        break; 
    case 1:
        response = "Monday";
        break; 
    case 2:
        response = "Tuesday";
        break; 
    case 3:
        response = "Wednesday";
        break; 
    case 4:
        response = "Thursday";
        break; 
    case 5:
        response = "Friday";
        break; 
    case 6:
        response = "Saturday";
        break;
    default:
        response = ""
        break;
}

console.log(response);