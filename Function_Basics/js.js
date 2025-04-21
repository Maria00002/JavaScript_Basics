// function favouriteAnimal(animal){
//     return animal + " is my favourite animal!";
// }

// console.log(favouriteAnimal('goat'));

// // mdn web docs
// // Functions-reusable blocks of code
// const myText = "I am a string";
// const newString = myText.replace("string","sausage");
// console.log(newString);

// const myArray = ["I","love","chocolate","frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);

// const myNumber = Math.random();

// // Functions versus methods
// function random(number) {
//     return Math.floor(Math.random()*number);
// }

// console.log(random(100));

// function hello(name="Chris") {
//     console.log(`Hello ${name}!`);
// }

// hello("Ari");
// hello();

// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
// }

// textBox.addEventListener("keydown", logKey);

// Function scope and conflicts
// the top-level outside all your functions is called the global scope

// Function return values
// Learning outcomes
// What returs values are
// HOw to use the return values of existing functions
// Adding return values to your own functions

// const myText = "The weather is cold.";
// const newString = myText.replace("cold","warm");
// console.log(newString);

// // Using return values in your own functions
// // Active learning: A return value function
// function squared(num) {
//     return num *num;
// }

// function cubed(num) {
//     return num * num * num;
// }


// function factorial(num) {
//     if (num < 0) return undefined;
//     if (num === 0) return 1;
//     let x = num - 1;
//     while (x > 1) {
//         num *= x;
//         x--;
//     } 
//     return num;
// }

// console.log(factorial(-13));

// Functions
// Function Declaration
// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
//     alert(message);
// }


// showMessage();
// alert(message); // The variable is local to the function

// Outer variables
// A function can access an outer variable as well, for example
// let userName = "John";

// function showMessage() {
//     let userName = "Bob";
//     let message = "Hello, " + userName;
//     alert(message);
// }
// alert(userName);
// showMessage();
// alert(userName);

// function showMessage(from, text) {
//     alert(from + ': ' + text);
// }

// showMessage('Ann', 'Hello!');
// showMessage('Ann', "What's up?");

// function showMessage(from, text = "no text given") {
//     from = '*' + from + '*';
//     alert(from + ': ' + text);
// }
// let from = "Ann";

// showMessage(from, 'Hello!');
// showMessage("Ann", undefined);

// // Alternative default parameters
// function showMessage(text) {
//     if (text === undefined) {
//         text = 'empty message';
//     }

//     alert(text);
// }
// showMessage();


// function showMessage(text) {
//     text = text || 'empty';
//     alert(text);
// }

// function showCount(count) {
//     alert(count??"unknown");
// }

// showCount(0);
// showCount(null);
// showCount();

// function sum(a,b) {
//     return a + b;
// }

// let result = sum(1,2);
// alert(result);

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Do you have permission from your parents?');
//     }
// }


// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//     alert('Access granted');
// } else {
//     alert('Access denied');
// }

// function showMovie(age) {
//     if (!checkAge(age)){
//         return;
//     }
//     alert("Showing you the movie");
// }

// showMovie(age);

// function doNothing() {
//     return;
// }

// alert(doNothing() === undefined);

// Functions == Comments
// function showPrimes(n){
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }

//         alert(i);
//     }
// }

// showPrimes(4);

// Function Declaration
// function sayHi() {
//     alert("Hello");
// }

// // Function Expression
// let sayHi = function() {
//     alert("Hello");
// };

// Function is a value
// function sayHi() {
//     alert("Hello");
// }

// let func = sayHi;
// console.log(func);
// sayHi();

// let sayHi = function() {
//     alert("Hello");
// };

// let func = sayHi;
// console.log(func());

// Callback functions
// function ask (question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert("You agreed.");
// }

// function showCancel() {
//     alert("You canceled the execution.");
// }
// // The arguments showOk and showCancel of ask are called callback functions
// // or just callbacks
// ask("Do you agree?", showOk, showCancel);

// FUnciton Expressions to write an equivalent, shorter funciton
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask (
//     "Do you agree?",
//     function() {alert("You agreed.");},
//     function() {alert("You canceled the execution.");}
// );


// Function Expression vs Function Declaration
// Function Declaraion: a function, declared as a separate statement
// function sum(a, b) {
//     return a + b;
// }

// Function expression: a function, created inside an expression 
// or inside another syntax construct
// let sum = function(a, b) {
//     return a + b;
// }

// A Function Expression is created when the execution reaches it and is usable only from that moment
// A Function Declaration can be called earlier than it is defined

// sayHi("John");

// let sayHi = function(name) {
//     alert(`Hello, ${name}`);
// }


let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
    welcome = function() {
        alert('Hello!');
    };
    
} else {
    welcome = function() {
        alert("Greetings!");
    };
}

welcome();


