// // Working with variables
// let admin;
// let name;

// name = "John";
// admin = name;
// console.log(admin);

// // Giving the right name
// const EARTH = "Earth";
// let currentUser = "John";

// //Uppercase const?
// const BIRTHDAY = '18.04.1982';
// const age = someCode(BIRTHDAY);


//Basic math in JavaScript - numbers and oeprators (mdn web docs)
const myInt = 5;
const myFloat = 6.667;
console.log(myInt);
console.log(myFloat);

console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = "74";
myNumber += 3;
console.log(myNumber);
console.log(typeof myNumber);

let myNUmber = "74";
myNUmber = Number(myNUmber) +3;
console.log(myNUmber);

console.log(10+7); //17
console.log(9*8); //72
console.log(60%3); //0

const num1 = 10;
const num2 = 50;
console.log(9*num1); //90
console.log(num1 ** 3); //1000
console.log(num2/num1); //5

console.log(5+10*3); //35
console.log((num2%9) * num1); //50%9 = 5 *10 = 50
console.log(num2 + num1 / 8 + 2); //50+10/8+2 = 50+1.25+2 = 53.25

let x = 3;
let y = 4;
x = y;
console.log(x);

let a = 1;
a += 4; //5
console.log(a); //5

let b = 2;
b -= 3 ; //-1
console.log(b); //-1

let c = 3;
c *= 3; //9
console.log(c); //9

let d = 4;
d /= 5; //0.8
console.log(d); //0.8

console.log(5 === 2+4); //false
console.log(5 !== 2+3); //false
console.log(10<6); //false
console.log(10>20); //false
console.log(3 <= 2); //false
console.log(5 >= 4); //true



