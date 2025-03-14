let season = 'fall';
let response;

// Add your code here
if (season === "summer"){
    response ="It is summer time. Remember to wear sunscreen.";
}
else if (season === "winter"){
    response = "It is winter time. Remember to dress warm.";
}
else{
    response = "We don't know what season it is";
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    


