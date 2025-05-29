// function favouriteAnimal(animal) {
//     return animal + " is my favourite animal!"
// }

// console.log(favouriteAnimal('Goat'));

/////// Functions - reusable blocks of code

// function hello(name = "Chris") {
//     console.log(`Hello ${name}!`);
// }

// hello("Ari");
// hello();

// const originals = [1,2,3];
// const doubled = originals.map(item => item * 2);
// console.log(doubled);

// const x = 1;
// function a() {
//     const y = 2;
//     output(z);
// }

// function b() {
//     const z = 3;
//     output(y);
// }

// function output (value) {
//     const para = document.createElement('p');
//     document.body.appendChild(para);
//     para.textContent = `Value: ${value}`;
// }


//////////////////// Function return values
// const myText = "The weather is cold";
// const newString = myText.replace("cold","warm");
// console.log(newString);


// function squared(num) {
//     return num * num;
// }

// function cubed(num) {
//     return num * num * num;
// }

// function factorial(num) {
//     if (num < 0 ) return undefined;
//     if (num === 0) return 1;
//     let x = num - 1;
//     while (x > 1) {
//         num *= x;
//         x--;
//     }
//     return num;
// }

//////////// Functions
// function showMessage() {
//     alert('Hello everyone!');
// }

// showMessage();
// showMessage();

// function showMessage() {
//     let message = "Hello, I'm JavaScript!";
//     alert(message);
// }

// showMessage();
// alert(message);

// let userName = "John";

// function showMessage() {
//     userName = "Bob";
//     let message = "Hello, " + userName;
//     alert(message); 
// }
// alert(userName);
// showMessage();
// alert(userName);

// let userName = "John";

// function showMessage() {
//     let userName = "Bob"; // declare a local variable
//     let message = "Hello, " + userName;
//     alert(message); 
// }
// alert(userName);
// showMessage();
// alert(userName);


// function showMessage(from, text) {
//     alert(from + ": " + text);
// }

// showMessage("Ann","Hello!");
// showMessage("Ann","What's up?");


// function showMessage(from, text) {
//     from = "*" + from + "*";
//     alert(from + ": " + text);
// }
// // let from = "Ann";
// // showMessage(from,"Hello!");
// // alert(from);

// showMessage("Ann");

// function showMessage(from, text = "no text given") {
//     alert(from + ": " + text);
// }

// showMessage("Ann", undefined);


// function showMessage(from, text) {
//     if (text === undefined) {
//         text = "no text given";
//     }
//     alert(from + ": " + text);
// }

// showMessage("Ann");


// function showMessage(from, text) {
//     text = text || "no text given";
//     alert(from + ": " + text);
// }

// showMessage("Ann");

// function showMessage(text) {
//     if (text === undefined) {
//         text = "empty message";
//     }

//     alert(text);
// }

// showMessage();

// function showMessage(text) {
//     text = text || "empty";
// }


// function showCount(count) {
//     alert(count ?? "unknown");
// }

// showCount(0);
// showCount(null);
// showCount();

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1,2);
// alert(result);  

// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("Do you have permission from your parents?");
//     }
// }

// let age = prompt("How old are you?",18);

// if(checkAge(age)){
//     alert("Access granted");
// } else {
//     alert("Access denied");
// }

// function doNothing() {return;}
// alert(doNothing() === undefined);

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i;j++) {
//             if (i% j == 0) continue nextPrime;
//         }

//         alert(i); 
//     }
// }

// showPrimes(10);

// function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//         alert(i);
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

/////// Tasks
/// Is "else" required?
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm("Did your parents allow you?");
//     }
// }
// This will prompt the asking of confirmation only when the age is 
// less than 18
/////// The following code will execute the lines of code the same 
///// as above

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     return confirm("Did parents allow you?");
// }


////////// Rewrite the function using "?" or "||"
// function checkAge(age) {
//     let result = (age > 18) ? true : confirm("Did parents allow you?");
//     return result;
// }

// function checkAge(age) {
//     let result = (age > 18) || confirm("Did parents allow you?");
//     return result;
// }

////// Function min(a,b) returns the least of two numbers a and b
// function min(a,b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(min(2,5));
// console.log(min(3,-1));
// console.log(min(1,1));

////////// Function pow(x,n)
let x = prompt("x: ", "");
let n = prompt("n: ","");

if ( n < 1) {
    alert("Please enter a number that is natural values up from 1");
 } else {
    alert(pow(x,n));
 }

function pow(x,n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= x; 
    }
    return result;
}
// console.log(pow(x,n));
// console.log(pow(3,2));
// console.log(pow(3,3));
// console.log(pow(1,100));
// console.log(pow(3,1));














