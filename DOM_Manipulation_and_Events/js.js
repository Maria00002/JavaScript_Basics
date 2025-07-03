// // create three variables that hold references to the list <ul>, <input>,
// // <button>

// const ulRef = document.querySelector("ul");
// const inputRef = document.querySelector("input");
// const buttonRef = document.querySelector("button");


// // Create a function that will run   in response to the button being clicked
// buttonRef.addEventListener("click", () => {
//     // storing the current value of the input element in a variable
//     // next, empty the input element by setting its value to an empty string
//     let userInput =  inputRef.value;
//     inputRef.value = "";

//     // Create three new elements
//     // a list item <li>, <span>, and <button> and store them in variables
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     const button = document.createElement("button");

//     // Append the span and the button as children of the list item
//     li.appendChild(span);
//     li.appendChild(button);

//     // Set the text content of the span to the input element value you saved 
//     // earlier, and the text content of the button to 'Delete'
//     span.textContent = userInput;
//     button.textContent = "Delete";

//     // Append the list item as a child of the list
//     ulRef.appendChild(li);

//     // Attach an event handler to the delete button, when clicked, it will 
//     // delete the entire list item
//     button.addEventListener("click", () => {
//         ulRef.removeChild(li);
//     });    

//     inputRef.focus();

// });


const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const userInput = input.value;
    input.value = ""; //not sure about this line

    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    li.appendChild(span);
    li.appendChild(btn);

    span.textContent = userInput;
    btn.textContent = "Delete";

    ul.appendChild(li);

    btn.addEventListener("click", () => {
        ul.removeChild(li);
    });

    document.getElementById("item").focus();


});





