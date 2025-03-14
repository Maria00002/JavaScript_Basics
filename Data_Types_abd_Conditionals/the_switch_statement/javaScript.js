//// The "switch" statement from JavaScript.info
//// A switch statement can replace multiple if checks
//// It gives a more descriptive way to compare a value with multiple variants

let a = 2+2;
switch(a){
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert("I don't know such values");
    
}

//// Grouping of "case"
//// Several variants of case which share the same code can be grouped.
a = 3;

switch (a){
    case 4:
        alert('Right!');
        break;
    case 3: //grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;
    default:
        alert('The result is strange. Really.');
}

//// Type matters
//// Equality check is always strict. The values must be of the same type to match.
let arg = prompt("Enter a value?");
switch(arg){
    case '0':
    case '1':
        alert('One or zero');
        break;
    
    case '2':
        alert('Two');
        break;
    
    case 3:
        alert('Never executes!'); // the result of the prompt is a string "3" which is not
        break; //strictly equal === to the number 3. SO we've got a dead code in case 3.     
                //The default variant will execute
    default:
        alert('An unknown value');
}


//// Tasks
//// Rewrite the "switch" into an "if"
//// Write the code using if... else which would correspond to the following switch

let brower;
if (browser == "Edge"){
    alert("You've got the Edge!");
}
else if (browser == "Chrome"||browser == "Firefox"||browser == "Safari"||browser == "Opera"){
    alert('Okay we support these browsers too');
}
else {
    alert('We hope that this page looks ok!');
}

//// Rewrite "if" into "switch"
//// Rewrite the code below using a single switch statement

let a = +prompt('a?','');
switch (a){
    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}





