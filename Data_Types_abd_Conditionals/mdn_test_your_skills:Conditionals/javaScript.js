//// Conditional 1 
 
// let season = 'fall';
// let response;

// // Add your code here
// if (season === "summer"){
//     response ="It is summer time. Remember to wear sunscreen.";
// }
// else if (season === "winter"){
//     response = "It is winter time. Remember to dress warm.";
// }
// else{
//     response = "We don't know what season it is";
// }
// // Don't edit the code below here!

// const section = document.querySelector('section');

// let para1 = document.createElement('p');
// para1.textContent = response;
// section.appendChild(para1);


// Conditional 2

let response;
let score = 75;
let machineActive = false;

// Add your code here
if (machineActive){
    response = "The machine is switched on";

    if (score < 0 || score > 100){
        response = "This is not possible, an error has occurred.";
    }
    else if (score >= 0 && score <=19){
        response = "THat was a terrible score - total fail!";
    }
    else if (score >= 20 && score<=39){
        response = "You know some things, but it's a pretty bad score. Needs improvement.";
    }
    else if (score >= 40 && score <= 69){
        response = "YOu did a passable job, not bad!";
    }
    else if(score >= 70 && score <= 89){
        response = "That's a great score, you really know your stuff.";
    }
    else if (score >= 90 && score <= 100){
        response = "What an amazing score! did you cheat? Are you for real?";
    }
}
else{
    response = "Please switch on the machine to play";
}

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);



