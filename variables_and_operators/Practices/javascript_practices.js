// Working with variables
let admin;
let name;

name = "John";
admin = name;
console.log(admin);

// Giving the right name
const EARTH = "Earth";
let currentUser = "John";

//Uppercase const?
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);


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

Basic operators, maths
// Remainder %
alert(5 % 2);
alert(8 % 3);
alert(8 % 4);

// Exponentiation **
alert(2**2);
alert(2**3);
alert(2**4);
alert(4**(1/2));
alert(8**(1/3));

// String concatenation with binary +
let s = "my" + "string";
alert(s);
alert('1'+2);
alert(2+'1');
alert(2+2+'1');
alert('1'+2+2);
alert(6-'2');
alert('6'/'2');

// Numeric conversion, unary +
let x = 1;
alert(+x);

let y = -2;
alert(+y);

alert(+true);
alert(+"");

let apples = "2";
let oranges = "3";
alert(+apples + +oranges);

// Operator precedence
// Assignment
let x = 2*2+1;
alert(x);

let a = 1;
let b = 2;
let c = 3 - (a=b+1);
alert(a);
alert(c);

let a,b,c;
a = b = c = 2+2;

alert(a);
alert(b);
alert(c);

// Modify-in-place
let n = 2;
n += 5;
n *= 2;

alert(n);

let n = 2;
n *= 3+5;
alert(n);

//Increment/decrement
let counter = 2;
counter++;
alert(counter);

let counter = 2;
counter--;
alert(counter);

let counter =1;
let a = ++counter;
alert(a);

let counter =1;
let a = counter++;
alert(a);

let counter =1;
counter++;
let a = counter;
alert(a);

let counter = 0;
alert(++counter);

let counter = 0;
alert(counter++);

// Increment/decrement among other operators
let counter = 1;
alert(2* ++counter);

let counter = 1;
alert(2* counter++);

// Comma
let a = (1+2, 3+4);
alert(a);

// Tasks
// THe postfix and prefix forms
let a = 1, b=1;
let c = ++a; // 2;
let d = b++; //1
alert(a); //2
alert(b);   //2
alert(c); //2
alert(d); //1

Assignment result
let a = 2;
let x = 1 + (a*=2);
alert(a); //2*2=4
alert(x); //5

"" + 1 + 0 //10
"" - 1 + 0 // -1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 //"-95"
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //NaN
" \t \n" - 2 //-2

//// Fix the addition
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); 