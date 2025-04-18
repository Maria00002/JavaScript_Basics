// Lesson Overview
// Name at least three kinds of JavaScript errors
// Identify two parts of an error message that help you find where the error originates
// Be able to understand how to research and resolve errors

// ReferenceError: a variable that is not declared and/or initialized within
// the current scope. 
// const a = "Hello";
// const b = "World";

// console.log(c);

//Stack Trace
// const a = 5;
// const b = 10;

// function add(){
//     return c;
// }

// function print(){
//     add();
// }

// print();

// Common Types of errors
// Syntax error
// function helloWorld(){
//     console.log "Hello World!"
// }


// Reference Error
// Type Error
// An operand or argument passsed to a funciton is incompatible with the type
// expected by that operator or function
// or when ttempting to modify a value that cannot be changed
// or when attemping to use a value in an inappropriate way

// const str1 = "Hello";
// const str2 = "World!";
// const message = str1.push(str2);


// Tips for resolving errors
// 1 try understand the error MessageChannel. It shows which lines to examine 
// to find the source of the error
// 2 Google the error
// 3 Use the debugger. set breakpoints. view the value of any given variable 
// at any PointerEvent, step through code line by line
// 4 Make use of the console.  

// Errors vs. warnings
// Errors will stop the execution of the program 
// Warnings are messages that provide you insight on potential problems
// that may not necessarily crash you program at runtime
// Warnings are typically shown in yellow, while errors are typically shown in red

// Summary of ReferenceError from MDN Docs
/* The ReferenceError object represents an error when a variable that 
doesn't exist (or hasn't yet been initialized) in the current scope is 
referenced.

Constructor
ReferenceError() creates a new ReferenceError object
*/

/* SyntaxError
The SyntaxError object represents an error when trying to interpret 
syntactically invalid code. It is thrown when the JavaScript engine 
encounters tokens or token order that does not conform to the syntax of 
the language when parsing code. 

Constructor
SyntaxError() Creates a new SyntaxError object
*/

/* TypeError
The TypeError object represents an error when an operation could not be 
performed, typically (but not exclusively) when a value is not of the 
expected type. 

A TypeError may be thrown when: 
-   an operand or argument passed to a function is incomptaible with the 
    type expected by that operator or function; or
-   when attempting to modify a value that cannot be changed; or
-   when attempting to use a value in an inappropriate way

Constructor
TypeError() creates a new TypeError object
*/








