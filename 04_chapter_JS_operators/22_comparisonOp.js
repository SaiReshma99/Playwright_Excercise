// == 


//suppose p1 == p2 (checks type)// checks if two values are equal (loose equality)
//suppose p1 === p2(checks type and content) // checks if two values are equal (strict equality)
// !=
// let isNotEqual = a != b;    
//console.log("isNotEqual:", isNotEqual); // Output: true


console.log(5 == "5"); // Output: true (loose equality, type coercion occurs)
console.log(5!== "5"); // Output: true (strict inequality, no type coercion)
//in the above examples: !== is similar to ===, but it checks for inequality instead of equality. It returns true if the values are not equal or if they are of different types, and false if they are equal and of the same type.
//>,<,>=,<=

//example
console.log(5 == "5"); // Output: true (loose equality, type coercion occurs)
console.log(5 === "5"); // Output: false (strict equality, no type coercion)


