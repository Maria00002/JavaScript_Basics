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

let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray[0]);
console.log(myArray);

let text2 = "Hello";
single = text2.split("");
console.log(single);


