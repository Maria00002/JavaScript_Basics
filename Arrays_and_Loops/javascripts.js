// arrays, loops, Test-Driven Development(TDD)
// Array: an ordered collection of items (strings, numbers, or other things)
// JavaScript Arrays from W3Schools
const cars = ["Saab","Volvo","BMW"];
console.log(cars);

const carsA = [];
carsA[0] = "Saab";
carsA[1] = "Volvo";
carsA[2] = "BMW";
console.log(carsA);

let car = cars[0];
console.log(car); //Saab

cars[0] = "Opel";
console.log(cars);

const fruits = ["Banana","Orange","Apple","Mango"];
//toString() converts an array to a string of (comma separated) array values
let fruitString = fruits.toString();
console.log(fruitString);

console.log(cars);

// Arrays are special type of objects. 
// The typeof operator returns "object" for arrays
const person = ["John","Doe",46];
console.log(person[0]); 

const person1 = {firstName:"John", lastName:"Doe", age:46};
console.log(person1.lastName);