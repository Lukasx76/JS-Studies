// function formatDay(day){
//     let response;
//     switch (day){
//         case 0:
//             response = "Domingo";
//             break; 
//         case 1:
//             response = "Segunda-feira";
//             break; 
//         case 2:
//             response = "Terça-feira";
//             break; 
//         case 3:
//             response = "Quarta-feira";
//             break; 
//         case 4:
//             response = "Quinta-feira";
//             break; 
//         case 5:
//             response = "Sexta-feira";
//             break; 
//         case 6:
//             response = "Sábado";
//             break;
//         default:
//             response = ""
//             break;
//     }
//     return response;
// }
// function getDayFormated(){
//     const date = new Date();
//     let dayOfTheWeek = date.getDay();
//     dayOfTheWeek = formatDay(dayOfTheWeek);
//     return dayOfTheWeek;
// }
// function getDayOfMonthFormated(){
//     const date = new Date();
//     const monthDay = date.getDate();
//     return monthDay;
// }
// function getMonthFormated(){
//     const date = new Date();
//     const options = { month : "long" };
//     const monthFormated = new Intl.DateTimeFormat("pt-BR", options).format(date);
//     return monthFormated;
// }
// function getYearFormated(){
//     const date = new Date();
//     const getYear = date.getFullYear();
//     return getYear;
// }
// function getHoursFormated(){
//     const date = new Date();
//     let getHours = date.getHours();
//     getHours = getHours < 10 ? "0" + String(getHours) : getHours;
//     return getHours;
// }
// function getMinutesFormated(){
//     const date = new Date();
//     let getMinutes = date.getMinutes();
//     getMinutes = getMinutes < 10 ? "0" + String(getMinutes) : getMinutes;
//     return getMinutes;
// }
// function displayDate(){
//     const tagH1 = document.querySelector(".container h1");
//     tagH1.innerHTML = `${getDayFormated()},${getDayOfMonthFormated()} de ${getMonthFormated()} de ${getYearFormated()} ${getHoursFormated()}:${getMinutesFormated()}`;
// }
// displayDate();

// the functions above are hard coded, but there is another way

const tagH1 = document.querySelector(".container h1");
const date = new Date();
let dateFormated = new Intl.DateTimeFormat("pt-BR", {dateStyle: "full", timeStyle: "short"}).format(date);

tagH1.innerHTML = dateFormated