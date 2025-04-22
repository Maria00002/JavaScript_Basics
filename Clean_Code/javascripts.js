// Clean Code
// Lesson Overview
// Know how to distinguish hard to read code from easy to read code
// Use programming principles to make your code cleaner
// Write good comments

// Example A
const x = function (z) {
    const w = "Hello ";
return w+z;
}

console.log(x("John"));

// Example B
const generateUserGreeting = function (name) {
    const greeting = "Hello ";
    return greeting + name;
}

console.log(generateUserGreeting("John"));

// About camelCase
// Naming functions and variables
// A good name is descriptive
// User consistent vocabulary

// Consistent naming
// function getPlayerScore();
// function getPlayerName();
// function getPlayerTag();


const numberOfThings = 10;
const myName = "Thor"; 
const selected = true;

function getCount() {
    return numberOfThings;
}

// Use searchable and immediately understandable names
setTimeout(stopTimer, 3600000);

// THE VARIABLE IS DECLARED WITH ALL CAPS WHEN THE PROGRAMMER IS ABSOLUTELY
// SURE THAT THE VARIABLE IS TRULY A CONSTANT
const ONE_HOUR = 3600000; // Can even write as 60 * 60 * 1000;
setTimeout(stopTimer, ONE_HOUR);

// Indentation and line length
let reallyReallyLongLine = something + somethingElse + anotherThing + howManyTacos + oneMoreReallyLongThing;

// You could format it like this
let reallyReallyLongLine2 = 
    something + 
    somethingElse + 
    anotherThing + 
    howManyTacos +
    oneMoreReallyLongThing;

// Or manybe like this
let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                    howManyTacos + oneMoreReallyLongThing;


// About comments
// Comments are a great tool, 
// Don't comment when you should be using git

// Tell why, not how
// Extracts text inside square brackets (excluding the brackets)
function extractText(s) {
    return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}

// But often, we can make the code speak for itself without comments
function extractTextWithinBrackets(text) {
    const brakcetTextStart = text.indexOf("[") + 1;
    const bracketTextEnd = text.indexOf("]");
    return text.substring(brakcetTextStart, brackTextEnd);
}


function calcualteBMI(height, weight) {
    // The formula for BMI is weight in kilograms divided by height in meters squared
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
}







