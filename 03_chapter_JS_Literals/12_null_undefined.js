//null = when a variable is explicitly assigned with no value, it is considered null. It represents the intentional absence of any object value.
//undefined = when a variable is declared but not assigned any value, it is considered undefined. It represents the absence of a value or an uninitialized state.   

let nullValue = null; //null is a literal value assigned to the variable nullValue
let undefinedValue; //undefined is a literal value assigned to the variable undefinedValue      

console.log(nullValue); // Output: null
console.log(undefinedValue); // Output: undefined

let a = 5; //5 is a literal value assigned to the variable a
console.log(a); // Output: 5    
console.log(typeof nullValue); // Output: object (this is a known quirk in JavaScript, null is considered an object)

let namey;
console.log(namey); // Output: undefined
console.log(typeof name); // Output: undefined

let username = null; //null is a literal value assigned to the variable username
console.log(username);  // Output: null 
console.log(typeof username); // Output: object (this is a known quirk in JavaScript, null is considered an object) 
