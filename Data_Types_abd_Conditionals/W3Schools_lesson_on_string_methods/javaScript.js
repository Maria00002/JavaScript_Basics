//// Javascript strings are primitive and immutable: All string methods
//// produce  new string without altering the original string

let text1 = "ABCDEFG" //7
let length = text1.length;
console.log(length);

//// THere are 4 methods for extracting string characters
let text = "HELLO WORLD";
let char = text.charAt(0); //returns the character at a specified index (position) in a string
console.log(char);

char = text.charCodeAt(0); //returns the code of the character at a specified index in a string
console.log(char); //the method returns a UTF-16 code (an integer between 0 and 65535)

const name = "W3Schools";
let letter = name.at(2); //returns an indexed element from a string
console.log(letter); // at() supports negative indexes

letter = name[2];
console.log(letter);

char = text[0];
console.log(char);

//// THREE METHODS FOR EXTRACTING A PART OF A STRING
// slice() extracts a part of a string and returns the extracted part in a new string
text = "Apple, Banana, Kiwi";
let part = text.slice(7,13); //start from start, end not included
console.log(part);

part = text.slice(7);
console.log(part); //omit the second parameter, the method will slice out the rest of the string

part = text.slice(-12); //count start from -1 from the right
console.log(part);

part = text.slice(-12, -6); //end not included
console.log(part);

//// substring()
let str = text;
part = str.substring(7,13);
console.log(part);

// Converting to Upper and Lower Case
text1 = "Hello World";
let text2 = text1.toUpperCase();
console.log(text2);

text2 = text1.toLowerCase();
console.log(text2);

//// concat() joins two or more strings
text1 = "Hello";
text2 = "World";
let text3 = text1.concat(" ", text2); //all string methods return a new string
console.log(text1); //they don't modifu the original string
console.log(text2);
console.log(text3);

text1 = "           Hello World!            ";
text2 = text1.trim();
console.log(text1);
console.log(text2);

text2 = text1.trimStart();
console.log(text2);

text2 = text1.trimEnd();
console.log(text2);

text = "5";
let padded = text.padStart(4, "0");
console.log(padded); //0005

let numb = 5;
text = numb.toString();
padded = text.padStart(4, "0");
console.log(padded); //0005

//// padEnd() method pads a string from the end
text = "5";
padded = text.padEnd(4,"0"); //5000
console.log(padded); 

numb = 5;
text = numb.toString();
padded = text.padEnd(4,"0");
console.log(padded); 

//// repeat() method returns a string with a number of copies of a string
//// returns a new string
//// does not change the original string
text = "Hello World!";
result = text.repeat(2);
console.log(text); 
console.log(result); 

//// replace() method replaces a specified value with another value in a string
//// replace() method returns a new string
//// replace() method returns replaces only the first match
text = "Please visit Microsoft!";
newText = text.replace("Microsoft","W3Schools");
console.log(text); 
console.log(newText);

text = "Please visit Microsoft!";
newText = text.replace(/MICROSOFT/i,"W3Schools");
console.log(newText);

text = "Please visit Microsoft and Microsoft!";
newText = text.replace(/Microsoft/g,"W3Schools");
console.log(newText);

//// replaceAll();
text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);

//// replaceAll() method allows you to specify a regular expression 
//// instead of a string to be replaced. 
text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll(/Cats/g, "Dogs");
text = text.replaceAll(/cats/g, "dogs");
console.log(text);

//// Converting a String to an Array
// text.split(",")
// text.split(" ")
// text.split("|")
text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray[0]);



