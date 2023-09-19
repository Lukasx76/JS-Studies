// checking the hours of the day

let dateObj = new Date();
let hour = dateObj.getHours();

if (hour > 0 && hour < 12) {
    console.log("Good morning!");
}
else if (hour > 12 && hour < 18){
    console.log("Good afternoon");
}
else {
    console.log("Good Night;");
}