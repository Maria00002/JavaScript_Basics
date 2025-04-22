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

// Array ELements Can Be Objects
// JavaScipt varaibles can be objects. Arrays are special kinds of objects.
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

// Array Properties and Methods
cars.length;
cars.sort();

console.log(cars.sort());
console.log(cars);

const fruitsA = ["Banana","Orange","Apple","Mango"];
let length = fruits.length;
console.log(length);

// Accessing the First Array Element
let fruit = fruitsA[0];
console.log(fruit); //Banana

// Accessing the Last Array Element
let fruitLast = fruitsA[fruitsA.length - 1];
console.log(fruitLast);

{/* <p id="demo"></p> */}
//Looping Array Elements
let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }

// text += "</ul>"
// document.getElementById("demo").innterHTML = text;
console.log("Using a for loop: ");
for (let i = 0; i < fLen; i++) {
    let print = fruits[i];
    console.log(print);
}
console.log("Array.forEach(): ");
// Can also use Array.forEach() function 
fruits.forEach(myFunction);

function myFunction(currentValue) {
    console.log(currentValue);
}













