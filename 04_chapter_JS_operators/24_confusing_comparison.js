//Rule of thumb
// loose equality (==) should be avoided in favor of strict equality (===) to prevent unexpected type coercion and ensure more predictable comparisons.
// strict equality (===) is preferred over loose equality (==) because it checks both value and type, reducing the risk of unexpected results due to type coercion.

// Empty string vs 0 vs "0"
console.log("" == 0); // Output: true (loose equality, type coercion occurs)
console.log("" === 0); // Output: false (strict equality, no type coercion)
console.log("0" == 0); // Output: true (loose equality, type coercion occurs)
console.log("0" === 0); // Output: false (strict equality, no type coercion)


//but 
console.log("" == "0"); // Output: false (loose equality, no type coercion occurs)
//the concept in above is transitive broken,coerced)


console.log(""=== "0"); // Output: false (strict equality, no type coercion)
console.log(0 === "0"); // Output: false (strict equality, no type coercion)
console.log(" " === 0); // Output: false (strict equality, no type coercion)