let a = 10;
let b = 20;

//greater Then

let c = a>b;
console.log(c); // false

//smaller Then

let d = a<b;
console.log(d); // true

// (==) Equal to

console.log(1 == true);       // true (type coercion: true becomes 1)
console.log(0 == false);      // true (type coercion: false becomes 0)
console.log(null == undefined); // true (special case)
console.log("5" == 5); // true (type coercion: "5" becomes 5)

// Not Equal To (!=)

console.log(1 != false);      // true (false becomes 0)
console.log(null != 0);       // true
console.log("hello" != "Hello"); // true (case sensitive)

// Strict Equal To (===)


console.log(0 === false);     // false (different types)
console.log(null === undefined); // false (different types)
console.log(NaN === NaN);     // false (NaN is never strictly equal to itself)
console.log(+0 === -0);      // true (positive and negative zero are equal)

// Strict Not Equal To (!==)
console.log(0 !== false);     // true (different types)
console.log(NaN !== NaN);     // true (NaN is never strictly equal to itself)
console.log("true" !== true); // true (different types)


// Greater Than (>) and Less Than (<)
console.log("10" > 5);       // true ("10" becomes 10)
console.log("apple" > "banana"); // false (lexicographical comparison)
console.log(null > 0);        // false (null becomes 0)
console.log(undefined < 0);   // false (undefined becomes NaN, comparisons with NaN are false)

// Greater Than or Equal To (>=) and Less Than or Equal To (<=)
console.log("10" >= 10);      // true ("10" becomes 10)
console.log(null >= 0);       // true (null becomes 0)
console.log(undefined <= NaN);   // false (undefined becomes NaN)