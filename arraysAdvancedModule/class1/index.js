// review

// a different way to initialize arrays

const characters = new Array("buffy", "scooby", "shaggy");

// add element to the beginning of the array

characters.unshift("fred");

// remove element from the beginning

characters.shift();

// add element to the end of the array

characters.push("naruto");

// remove element from the end of the array

characters.pop();

// by default arrays store values by reference which means that if I assign another characters to another array everything I do to one will reflect in all.

const referencedCharacters = characters;
referencedCharacters.push("kakashi");
referencedCharacters.push("yujiro");

// to avoid this we can use the spread operator

const charactersCopy = [...characters];
charactersCopy.pop();

// transform array into string

const strFromArr =  charactersCopy.join(" ");
console.log(strFromArr)

// transform string into array

const arrFromString = strFromArr.split(" ");
console.log(arrFromString);