//// Declaring strings
const string = "The revolution will not be televised."
console.log(string);

// const badString1 = THis is a test;
// const badString2 = 'THis is a test;
// const badString3 = THis is a test';

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = 'Double quotes';
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// const badQuotes = 'THis is not allowed!";

//// Embedding JavaScript
// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

//// Concatenating using "+"
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " +name); //"Hello, Chris"
console.log(`${greeting}, ${name}`);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
    score/highestScore*100
}%.`;
console.log(output); //"I like the song FIght the Youth. I gave it a score of 90%"


//// Multiline strings
const newline = `One day you finally knew 
what you had to do, and begin,`;
console.log(newline);

//// Including quotes in strings
const goodQuotes1 = 'She said "I think so!"';
const goodQUotes2 = `She said "I'm not going in there"`;
console.log(goodQuotes1);
console.log(goodQUotes2);

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

//// Numbers vs. strings
const name1 = "Front ";
const number1 = 242;
console.log(name1 + number1);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);