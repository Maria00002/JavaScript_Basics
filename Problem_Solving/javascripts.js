// Lesson Overview 
// Explain the three steps in the problem solving process
// Explain what pseudocode is and be able to use it to solve problems.
// Be able to break a problem down into subproblems.

// Understand the problem
//Fizz Buss
// Fizz with any number divisble by three
// Buss with any number divisble by five
// For numbers which are multiples of both three and five print FizzBuzz
// Write a program that allows the user to enter a number, print each number
//between one and the number the user entered, Fizz (%3 ==0), Buzz (%5==0)
// FizzBuzz(%3==0 && %5==0) 

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i=1; i<=answer; i++){
    if (i%3===0&&i%5===0){
        console.log("FizzBuzz");
    }
    else if (i%3 ===0){
        console.log("Fizz");
    }
    else if (i%5===0){
        console.log("Buzz")
    }
    else{
        console.log(i);
    }
   
}

// Summary of "How to think like a programmer - lessons in problem solving"
// 1.Understand
// 2.Plan
// 3.Divide
// 4.Stuck?
// 5.Practice
// 6.Conclusion


// Summary of the article "Pseudocode: What It Is and How to Write It" from Built IN
// Pseudocode: What It Is and How to Write It
// Pseudocode is a technique used to describe the distinct steps of an algorithm
// that is easy to understand foor anyone. 

// The Main Constructs of Pseudocode
// SEQUENCE, CASE, WHILE, REPEAT-UNTIL, FOR, IF-THEN-ELSE
// 1.Sequence: represents linear tasks sequentially performed one after the other
// 2.While is a loop with a condition at its beginning
// 3.Repeat-until is a loop with a condition at the bottom
// 4.For is another way of looping
// 5.If-then-else is a conditional statement changing the flow of the algorithm
// 6.Case is the generalization form of If-Then-Else

// // How to Write Pseudocode
// 1 Always capitalize the initial word
// 2 Make only one statement per line
// 3 Indent to show hierarchy, improve readability and show nested constructs
// 4 Always end multi-line sections using any of the END keywords
// 5 Keep your statements programming language independent
// 6 Use the naming domain of the problem
// 7 Keep it simple, concise and readable








