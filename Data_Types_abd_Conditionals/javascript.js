//////////// The JavaScript language - JavaScript Fundamentals
// Data Types
// console.log(1/0);
// console.log(Infinity);
// console.log("not a number"/2);

// let name = "John";
// console.log(`Hello, ${name}`);

// let age = null;
// let age2;
// console.log(age2);

// let name = "Ilya";
// console.log(`hello ${1}`); // hello 1
// console.log(`hello ${"name"}`); // hello name
// console.log(`hello ${name}`); //hello Ilya

//////////////// Handling text - strings in JavaScript
// const string = "The revolution will not be televised.";
// console.log(string);

// const badString = string;
// console.log(badString);

// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting);

// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined);

// const greeting = "Hello";
// const name = "Chris";
// console.log(greeting + ", " + name); 
// console.log(`${greeting}, ${name}`);


// const newline = `One day you finally knew
// what you had to do, and began,`;
// console.log(newline);

// const bigmouth = 'I\'ve got no right to take my place...'; //escaping symbol /
// console.log(bigmouth);

// const name = "Front ";
// const number = 242;
// console.log(name + number);

// const myString = "123";
// const myNum = Number(myString);
// console.log(typeof myNum);

// const myNum2 = 123;
// const myString2 = String(myNum2);
// console.log(typeof myString2);

//////////////// JavaScript String Methods from W3Schools
// let text = "ABCD";
// let length = text.length;
// console.log(length);

// let text = "HELLO WORLD";
// let C = text.length;
// console.log(length);

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char);

// char = text.charCodeAt(0);
// console.log(char);

// const name = "W3Schools";
// let letter = name.at(2);
// console.log(letter);

// letter = name[2];
// console.log(letter);

// let text = "HELLO WORLD";
// let char = text[0];
// console.log(char);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,13); //Banana
// console.log(part);

// part = text.slice(7); //Banana, Kiwi
// console.log(part);

// part = text.slice(-12);  //Banana, Kiwi
// console.log(part);

// part = text.slice(-12,-6);
// console.log(part);  //Banana

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7,13);  //Banana
// console.log(part);

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);

// text2 = text1.toLowerCase();
// console.log(text2);

// text1 = "Hello";
// text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// text1 = "           Hello World         ";
// text2 = text1.trim();
// console.log(text1);
// console.log(text2);

// text2 = text1.trimStart();
// console.log(text2);

// text2 = text1.trimEnd();
// console.log(text2);

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded);
// padded = text.padStart(4,"x");
// console.log(padded);

// let numb = 5;
// text = numb.toString();
// padded = text.padStart(4,"0");
// console.log(padded);


// let num = 5;
// let text = num.toString();
// let padded = text.padStart(4,"0");
// console.log(padded);

// text = num.toString();
// padded = text.padEnd(4,"0");
// console.log(padded);

// text = num.toString();
// padded = text.padEnd(4,"x");
// console.log(padded);

// let text = "Hello world!";
// let result = text.repeat(4);
// console.log(result);

// let text = "Please visit Microsoft! Microsoft offers many things.";
// let newText = text.replace("Microsoft","USA");
// console.log(newText); //replace() only replaces the first match
// console.log(text);

// newText = text.replace(/MICROSOFT/i,"USA"); ///.../i
// console.log(newText);

// newText = text.replace(/MICROSOFT/ig,"USA"); ///.../g reaplces all matches
// console.log(newText);

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll(/Cats/g,"Dogs");
// text = text.replaceAll(/cats/g,"dogs");
// console.log(text);

// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray[0]);
// console.log(myArray);

// let text2 = "Hello";
// single = text2.split("");
// console.log(single);

///// Character access
// let display = "cat".charAt(1);
// console.log(display);
// display = "cat"[1];
// console.log(display);

// const a = "a";
// const b = "b";
// if (a<b) {
//     console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//     console.log(`${a} is greater than ${b}`);
// } else {
//     console.log(`${a} and ${b} are equal.`);
// }


// function areEqualCaseInsensitive(str1, str2) {
//     return str1.toUpperCase() === str2.toUpperCase();
// }


// const areEqualInUpperCase = (str1, str2) =>
//     str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) =>
//     str1.toLowerCase() === str2.toLowerCase();

// console.log(areEqualInUpperCase("a","A"));


// console.log(null == undefined); //true
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined > 0); //false
// console.log(undefined < 0); //false
// console.log(undefined == 0); //false

// console.log(5 > 4); //true
// console.log("apple" > "pineapple"); //false
// console.log("2" > "12"); //true
// console.log(undefined == null); //true
// console.log(undefined === null); //false
// console.log(null == "\n0\n"); //false because null only equals to undefined
// console.log(null === +"\n0\n"); //false

// let hour = new Date().getHours();
// if (hour < 10) {
//     greeting = "Good morning";
// } else if (hour < 20) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);

// let text;
// if (Math.random() < 0.5) {
//     text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
// } else {
//     text = "<a href='https://wwf.org'>Visit WWF</a>";
// }
// document.getElementById("demo").innerHTML = text;
// console.log(text);


///////////////// Logical operators
// console.log(true || true); //true
// console.log(false || true); //true
// console.log(true || false); //true
// console.log(false ||false); //false

// if (1 || 0) {
//     alert('truthy!');
// }

// let hour = 9;

// if (hour < 10 || hour >18) {
//     console.log("The office is closed");
// }

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour >18 || isWeekend) {
//     console.log("The office is closed");
// }

// console.log(true || alert("not printed"));
// console.log(false || alert("printed"));

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//     console.log("The time is 12:30");
// }


// if (1 && 0) {
//     console.log("Won't work, because the result is falsy.");
// }

// console.log(1 && 0);
// console.log(1 && 5);

// console.log(null && 5);
// console.log(0 && "no matter what");

// console.log(1 && 2 && null && 3);
// console.log(1 && 2 && 3);

// console.log(!!"non-empty string");
// console.log(!!null);

// console.log(Boolean("non-empty string"));
// console.log(Boolean(null));

///// Tasks
// console.log(null || 2 || undefined); //2

// alert(alert(1) || 2 || alert(3)); //alert(1), 2

// console.log(1 && null && 2); //null

// alert(alert(1) && alert(2)); //1, undefined

// alert(null || 2 && 3 || 4); // null || 3 || 4, return 3

// let age;
// if (age >= 14 && age <= 90) {
//     console.log("Right Age");
// }

// let age;
// if (!(age >= 14 && age <= 90)) {}
// if (age < 14 || age > 90) {}

// if (-1 || 0) alert("first"); //-1, first
// if (-1 && 0) alert("second"); // 0, undefined
// if ( null || -1 && 1) alert("third"); // 1, third

// let answer = prompt("Who is there?","");
// if (answer == "Admin") {
//     let password = prompt("What is the password?","");
//     if (password == "TheMaster"){
//         console.log("Welcome");
//     } else if (password == "" || password == null){
//         console.log("Canceled");
//     }else {
//         console.log("Wrong password");
//     }
// } else if (answer == "" || answer == null) {
//     console.log("Canceled");
// } else {
//     console.log("I don't know you");
// } 

//////////// Making decisions in your code - conditionals
// const greeting = isBirthday
//   ? "Happy birthday Mrs.Smith - we hope you have a great day!"
//   : "Good morning Mrs. Smith.";









