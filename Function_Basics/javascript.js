function favouriteAnimal(animal){
    return animal + " is my favourite animal!"
}

console.log(favouriteAnimal('Goat'));

const myText = "I am a string";
const newString= myText.replace("string","sausage");
console.log(newString);

const myArray=["I","love","chocolate","frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

const myNumber = Math.random();

const originals = [1,2,3];
const doubled = originals.map(item => item *2);
console.log(doubled);

// Function Return Values
const myText1 = "The weather is cold";
const newString1 = myText1.replace("cold","warm");
console.log(newString1);

// function showMessage(){
//     alert('Hello everyone!');
// }

// showMessage();
// showMessage();

// function showMessage(){
//     let message = "Hello, I'm JavaScript!"; //local variable
//     alert(message);
// }

// showMessage(); //Hello, I'm JavaScript
// alert(message);

// let userName = "John";

// function showMessage(){
//     let message = "Hello, " + userName ; 
//     alert(message);
// }

// showMessage(); //Hello, John

// let userName = "John";

// function showMessage(){
//     userName = "Bob"; // change dthe outer variable
//     let message = "Hello, " + userName ; 
//     alert(message);
// }
// alert(userName); //John
// showMessage(); //Hello, BOb
// alert(userName); //Bob


// let userName = "John";

// function showMessage(){
//     let userName = "Bob"; // declare a local variable
//     let message = "Hello, " + userName ; 
//     alert(message);
// }
// alert(userName); //John
// showMessage(); //Hello, BOb
// alert(userName); //JOhn

// function showMessage(from, text){
//     alert(from+": " +text);
// }

// showMessage('Ann','Hello!');
// showMessage('Ann',`What's up?`);

// function showMessage(from, text){
//     from = '*' + from + '*';
//     alert(from+": " +text);
// }
// let from = "Ann";
// showMessage(from,'Hello!');
// alert(from);

// showMessage("Ann");

// function showMessage(from, text = "no text given"){
//     alert(from + ": " + text);
// }

// showMessage("Ann");
// showMessage("Ann", undefined);

// function showMessage(text) {
//     if (text === undefined){
//         text = 'empty message';
//     }

//     alert(text);
// }

// showMessage();

// function showMessage(text){
//     text = text||"empty";
//     alert(text);
// }

// showMessage();

// function showCount(count){
//     // if count if undefined or null, show "unknown"
//     alert(count ?? "unknown");
// }

// showCount(0); //0
// showCount(null); //unknown
// showCount(); //unknown

//Returning a value
// function sum(a,b){
//     return a+b;
// }

// let result = sum(1,2);
// alert(result); //3

// function checkAge(age){
//     if (age>= 18) {
//         return true;
//     }
//     else {
//         return confirm('Do you have permission from your parents?');
//     }
// }

// let age = prompt('How old are you?', 18);
// if (checkAge(age)){
//     alert('Access granted');
// }
// else {
//     alert("Access denied");
// }

// function showMovie(age){
//     if (!checkAge(age)){
//         return;
//     }

//     alert("Showing you the movie");
// }

// showMovie(age);

// function doNothing(){
//    //empty 
// }

// alert(doNothing() === undefined);


// function doNothing(){
//     return;
// }

// alert(doNothing() === undefined);

// Naming a function
// function showPrimes(n){
//     nextPrime: for (let i =2; i<n;i++){
//         for (let j =2;j<i;j++){
//             if (i%j== 0) continue nextPrime;
//         }
//         alert(i); //a prime
//     } 
// }


//Rewrite the function using '?' or '||'
// function checkAge(age){
//     return (age>18) ? true: confirm('Did parents allow you?');
// }

// function checkAge(age){
//     return (age>18)|| confirm('Did parents allow you?');
// }

//Function min(a,b)
// function min(a,b){
//     if (a<=b){
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// alert(min(2,5));
// alert(min(3,-1));
// alert(min(1,1));


//Function pow(x,n)
// function pow(x,n){
//     let answer = x;
//     while (n>=1){
//         answer *= x;
//         n--;
//     }
//     return answer;
// }

// let x = prompt('x?','');
// let n = prompt('n?','');

// if (n>0){
//     alert(pow(x,n));
// }
// else if (n==0){
//     alert(1);
// }
// else {
//     alert("n should be positive. please try again.");
// }


// alert(pow(3,2));
// alert(pow(3,3));
// alert(pow(1,100));

// Function expressions
// function sayHi(){
//     alert("Hello");
// }

// // alert(sayHi);
// // Function is a value
// let func = sayHi;
// func();
// sayHi();

// let sayHi = function(){
//     alert("Hello");
// };

// let func = sayHi;

// Callback functions
// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no();
// }

// function showOk(){
//     alert("You agreed.");
// }

// function showCancel(){
//     alert("You canceled the execution.");
// }

// ask("Do you agree?", showOk, showCancel);

// function ask(question, yes, no){
//     if (confirm(question))yes()
//     else no();
// }

// ask ("Do you agree?",
//     function(){alert("You agreed.");},
//     function(){alert("You canceled the execution.");}
// );

//Function Expression vs. Function Declaration
//Function Declaration: a function, declared as a separate statement. in the main code flow
// Function Declaration
// function sum(a,b){
//     return a+b;
// }

// Function Expression: a function, created inside an expression or inside syntax construct. 
// let sum = function(a,b){
//     return a+b;
// };

// A function Expression is created when the execution reaches it and is usable only from that moment
// let age = prompt("What is your age?", 18);
// if (age<18){
//     function welcome(){
//         alert("Hello!");
//     }
// }
// else {
//     function welcome(){
//         alert("Greetings!");
//     }
// }

// welcome();

// let age = prompt("What is your age?", 18);
// let welcome;

// if (age<18){
//     welcome = function(){
//         alert("Hello!");
//     }
// }
// else {
//     welcome = function(){
//         alert("Greetings!");
//     }
// }

// welcome();

let age = prompt("What is your age?",18);
let welcome = (age<18)?
    function(){alert("Hello!");}:
    function(){alert("Greetings!");};

console.log(welcome());