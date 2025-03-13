//// Check the range between 
//// Write an if condition to check that age is between 14 and 90 inclusively
//// "Inclusively" means that age can reach edges 14 or 90

if (age>=14 && age<=90);

//// Check the range outside
//// Write an if conditon to check that age is NOT between 14 and 90 inclusively
//// Create two variants: the first one using NOT !, the second one - withoutt it

if (!(age>=14 && age<=90));

if (age <14 || age>90);

//// A question about "if"
//// Which of these alerts are going to execute?
//// What will the results of the expressions be inside if(...)?

if (-1||0) alert('first'); //-1, first
if (-1&&0) alert('second'); //0
if (null||-1 && 1) alert ('third'); //1, third

//// CHeck the login 
//// Write the code which asks for a login with prompt
//// Hint: passing an empty input to a prompt returns an empty string''
//// Pressing ESC during a prompt returns null
let input = prompt("Who is entering the system?",'');

if (input == "Admin"){
    let answer = prompt("What is the password?",'');

    if (answer === "TheMaster"){
        console.log("Welcome!");
    }
    else if (answer === '' || answer === null){
        console.log("Canceled");
    }
    else{
        console.log("Wrong password");
    }
}

else if (input === '' || input=== null){
    console.log("Canceled");
}
else {
    console.log("I don't know you");
}



