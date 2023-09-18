let str = "A random string";
let strLenght = str.length;

// escaping characters
console.log(str, "\t");
console.log(str, "\v");
console.log(str, "\f");
console.log(str, "\b");
console.log(str, "\r");
console.log(str, "\n");

// slicing
console.log(str.slice(str.lastIndexOf(" "), strLenght));

// substring 
console.log(str.substring(strLenght-3, strLenght-6));

// replacing
let newStr = str.replace("A random string", "           Javascript is cool          ");
console.log(newStr);

// removing white spaces
let trimmedStr = newStr.trim();
console.log(trimmedStr);

// padding strings
let padStr = "";
console.log(padStr.padStart(5, "0"))
