//numeric seperator is a feature in JavaScript  that allows you to use underscores (_) as separators in numeric literals to improve readability. It can be used in decimal, binary, octal, and hexadecimal literals. For example, the number 1_000_000 is equivalent to 1000000, and the number 0b1010_1101 is equivalent to 0b10101101.

let million = 1000000; // 1000000 is a literal value assigned to the variable million
let billion = 1000000000; // 1000000000 is a literal value assigned to the variable billion 


let millionWithSeparator = 1_000_000; // 1_000_000 is a numeric separator value assigned to the variable millionWithSeparator

let billionWithSeparator = 1_000_000_000; // 1_000_000_000 is a numeric separator value assigned to the variable billionWithSeparator

console.log(million);   // Output: 1000000
console.log(billion);   // Output: 1000000000       

console.log(millionWithSeparator); // Output: 1000000
console.log(billionWithSeparator); // Output: 1000000000    


let binaryWithSeparator = 0b1010_1101; // 0b1010_1101 is a numeric separator value assigned to the variable binaryWithSeparator     
console.log(binaryWithSeparator); // Output: 173

//bigint literal is a numeric literal that represents an integer value that is too large to be represented by the standard Number type in JavaScript. In JavaScript, BigInt literals are represented by appending the letter "n" to the end of the integer value. For example, the BigInt literal 1234567890123456789012345678901234567890n represents a very large integer value.
let bigIntLiteral = 1234567890123456789012345678901234567890n;  
console.log(bigIntLiteral); // Output: 1234567890123456789012345678901234567890n    


let big2 = bigInt("1234567890123456789012345678901234567890"); // 1234567890123456789012345678901234567890 is a BigInt value assigned to the variable big2
console.log(big2); // Output: 1234567890123456789012345678901234567890n


let bigfromNum = bigInt(42); // 42 is a BigInt value assigned to the variable bigfromNum
console.log(bigfromNum); // Output: 42n

