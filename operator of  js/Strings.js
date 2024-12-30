// let firstName = "Akash";
// let lastName = "Kumar";
// let fullName = firstName + " " + lastName;
// console.log(fullName); // Output: Akash Kumar


let text = "  Hello, World!  ";
console.log(text);

// Removing whitespace
let trimmedText = text.trim(); // "Hello, World!"
console.log(trimmedText); // Output: Hello, World!

// Converting to uppercase
let uppercaseText = text.toUpperCase(); // "  HELLO, WORLD!  "
console.log(uppercaseText); // Output:  HELLO, WORLD!

// Converting to lowercase
let lowercaseText = text.toLowerCase(); // "  hello, world!  "
console.log(lowercaseText); // Output:  hello, world!

// Extracting a substring
let substring = text.substring(7, 13); // "World!"
console.log(substring); // Output: World!

// Finding the index of a substring
let index = text.indexOf("World"); // 7

console.log(index); // Output: 7

// Replacing a substring
let replacedText = text.replace("World", "Universe"); // "  Hello, Universe!  "

console.log(replacedText); // Output:  Hello, Universe!

// Splitting a string into an array of substrings
let words = text.split(" "); // ["Hello,", "World!"]

console.log(words); // Output: ["Hello,", "World!"]
