// for each: similar to filter, map and reduce. Receives a function with the parameters value, index and array, and iterates through it.

const bestNbaPlayers2023 = ["Lebron james", "Stephen curry", "Luka doncic", "Joel embiid", "Kevin durant", "Devin booker", "Nikola jokic", "Giannis antetokumpo", "Jamal murray"]

bestNbaPlayers2023.forEach(function(value, index, array) {
    console.log(value, index);
})

// short way 

bestNbaPlayers2023.forEach(value => value);