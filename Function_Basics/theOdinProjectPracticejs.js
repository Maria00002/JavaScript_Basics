//Write a function called add7 that takes one number and returns that number +7;
function add7(a){
    // return a+7;
    let number_a = +a;
    console.log(number_a+7);
}

let number = prompt("Enter a number: ", '');
add7(number);

//Write a function called multiply that takes 2 numbers 
// and returns their product
function multiply(num1, num2){
    console.log((+num1) * (+num2));
}

let number1 = prompt("Enter the first number: ","");
let number2 = prompt("Enter the second number: ",'');
multiply(number1, number2);

//Write a funciton called capitalize that takes a string and returns that 
//string with only the first letter capitalized. Make sure that it can take 
//strings that are lowercase, UPPERCASE or BoTh

function capitalize(string1){
    let string_lowercase = string1.toLowerCase();
    let string_return = string_lowercase.charAt(0).toUpperCase() + string_lowercase.slice(1);
    console.log(string_return);
}

let string = prompt("Please enter a string: ","");
capitalize(string);

// Write a function called lastLetter that takes a string and 
// returns the very last letter of that string
function lastLetter(string){
    console.log(string.charAt(string.length-1));
}

let string = prompt("Please enter a string: ", "");
lastLetter(string);